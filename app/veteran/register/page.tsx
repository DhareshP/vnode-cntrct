"use client"

import { useState, useEffect, useMemo, useCallback, useReducer } from "react"
import { useQuery } from "@tanstack/react-query"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useToast } from "@/components/ui/use-toast"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import veteranService from "@/services/VeteranService"
import rankService from "@/services/RankService"

// Types
interface FieldCategory {
  category: string
  fields: string[]
}

type FormState = Record<string, any>

type Action =
    | { type: "SET_FIELD"; payload: { field: string; value: any } }
    | { type: "INIT_FIELDS"; payload: { categories: FieldCategory[] } }
    | { type: "RESET" }

// Reducer for form state
function formReducer(state: FormState, action: Action): FormState {
  switch (action.type) {
    case "SET_FIELD": {
      const { field, value } = action.payload
      if (field.includes(".")) {
        const [parent, child] = field.split('.')
        return {
          ...state,
          [parent]: { ...(state[parent] || {}), [child]: value }
        }
      }
      return { ...state, [field]: value }
    }

    case "INIT_FIELDS": {
      const { categories } = action.payload
      const newState: FormState = { ...state }

      categories.forEach(cat => {
        cat.fields.forEach(field => {
          if (field.includes('.')) {
            const [parent, child] = field.split('.')
            if (!newState[parent]) newState[parent] = {}
            if (newState[parent][child] === undefined) newState[parent][child] = ''
          } else if (field === 'children') {
            if (!newState.children) newState.children = []
          } else if (['isPermanentAddressSameAsPresent','battleCasualty'].includes(field)) {
            if (newState[field] === undefined) newState[field] = false
          } else if (newState[field] === undefined) {
            newState[field] = ''
          }
        })
      })

      return newState
    }

    case "RESET":
      return {}

    default:
      return state
  }
}

