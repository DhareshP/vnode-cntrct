"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/components/ui/use-toast"
import { useIsMobile } from "@/hooks/use-mobile"
import veteranService from "@/services/VeteranService"
import rankService from "@/services/RankService"

const initialForm = {
  serviceNumber: "",
  services: "",
  category: "",
  veteranType: "",
  district: "",
  rank: "",
  regiment: "",
  unit: "",
  award: "",
  dateOfCommissioning: "",
  dateOfRetirement: "",
  firstName: "",
  middleName: "",
  lastName: "",
  dateOfBirth: "",
  age: "",
  mobileNumber: "",
  email: "",
  presentAddress: "",
  presentCity: "",
  presentDistrict: "",
  presentState: "",
  presentPostOffice: "",
  presentPoliceStation: "",
  presentPinCode: "",
  isPermanentAddressSameAsPresent: false,
  permanentAddress: "",
  permanentCity: "",
  permanentDistrict: "",
  permanentState: "",
  permanentPostOffice: "",
  permanentPoliceStation: "",
  permanentPinCode: "",
  veerNariName: "",
  veerNariMobileNumber: "",
  yearOfMartydom: "",
  placeOfMartydom: "",
  children: [] as any[],
}

const initialEnums = {
  categories: [] as string[],
  services: [] as string[],
  districts: [] as string[],
  veteranTypes: [] as string[],
  ranks: [] as string[],
  regiments: [] as string[],
  awards: [] as string[],
}

