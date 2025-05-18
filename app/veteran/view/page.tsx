"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Loader2 } from "lucide-react"

import veteranService from "@/services/VeteranService"
import rankService from "@/services/RankService"

type Filters = {
    district: string
    category: string
    services: string
    rank: string
    veteranType: string
}

type Enums = {
    districts: string[]
    categories: string[]
    services: string[]
    ranks: string[]
    veteranTypes: string[]
}

type Veteran = {
    firstName: string
    middleName?: string
    lastName: string
    serviceNumber: string
    services: string
    category: string
    rank: string
    district: string
    veteranType: string
    dependentName: string
    dependentMobileNumber: string
}

export default function VeteranManagement() {
    const [filters, setFilters] = useState<Filters>({
        district: "",
        category: "",
        services: "",
        rank: "",
        veteranType: "",
    })
    const [enums, setEnums] = useState<Enums>({
        districts: [],
        categories: [],
        services: [],
        ranks: [],
        veteranTypes: [],
    })
    const [veterans, setVeterans] = useState<Veteran[]>([])
    const [totalPages, setTotalPages] = useState(0)
    const [page, setPage] = useState(1)
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [loadingEnums, setLoadingEnums] = useState(true)
    const [loadingVeterans, setLoadingVeterans] = useState(false)

    useEffect(() => {
        const fetchEnums = async () => {
            setLoadingEnums(true)
            try {
                const [districts, categories, services, veteranTypes] = await Promise.all([
                    veteranService.getDistricts(),
                    veteranService.getCategories(),
                    veteranService.getServices(),
                    veteranService.getVeteranTypes(),
                ])
                setEnums({ districts, categories, services, veteranTypes, ranks: [] })
            } catch (e) {
                // handle error
            } finally {
                setLoadingEnums(false)
            }
        }
        fetchEnums()
    }, [])

    useEffect(() => {
        const fetchRanks = async () => {
            if (filters.services && filters.category) {
                try {
                    const ranks = await rankService.getRanks(filters.services, filters.category)
                    setEnums((prev) => ({ ...prev, ranks }))
                } catch (e) {}
            }
        }
        fetchRanks()
    }, [filters.services, filters.category])

    useEffect(() => {
        const fetchVeterans = async () => {
            if (!filters.district) return
            setLoadingVeterans(true)
            const query: any = Object.entries(filters).reduce((acc, [k, v]) => {
                if (v) acc[k] = v
                return acc
            }, {} as Record<string, string>)
            query.page = page - 1
            query.size = rowsPerPage
            try {
                const response = await veteranService.getFilteredVeterans(query)
                setVeterans(response.content)
                setTotalPages(response.totalPages)
            } catch (e) {
                setVeterans([])
            } finally {
                setLoadingVeterans(false)
            }
        }
        fetchVeterans()
    }, [filters, page, rowsPerPage])


    const handleFilterChange = (name: keyof Filters, value: string) => {
        setPage(1)
        setFilters((prev) => {
            const updated = { ...prev, [name]: value }
            switch (name) {
                case "district":
                    updated.category = ""
                    updated.services = ""
                    updated.rank = ""
                    updated.veteranType = ""
                    break
                case "services":
                case "category":
                    updated.rank = ""
                    break
            }
            return updated
        })
    }

    return (
        <div className="container mx-auto py-6 flex flex-col md:flex-row gap-6">
            {/* Filters */}
            <Card className="w-full md:w-64 flex-shrink-0">
                <CardHeader>
                    <CardTitle className="text-base">Filters</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                    {/*<Select*/}
                    {/*    value={filters.district}*/}
                    {/*    onValueChange={(v) => handleFilterChange("district", v)}*/}
                    {/*    disabled={loadingEnums}*/}
                    {/*>*/}
                    {/*    <SelectTrigger>*/}
                    {/*        <SelectValue placeholder="Select District" />*/}
                    {/*    </SelectTrigger>*/}
                    {/*    <SelectContent>*/}
                    {/*        {enums.districts.map((d) => (*/}
                    {/*            <SelectItem key={d} value={d}>{d}</SelectItem>*/}
                    {/*        ))}*/}
                    {/*    </SelectContent>*/}
                    {/*</Select>*/}
                    <Select
                        value={filters.veteranType}
                        onValueChange={(v) => handleFilterChange("veteranType", v)}
                        disabled={!filters.district}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="All Veteran Types" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="">All Veteran Types</SelectItem>
                            {enums.veteranTypes.map((t) => (
                                <SelectItem key={t} value={t}>{t}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Select
                        value={filters.services}
                        onValueChange={(v) => handleFilterChange("services", v)}
                        disabled={!filters.district || loadingEnums}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="All Services" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="">All Services</SelectItem>
                            {enums.services.map((s) => (
                                <SelectItem key={s} value={s}>{s}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Select
                        value={filters.category}
                        onValueChange={(v) => handleFilterChange("category", v)}
                        disabled={!filters.district || loadingEnums}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="All Categories" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="">All Categories</SelectItem>
                            {enums.categories.map((c) => (
                                <SelectItem key={c} value={c}>{c}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Select
                        value={filters.rank}
                        onValueChange={(v) => handleFilterChange("rank", v)}
                        disabled={!filters.services || !filters.category}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="All Ranks" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="">All Ranks</SelectItem>
                            {enums.ranks.map((r) => (
                                <SelectItem key={r} value={r}>{r}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </CardContent>
            </Card>

            {/* Table */}
            <div className="flex-1 flex flex-col">
                <Card className="flex-1 flex flex-col">
                    <CardHeader>
                        <CardTitle className="text-lg text-center">Veteran Details</CardTitle>
                    </CardHeader>
                    <CardContent className="overflow-x-auto flex-1 flex flex-col">
                        {loadingVeterans ? (
                            <div className="flex justify-center items-center h-40">
                                <Loader2 className="animate-spin w-8 h-8 text-primary" />
                            </div>
                        ) : (
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Name</TableHead>
                                        <TableHead>Service No</TableHead>
                                        <TableHead>Service</TableHead>
                                        <TableHead>Category</TableHead>
                                        <TableHead>Rank</TableHead>
                                        <TableHead>District</TableHead>
                                        <TableHead>Veteran Type</TableHead>
                                        <TableHead>Dependent Name</TableHead>
                                        <TableHead>Dependent Phone</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {veterans.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={9} className="text-center">
                                                No data found.
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        veterans.map((v, i) => (
                                            <TableRow key={i}>
                                                <TableCell>{`${v.firstName} ${v.middleName ?? ""} ${v.lastName}`}</TableCell>
                                                <TableCell>{v.serviceNumber}</TableCell>
                                                <TableCell>{v.services}</TableCell>
                                                <TableCell>{v.category}</TableCell>
                                                <TableCell>{v.rank}</TableCell>
                                                <TableCell>{v.district}</TableCell>
                                                <TableCell>{v.veteranType}</TableCell>
                                                <TableCell>{v.dependentName}</TableCell>
                                                <TableCell>{v.dependentMobileNumber}</TableCell>
                                            </TableRow>
                                        ))
                                    )}
                                </TableBody>
                            </Table>
                        )}
                    </CardContent>
                </Card>
                {/* Pagination and Export */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-2 mt-2">
                    <div className="flex items-center gap-2">
                        <Select
                            value={rowsPerPage.toString()}
                            onValueChange={(v) => {
                                setPage(1)
                                setRowsPerPage(Number(v))
                            }}
                        >
                            <SelectTrigger className="w-28">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                {[10, 20, 50].map((n) => (
                                    <SelectItem key={n} value={n.toString()}>{n}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {/*<Button*/}
                        {/*    variant="outline"*/}
                        {/*    size="sm"*/}
                        {/*    onClick={handleExport}*/}
                        {/*    disabled={!veterans.length}*/}
                        {/*>*/}
                        {/*    Extract Filtered Data*/}
                        {/*</Button>*/}
                    </div>
                    <div className="flex gap-1">
                        {Array.from({ length: totalPages }, (_, i) => (
                            <Button
                                key={i}
                                size="icon"
                                variant={page === i + 1 ? "default" : "outline"}
                                onClick={() => setPage(i + 1)}
                                className="w-8 h-8"
                            >
                                {i + 1}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}