export default function RegisterPage() {
  const { toast } = useToast()
  const [submitStatus, setSubmitStatus] = useState({ success: false, error: false, message: '' })

  // Form reducer
  const [form, dispatch] = useReducer(formReducer, {})

  // Fetch veteran types
  const { data: veteranTypes = [], isLoading: loadingTypes } = useQuery<string[]>({
    queryKey: ["veteranTypes"],
    queryFn: () => veteranService.getVeteranTypes(),
  })

  // Fetch services enum
  const { data: services = [] } = useQuery<string[]>({
    queryKey: ["services"],
    queryFn: () => veteranService.getServices(),
  })

  // Fetch categories enum
  const { data: categories = [] } = useQuery<string[]>({
    queryKey: ["categories"],
    queryFn: () => veteranService.getCategories(),
  })

  // Fetch awards enum
  const { data: awards = [] } = useQuery<string[]>({
    queryKey: ["awards"],
    queryFn: () => veteranService.getAwards(),
  })

  // Fetch ranks based on selected service and category
  const { data: ranks = [] } = useQuery<string[]>({
    queryKey: ["ranks", form.services, form.category],
    queryFn: () => rankService.getRanks(form.services, form.category),
    enabled: !!form.services && !!form.category
  })

  // Fetch regiments based on selected service
  const { data: regiments = [] } = useQuery<string[]>({
    queryKey: ["regiments", form.services],
    queryFn: () => rankService.getRegiments(form.services),
    enabled: !!form.services
  })

  // Fetch states (use the existing districts method which likely returns states too)
  const { data: states = [] } = useQuery<string[]>({
    queryKey: ["states"],
    queryFn: () => veteranService.getDistricts(), // Assuming this returns states
  })

  // Fetch districts enum (based on selected state) - using direct fetch since method is missing
  const { data: presentDistricts = [] } = useQuery<string[]>({
    queryKey: ["districts", form.presentState],
    queryFn: () => fetch(`/api/districts?state=${form.presentState}`)
        .then(res => res.json()),
    enabled: !!form.presentState
  })

  const { data: permanentDistricts = [] } = useQuery<string[]>({
    queryKey: ["districts", form.permanentState],
    queryFn: () => fetch(`/api/districts?state=${form.permanentState}`)
        .then(res => res.json()),
    enabled: !!form.permanentState
  })

  // Fetch required fields when type selected
  const { data: fieldCategories = [], isFetching: loadingFields } = useQuery<FieldCategory[]>({
    queryKey: ["fields", form.veteranType],
    queryFn: () => veteranService.getRequiredFieldsByVeteranType(form.veteranType!),
    enabled: !!form.veteranType,
  })

  // Handle field categories update
  useEffect(() => {
    if (fieldCategories && fieldCategories.length > 0) {
      dispatch({ type: 'INIT_FIELDS', payload: { categories: fieldCategories } })
    }
  }, [fieldCategories])

  const requiredFields = useMemo(
      () => fieldCategories ? fieldCategories.flatMap((c: FieldCategory) => c.fields) : [],
      [fieldCategories]
  )

  // Handlers
  const setField = useCallback((field: string, value: any) => {
    dispatch({ type: 'SET_FIELD', payload: { field, value } })
  }, [])

  // Handle permanent address checkbox
  useEffect(() => {
    if (form.isPermanentAddressSameAsPresent) {
      setField('permanentAddress', form.presentAddress || '')
      setField('permanentCity', form.presentCity || '')
      setField('permanentState', form.presentState || '')
      setField('permanentDistrict', form.presentDistrict || '')
      setField('permanentPostOffice', form.presentPostOffice || '')
      setField('permanentPoliceStation', form.presentPoliceStation || '')
      setField('permanentPinCode', form.presentPinCode || '')
    }
  }, [form.isPermanentAddressSameAsPresent, form.presentAddress, form.presentCity, form.presentState,
    form.presentDistrict, form.presentPostOffice, form.presentPoliceStation, form.presentPinCode, setField])

  const handleSubmit = useCallback(async () => {
    try {
      if (!form.veteranType) {
        toast({ title: 'Validation', description: 'Select a veteran type', variant: 'destructive' })
        return
      }

      const payload: any = {}
      requiredFields.forEach(f => {
        if (f.includes('.')) {
          const [p, c] = f.split('.')
          payload[p] = { ...(payload[p] || {}), [c]: form[p]?.[c] || '' }
        } else {
          payload[f] = form[f] ?? ''
        }
      })

      await veteranService.createVeteran(payload)
      toast({ title: 'Success', description: 'Registered!', variant: 'default' })
      setSubmitStatus({ success: true, error: false, message: 'Successfully registered veteran' })
    } catch {
      toast({ title: 'Error', description: 'Registration failed', variant: 'destructive' })
      setSubmitStatus({ success: false, error: true, message: 'Failed to register veteran' })
    }
  }, [form, requiredFields, toast])

  // Field rendering helper
  const renderField = useCallback((fieldName: string) => {
    const value = fieldName.includes('.')
        ? form[fieldName.split('.')[0]]?.[fieldName.split('.')[1]] || ''
        : form[fieldName] ?? '';

    const labelText = fieldName.replace(/([A-Z])/g, ' $1').trim();

    if (fieldName === 'isPermanentAddressSameAsPresent' || fieldName === 'battleCasualty') {
      return (
          <div key={fieldName} className="flex items-center">
            <input
                type="checkbox"
                id={fieldName}
                checked={!!value}
                onChange={e => setField(fieldName, e.target.checked)}
                className="mr-2"
            />
            <label htmlFor={fieldName}>{labelText}</label>
          </div>
      );
    }

    // Dropdown fields
    if (fieldName === 'services') {
      return (
          <div key={fieldName} className="mb-4">
            <label htmlFor={fieldName} className="block text-sm font-medium mb-1">{labelText}</label>
            <select
                id={fieldName}
                value={value}
                onChange={e => setField(fieldName, e.target.value)}
                className="p-2 border rounded w-full"
            >
              <option value="">-- Select Service --</option>
              {services.map((item) => (
                  <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </div>
      );
    }

    if (fieldName === 'category') {
      return (
          <div key={fieldName} className="mb-4">
            <label htmlFor={fieldName} className="block text-sm font-medium mb-1">{labelText}</label>
            <select
                id={fieldName}
                value={value}
                onChange={e => setField(fieldName, e.target.value)}
                className="p-2 border rounded w-full"
            >
              <option value="">-- Select Category --</option>
              {categories.map((item) => (
                  <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </div>
      );
    }

    if (fieldName === 'rank') {
      return (
          <div key={fieldName} className="mb-4">
            <label htmlFor={fieldName} className="block text-sm font-medium mb-1">{labelText}</label>
            <select
                id={fieldName}
                value={value}
                onChange={e => setField(fieldName, e.target.value)}
                className="p-2 border rounded w-full"
                disabled={!form.services || !form.category}
            >
              <option value="">-- Select Rank --</option>
              {ranks.map((item) => (
                  <option key={item} value={item}>{item}</option>
              ))}
            </select>
            {!form.services && <p className="text-xs text-gray-500 mt-1">Select a service first</p>}
            {form.services && !form.category && <p className="text-xs text-gray-500 mt-1">Select a category first</p>}
          </div>
      );
    }

    if (fieldName === 'regiment') {
      return (
          <div key={fieldName} className="mb-4">
            <label htmlFor={fieldName} className="block text-sm font-medium mb-1">{labelText}</label>
            <select
                id={fieldName}
                value={value}
                onChange={e => setField(fieldName, e.target.value)}
                className="p-2 border rounded w-full"
                disabled={!form.services}
            >
              <option value="">-- Select Regiment --</option>
              {regiments.map((item) => (
                  <option key={item} value={item}>{item}</option>
              ))}
            </select>
            {!form.services && <p className="text-xs text-gray-500 mt-1">Select a service first</p>}
          </div>
      );
    }

   if (fieldName === 'unit') {
      return (
        <div key={fieldName} className="mb-4">
          <label htmlFor={fieldName} className="block text-sm font-medium mb-1">{labelText}</label>
          <input
            type="text"
            id={fieldName}
            value={value}
            onChange={e => setField(fieldName, e.target.value)}
            className="p-2 border rounded w-full"
            disabled={!form.services || !form.regiment}
          />
          {!form.services && <p className="text-xs text-gray-500 mt-1">Select a service first</p>}
          {form.services && !form.regiment && <p className="text-xs text-gray-500 mt-1">Select a regiment first</p>}
        </div>
      );
    }

    if (fieldName === 'award') {
      return (
          <div key={fieldName} className="mb-4">
            <label htmlFor={fieldName} className="block text-sm font-medium mb-1">{labelText}</label>
            <select
                id={fieldName}
                value={value}
                onChange={e => setField(fieldName, e.target.value)}
                className="p-2 border rounded w-full"
            >
              <option value="">-- Select Award --</option>
              {awards.map((item) => (
                  <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </div>
      );
    }

    if (fieldName === 'presentState' || fieldName === 'permanentState') {
      return (
          <div key={fieldName} className="mb-4">
            <label htmlFor={fieldName} className="block text-sm font-medium mb-1">{labelText}</label>
            <select
                id={fieldName}
                value={value}
                onChange={e => setField(fieldName, e.target.value)}
                className="p-2 border rounded w-full"
            >
              <option value="">-- Select State --</option>
              {states.map((item) => (
                  <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </div>
      );
    }

    if (fieldName === 'presentDistrict') {
      return (
          <div key={fieldName} className="mb-4">
            <label htmlFor={fieldName} className="block text-sm font-medium mb-1">{labelText}</label>
            <select
                id={fieldName}
                value={value}
                onChange={e => setField(fieldName, e.target.value)}
                className="p-2 border rounded w-full"
                disabled={!form.presentState}
            >
              <option value="">-- Select District --</option>
              {presentDistricts.map((item) => (
                  <option key={item} value={item}>{item}</option>
              ))}
            </select>
            {!form.presentState && <p className="text-xs text-gray-500 mt-1">Select a state first</p>}
          </div>
      );
    }

    if (fieldName === 'permanentDistrict') {
      return (
          <div key={fieldName} className="mb-4">
            <label htmlFor={fieldName} className="block text-sm font-medium mb-1">{labelText}</label>
            <select
                id={fieldName}
                value={value}
                onChange={e => setField(fieldName, e.target.value)}
                className="p-2 border rounded w-full"
                disabled={!form.permanentState}
            >
              <option value="">-- Select District --</option>
              {permanentDistricts.map((item) => (
                  <option key={item} value={item}>{item}</option>
              ))}
            </select>
            {!form.permanentState && <p className="text-xs text-gray-500 mt-1">Select a state first</p>}
          </div>
      );
    }

    // Default input fields
    return (
        <div key={fieldName} className="mb-4">
          <label htmlFor={fieldName} className="block text-sm font-medium mb-1">{labelText}</label>
          <input
              type={fieldName.includes('date') ? 'date' :
                  fieldName.includes('email') ? 'email' :
                      fieldName.includes('mobile') || fieldName.includes('Number') || fieldName === 'age' ? 'number' : 'text'}
              id={fieldName}
              value={value}
              onChange={e => setField(fieldName, e.target.value)}
              className="p-2 border rounded w-full"
          />
        </div>
    );
  }, [form, setField, services, ranks, categories, regiments, awards, states, presentDistricts, permanentDistricts]);

  // Render
  return (
      <div className="flex flex-col">
        <Header />
        <div className="max-w-4xl mx-auto p-4">
          <Card className="p-6 shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-6">Veteran Registration</h1>

            {submitStatus.success && (
                <Alert className="mb-4">
                  <AlertDescription>{submitStatus.message}</AlertDescription>
                </Alert>
            )}

            {submitStatus.error && (
                <Alert variant="destructive" className="mb-4">
                  <AlertDescription>{submitStatus.message}</AlertDescription>
                </Alert>
            )}

            <div className="space-y-6">
              {/* Veteran Type Selection */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">Veteran Type</h2>
                <select
                    className="p-2 border rounded w-full"
                    disabled={loadingTypes}
                    value={form.veteranType || ''}
                    onChange={e => setField('veteranType', e.target.value)}
                >
                  <option value="">-- Select Veteran Type --</option>
                  {veteranTypes.map((t: string) => (
                      <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              {loadingFields && <div className="text-center py-4">Loading form fields...</div>}

              {/* Field Categories */}
              {!loadingFields && fieldCategories.map((category) => (
                  <div key={category.category} className="border p-4 rounded mb-6">
                    <h2 className="text-xl font-semibold mb-4">{category.category}</h2>
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                      {category.fields.map(fieldName => renderField(fieldName))}
                    </div>
                  </div>
              ))}

              {/* Submit Button */}
              <div className="flex justify-end mt-6">
                <Button onClick={handleSubmit} disabled={loadingFields}>Submit Registration</Button>
              </div>
            </div>
          </Card>
        </div>
        <Footer />
      </div>
  )
}