export default function RegisterPage() {
  const { toast } = useToast()
  const isMobile = useIsMobile()
  const [activeStep, setActiveStep] = useState(0)
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; error: boolean; message: string }>({ success: false, error: false, message: "" })
  const [form, setForm] = useState(initialForm)
  const [enums, setEnums] = useState(initialEnums)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchEnums() {
      try {
        setLoading(true)
        const [categories, services, districts, veteranTypes, awards] = await Promise.all([
          veteranService.getCategories(),
          veteranService.getServices(),
          veteranService.getDistricts(),
          veteranService.getVeteranTypes(),
          veteranService.getAwards(),
        ])
        setEnums((prev) => ({ ...prev, categories, services, districts, veteranTypes, awards }))
      } catch (error) {
        setSubmitStatus({
          success: false,
          error: true,
          message: "Failed to load form data. Please refresh the page.",
        })
      } finally {
        setLoading(false)
      }
    }
    fetchEnums()
  }, [])

  useEffect(() => {
    if (form.services) {
      setForm((prev) => ({ ...prev, regiment: "" }))
      fetchRegiments(form.services)
    }
    // eslint-disable-next-line
  }, [form.services])

  const fetchRegiments = async (service: string) => {
    try {
      setLoading(true)
      const regiments = await rankService.getRegiments(service)
      setEnums((prev) => ({ ...prev, regiments }))
    } catch {
      // ignore
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    async function fetchRanks() {
      if (form.services && form.category) {
        try {
          setLoading(true)
          const ranks = await rankService.getRanks(form.services, form.category)
          setEnums((prev) => ({ ...prev, ranks }))
        } catch {
          // ignore
        } finally {
          setLoading(false)
        }
      }
    }
    fetchRanks()
    // eslint-disable-next-line
  }, [form.services, form.category])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean, name: string) => {
    setForm((prev) => {
      const updated = { ...prev, [name]: checked }
      if (name === "isPermanentAddressSameAsPresent") {
        if (checked) {
          updated.permanentAddress = prev.presentAddress
          updated.permanentCity = prev.presentCity
          updated.permanentDistrict = prev.presentDistrict
          updated.permanentState = prev.presentState
          updated.permanentPostOffice = prev.presentPostOffice
          updated.permanentPoliceStation = prev.presentPoliceStation
          updated.permanentPinCode = prev.presentPinCode
        } else {
          updated.permanentAddress = ""
          updated.permanentCity = ""
          updated.permanentDistrict = ""
          updated.permanentState = ""
          updated.permanentPostOffice = ""
          updated.permanentPoliceStation = ""
          updated.permanentPinCode = ""
        }
      }
      return updated
    })
  }

  const handleAddChild = () => {
    setForm((prev) => ({
      ...prev,
      children: [
        ...prev.children,
        {
          childName: "",
          childRelation: "",
          childDateOfBirth: "",
          childAge: "",
          childEducationQualification: "",
        },
      ],
    }))
  }

  const handleChildChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((prev) => {
      const updatedChildren = prev.children.map((child, idx) => (idx === index ? { ...child, [name]: value } : child))
      return { ...prev, children: updatedChildren }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setLoading(true)
      await veteranService.createVeteran(form)
      setSubmitStatus({
        success: true,
        error: false,
        message: "Registration successful! Your information has been submitted.",
      })
      toast({ title: "Success", description: "Registration successful!" })
      window.scrollTo(0, 0)
    } catch {
      setSubmitStatus({
        success: false,
        error: true,
        message: "Registration failed. Please check your information and try again.",
      })
      toast({ title: "Error", description: "Registration failed." })
    } finally {
      setLoading(false)
    }
  }

  const handleNext = () => {
    setActiveStep((prev) => prev + 1)
    window.scrollTo(0, 0)
  }
  const handleBack = () => {
    setActiveStep((prev) => prev - 1)
    window.scrollTo(0, 0)
  }

  const steps = [
    "Service Information",
    "Personal Information",
    "Address Information",
    form.veteranType === "VEER_NARI" ? "Martyr Information" : "Child Details",
    form.veteranType === "VEER_NARI" ? "Child Details" : "Review & Submit",
  ]
  if (form.veteranType !== "VEER_NARI" && steps.length > 4) steps.pop()

  // Step renderers (use shadcn/ui components for consistency)
  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Card className="mb-6 p-4">
            <div className="font-semibold text-lg mb-2 text-primary">Service Information</div>
            <Separator className="mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label>Service Number</Label>
                <Input name="serviceNumber" value={form.serviceNumber} onChange={handleChange} required />
              </div>
              <div>
                <Label>Service</Label>
                <Select value={form.services} onValueChange={v => setForm(f => ({ ...f, services: v }))} disabled={loading}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Service" />
                  </SelectTrigger>
                  <SelectContent>
                    {enums.services.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Category</Label>
                <Select value={form.category} onValueChange={v => setForm(f => ({ ...f, category: v }))} disabled={loading}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {enums.categories.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Veteran Type</Label>
                <Select value={form.veteranType} onValueChange={v => setForm(f => ({ ...f, veteranType: v }))} disabled={loading}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Veteran Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {enums.veteranTypes.map(vt => <SelectItem key={vt} value={vt}>{vt}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Rank</Label>
                <Select value={form.rank} onValueChange={v => setForm(f => ({ ...f, rank: v }))} disabled={loading || !form.services || !form.category}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Rank" />
                  </SelectTrigger>
                  <SelectContent>
                    {enums.ranks.map(r => <SelectItem key={r} value={r}>{r}</SelectItem>)}
                  </SelectContent>
                </Select>
                {!form.services || !form.category ? <div className="text-xs text-muted-foreground mt-1">Select service and category first</div> : null}
              </div>
              <div>
                <Label>District</Label>
                <Select value={form.district} onValueChange={v => setForm(f => ({ ...f, district: v }))} disabled={loading}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select District" />
                  </SelectTrigger>
                  <SelectContent>
                    {enums.districts.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Regiment</Label>
                <Select value={form.regiment} onValueChange={v => setForm(f => ({ ...f, regiment: v }))} disabled={loading || !form.services}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Regiment" />
                  </SelectTrigger>
                  <SelectContent>
                    {enums.regiments.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                  </SelectContent>
                </Select>
                {!form.services ? <div className="text-xs text-muted-foreground mt-1">Select service first</div> : null}
              </div>
              <div>
                <Label>Unit</Label>
                <Input name="unit" value={form.unit} onChange={handleChange} />
              </div>
              <div>
                <Label>Award</Label>
                <Select value={form.award} onValueChange={v => setForm(f => ({ ...f, award: v }))} disabled={loading}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Award" />
                  </SelectTrigger>
                  <SelectContent>
                    {enums.awards.map(a => <SelectItem key={a} value={a}>{a}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Date of Commissioning</Label>
                <Input name="dateOfCommissioning" type="date" value={form.dateOfCommissioning} onChange={handleChange} />
              </div>
              <div>
                <Label>Date of Retirement</Label>
                <Input name="dateOfRetirement" type="date" value={form.dateOfRetirement} onChange={handleChange} />
              </div>
            </div>
          </Card>
        )
      case 1:
        return (
          <Card className="mb-6 p-4">
            <div className="font-semibold text-lg mb-2 text-primary">Personal Information</div>
            <Separator className="mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <Label>First Name</Label>
                <Input name="firstName" value={form.firstName} onChange={handleChange} required />
              </div>
              <div>
                <Label>Middle Name</Label>
                <Input name="middleName" value={form.middleName} onChange={handleChange} />
              </div>
              <div>
                <Label>Last Name</Label>
                <Input name="lastName" value={form.lastName} onChange={handleChange} required />
              </div>
              <div>
                <Label>Date of Birth</Label>
                <Input name="dateOfBirth" type="date" value={form.dateOfBirth} onChange={handleChange} />
              </div>
              <div>
                <Label>Age</Label>
                <Input name="age" type="number" value={form.age} onChange={handleChange} />
              </div>
              <div>
                <Label>Mobile Number</Label>
                <Input name="mobileNumber" value={form.mobileNumber} onChange={handleChange} required />
              </div>
              <div>
                <Label>Email</Label>
                <Input name="email" type="email" value={form.email} onChange={handleChange} required />
              </div>
            </div>
          </Card>
        )
      case 2:
        return (
          <Card className="mb-6 p-4">
            <div className="font-semibold text-lg mb-2 text-primary">Address Information</div>
            <Separator className="mb-4" />
            <div className="font-medium mb-2 mt-2">Present Address</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <Label>Present Address</Label>
                <Input name="presentAddress" value={form.presentAddress} onChange={handleChange} required />
              </div>
              <div>
                <Label>Present District</Label>
                <Select value={form.presentDistrict} onValueChange={v => setForm(f => ({ ...f, presentDistrict: v }))} disabled={loading}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select District" />
                  </SelectTrigger>
                  <SelectContent>
                    {enums.districts.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Present State</Label>
                <Input name="presentState" value={form.presentState} onChange={handleChange} required />
              </div>
              <div>
                <Label>Present City</Label>
                <Input name="presentCity" value={form.presentCity} onChange={handleChange} required />
              </div>
              <div>
                <Label>Present Post Office</Label>
                <Input name="presentPostOffice" value={form.presentPostOffice} onChange={handleChange} required />
              </div>
              <div>
                <Label>Present Police Station</Label>
                <Input name="presentPoliceStation" value={form.presentPoliceStation} onChange={handleChange} required />
              </div>
              <div>
                <Label>Present Pin Code</Label>
                <Input name="presentPinCode" value={form.presentPinCode} onChange={handleChange} required />
              </div>
            </div>
            <div className="my-4">
              <Checkbox checked={form.isPermanentAddressSameAsPresent} onCheckedChange={v => handleCheckboxChange(!!v, "isPermanentAddressSameAsPresent")}>Permanent address same as present</Checkbox>
            </div>
            <div className="font-medium mb-2 mt-2">Permanent Address</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <Label>Permanent Address</Label>
                <Input name="permanentAddress" value={form.permanentAddress} onChange={handleChange} required disabled={form.isPermanentAddressSameAsPresent} />
              </div>
              <div>
                <Label>Permanent District</Label>
                <Select value={form.permanentDistrict} onValueChange={v => setForm(f => ({ ...f, permanentDistrict: v }))} disabled={loading || form.isPermanentAddressSameAsPresent}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select District" />
                  </SelectTrigger>
                  <SelectContent>
                    {enums.districts.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Permanent State</Label>
                <Input name="permanentState" value={form.permanentState} onChange={handleChange} required disabled={form.isPermanentAddressSameAsPresent} />
              </div>
              <div>
                <Label>Permanent City</Label>
                <Input name="permanentCity" value={form.permanentCity} onChange={handleChange} required disabled={form.isPermanentAddressSameAsPresent} />
              </div>
              <div>
                <Label>Permanent Post Office</Label>
                <Input name="permanentPostOffice" value={form.permanentPostOffice} onChange={handleChange} required disabled={form.isPermanentAddressSameAsPresent} />
              </div>
              <div>
                <Label>Permanent Police Station</Label>
                <Input name="permanentPoliceStation" value={form.permanentPoliceStation} onChange={handleChange} required disabled={form.isPermanentAddressSameAsPresent} />
              </div>
              <div>
                <Label>Permanent Pin Code</Label>
                <Input name="permanentPinCode" value={form.permanentPinCode} onChange={handleChange} required disabled={form.isPermanentAddressSameAsPresent} />
              </div>
            </div>
          </Card>
        )
      case 3:
        if (form.veteranType === "VEER_NARI") {
          return (
            <Card className="mb-6 p-4">
              <div className="font-semibold text-lg mb-2 text-primary">Martyr Information</div>
              <Separator className="mb-4" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label>Veer Nari Name</Label>
                  <Input name="veerNariName" value={form.veerNariName} onChange={handleChange} />
                </div>
                <div>
                  <Label>Veer Nari Mobile</Label>
                  <Input name="veerNariMobileNumber" value={form.veerNariMobileNumber} onChange={handleChange} />
                </div>
                <div>
                  <Label>Year of Martyrdom</Label>
                  <Input name="yearOfMartydom" type="number" value={form.yearOfMartydom} onChange={handleChange} />
                </div>
                <div>
                  <Label>Place of Martyrdom</Label>
                  <Input name="placeOfMartydom" value={form.placeOfMartydom} onChange={handleChange} />
                </div>
              </div>
            </Card>
          )
        } else {
          return renderChildDetails()
        }
      case 4:
        if (form.veteranType === "VEER_NARI") {
          return renderChildDetails()
        } else {
          return renderReviewSection()
        }
      case 5:
        return renderReviewSection()
      default:
        return null
    }
  }

  function renderChildDetails() {
    return (
      <Card className="mb-6 p-4">
        <div className="flex justify-between items-center mb-2">
          <div className="font-semibold text-lg text-primary">Child Details</div>
          <Button variant="default" onClick={handleAddChild} size="sm">Add Child</Button>
        </div>
        <Separator className="mb-4" />
        {form.children.length === 0 && (
          <div className="text-center text-muted-foreground my-4">No children added yet. Click "Add Child" to add details.</div>
        )}
        {form.children.map((child, idx) => (
          <div key={idx} className="mb-4 p-3 border rounded">
            <div className="font-medium mb-2">Child #{idx + 1}</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <Label>Child Name</Label>
                <Input name="childName" value={child.childName} onChange={e => handleChildChange(idx, e)} />
              </div>
              <div>
                <Label>Relation</Label>
                <Input name="childRelation" value={child.childRelation} onChange={e => handleChildChange(idx, e)} />
              </div>
              <div>
                <Label>Date of Birth</Label>
                <Input name="childDateOfBirth" type="date" value={child.childDateOfBirth} onChange={e => handleChildChange(idx, e)} />
              </div>
              <div>
                <Label>Age</Label>
                <Input name="childAge" type="number" value={child.childAge} onChange={e => handleChildChange(idx, e)} />
              </div>
              <div>
                <Label>Education</Label>
                <Input name="childEducationQualification" value={child.childEducationQualification} onChange={e => handleChildChange(idx, e)} />
              </div>
            </div>
          </div>
        ))}
      </Card>
    )
  }

  function renderReviewSection() {
    return (
      <Card className="mb-6 p-4">
        <div className="font-semibold text-lg mb-2 text-primary">Review Your Information</div>
        <Separator className="mb-4" />
        <div className="mb-2">Please review all the information you've provided before submitting. Once submitted, you may need to contact support to make changes.</div>
        <div className="font-medium mt-4 mb-2">Service Information</div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <div>
            <div className="text-xs text-muted-foreground">Service Number:</div>
            <div>{form.serviceNumber || "Not provided"}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Service:</div>
            <div>{form.services || "Not provided"}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Rank:</div>
            <div>{form.rank || "Not provided"}</div>
          </div>
        </div>
        <div className="font-medium mt-4 mb-2">Personal Information</div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <div className="sm:col-span-2">
            <div className="text-xs text-muted-foreground">Name:</div>
            <div>{`${form.firstName || ""} ${form.middleName || ""} ${form.lastName || ""}`}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Mobile:</div>
            <div>{form.mobileNumber || "Not provided"}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Email:</div>
            <div>{form.email || "Not provided"}</div>
          </div>
        </div>
        <div className="mt-4">
          <Checkbox checked disabled>I confirm that all the information provided is accurate and complete.</Checkbox>
        </div>
      </Card>
    )
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-2">
      <Card className="p-4 md:p-8 mt-6 rounded-lg shadow-lg">
        <div className="text-2xl md:text-3xl font-bold text-center text-primary mb-6">Veteran Registration</div>
        {submitStatus.success && <Alert variant="success" className="mb-4">{submitStatus.message}</Alert>}
        {submitStatus.error && <Alert variant="destructive" className="mb-4">{submitStatus.message}</Alert>}
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
          {steps.map((label, idx) => (
            <div key={label} className={`flex-1 flex items-center gap-2 ${activeStep === idx ? "font-bold text-primary" : "text-muted-foreground"}`}>
              <div className={`rounded-full w-7 h-7 flex items-center justify-center border ${activeStep === idx ? "bg-primary text-white" : "bg-muted"}`}>{idx + 1}</div>
              <span className="hidden md:inline text-xs">{label}</span>
              {idx < steps.length - 1 && <div className="flex-1 h-px bg-muted" />}
            </div>
          ))}
        </div>
        {loading && activeStep === 0 ? (
          <div className="flex justify-center my-12"><span className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full block" /></div>
        ) : (
          <form onSubmit={handleSubmit}>
            {renderStepContent(activeStep)}
            <div className="flex justify-between mt-6">
              <Button type="button" variant="outline" disabled={activeStep === 0} onClick={handleBack}>Back</Button>
              <div>
                {activeStep === steps.length - 1 ? (
                  <Button type="submit" variant="default" disabled={loading} className="min-w-[120px]">{loading ? <span className="animate-spin w-5 h-5 border-2 border-primary border-t-transparent rounded-full inline-block" /> : "Submit"}</Button>
                ) : (
                  <Button type="button" variant="default" onClick={handleNext} className="min-w-[120px]">Next</Button>
                )}
              </div>
            </div>
          </form>
        )}
      </Card>
    </div>
  )
}

