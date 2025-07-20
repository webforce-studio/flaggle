"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, Plus, Edit, Trash2, Upload, Download, FileText, Sparkles, AlertTriangle, Info } from "lucide-react"
import type { Country } from "@/lib/country-database"
import { toast } from "@/hooks/use-toast"

interface FormData {
  id: string
  name: string
  code: string
  flagUrl: string
  region: string
  capital: string
  population: string
  latitude: string
  longitude: string
}

const initialFormData: FormData = {
  id: "",
  name: "",
  code: "",
  flagUrl: "",
  region: "",
  capital: "",
  population: "",
  latitude: "",
  longitude: "",
}

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"]

export default function AdminDashboard() {
  const [countries, setCountries] = useState<Country[]>([])
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error" | "warning" | "info"; text: string } | null>(null)
  const [csvData, setCsvData] = useState("")
  const [csvInput, setCsvInput] = useState("")
  const [showCsvParser, setShowCsvParser] = useState(false)
  const [storageType, setStorageType] = useState<string>("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isCheckingAuth, setIsCheckingAuth] = useState(true)

  // Load countries from API
  const loadCountries = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/countries")
      const data = await response.json()

      if (data.countries) {
        setCountries(data.countries)
        setStorageType(data.storageType || "unknown")

        if (data.storageType === "session-only") {
          setMessage({
            type: "info",
            text: "⚠️ V0 Environment Limitation: Changes are stored in memory only during this session. All modifications will be lost when you refresh the page or restart the session. In a real Next.js development environment, changes would persist to files.",
          })
        }
      }
    } catch (error) {
      console.error("Error loading countries:", error)
      setMessage({ type: "error", text: "Failed to load countries" })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // Check authentication
    const checkAuth = () => {
      const authToken = localStorage.getItem("flaggle-admin-auth")
      const loginTime = localStorage.getItem("flaggle-admin-login-time")
      
      if (authToken === "true" && loginTime) {
        const timeDiff = Date.now() - Number.parseInt(loginTime)
        const hoursDiff = timeDiff / (1000 * 60 * 60)
        
        // Session expires after 24 hours
        if (hoursDiff < 24) {
          setIsAuthenticated(true)
        } else {
          localStorage.removeItem("flaggle-admin-auth")
          localStorage.removeItem("flaggle-admin-login-time")
          window.location.href = "/admin"
        }
      } else {
        window.location.href = "/admin"
      }
      
      setIsCheckingAuth(false)
    }
    
    checkAuth()
  }, [])

  useEffect(() => {
    if (isAuthenticated) {
      loadCountries()
    }
  }, [isAuthenticated])

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const resetForm = () => {
    setFormData(initialFormData)
    setEditingId(null)
    setCsvInput("")
    setShowCsvParser(false)
  }

  // CSV Parser function for single line
  const parseCsvLine = (csvLine: string) => {
    if (!csvLine.trim()) {
      toast({
        title: "Error",
        description: "Please enter CSV data to parse",
        variant: "destructive",
      })
      return
    }

    try {
      const values = []
      let current = ""
      let inQuotes = false

      for (let i = 0; i < csvLine.length; i++) {
        const char = csvLine[i]
        if (char === '"') {
          inQuotes = !inQuotes
        } else if (char === "," && !inQuotes) {
          values.push(current.trim().replace(/^"|"$/g, ""))
          current = ""
        } else {
          current += char
        }
      }
      values.push(current.trim().replace(/^"|"$/g, ""))

      if (values.length < 8) {
        toast({
          title: "Error",
          description: `Invalid CSV format. Expected 8 columns, got ${values.length}`,
          variant: "destructive",
        })
        return
      }

      const [name, code, flagUrl, region, capital, population, latitude, longitude] = values

      const newFormData: FormData = {
        id: "",
        name: name || "",
        code: code || "",
        flagUrl: flagUrl || "",
        region: region || "",
        capital: capital || "",
        population: population || "",
        latitude: latitude || "",
        longitude: longitude || "",
      }

      setFormData(newFormData)
      setCsvInput("")
      setShowCsvParser(false)

      toast({
        title: "Success",
        description: "CSV data parsed and form populated successfully!",
      })
    } catch (error) {
      console.error("Error parsing CSV:", error)
      toast({
        title: "Error",
        description: "Failed to parse CSV data. Please check the format.",
        variant: "destructive",
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.code) {
      setMessage({ type: "error", text: "Name and Country Code are required fields" })
      return
    }

    try {
      setLoading(true)

      const method = editingId ? "PUT" : "POST"
      const body = editingId ? { ...formData, id: editingId } : formData

      const response = await fetch("/api/countries", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })

      const result = await response.json()

      if (result.success) {
        const messageType = result.warning ? "warning" : "success"
        setMessage({ type: messageType, text: result.message })
        resetForm()
        await loadCountries()
      } else {
        setMessage({ type: "error", text: result.error || "Operation failed" })
      }
    } catch (error) {
      console.error("Error saving country:", error)
      setMessage({ type: "error", text: "Failed to save country" })
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (country: Country) => {
    setFormData({
      id: country.id,
      name: country.name,
      code: country.code,
      flagUrl: country.flagUrl,
      region: country.region,
      capital: country.capital,
      population: country.population.toString(),
      latitude: country.coordinates.lat.toString(),
      longitude: country.coordinates.lng.toString(),
    })
    setEditingId(country.id)
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this country?")) return

    try {
      setLoading(true)
      const response = await fetch(`/api/countries?id=${id}`, { method: "DELETE" })
      const result = await response.json()

      if (result.success) {
        const messageType = result.warning ? "warning" : "success"
        setMessage({ type: messageType, text: result.message })
        await loadCountries()
      } else {
        setMessage({ type: "error", text: result.error || "Delete failed" })
      }
    } catch (error) {
      console.error("Error deleting country:", error)
      setMessage({ type: "error", text: "Failed to delete country" })
    } finally {
      setLoading(false)
    }
  }

  const parseCsvData = () => {
    if (!csvData.trim()) {
      setMessage({ type: "error", text: "Please enter CSV data" })
      return
    }

    try {
      const lines = csvData.trim().split("\n")
      const headers = lines[0].split(",").map((h) => h.trim())

      if (lines.length < 2) {
        setMessage({ type: "error", text: "CSV must have at least one data row" })
        return
      }

      const firstDataLine = lines[1].split(",").map((v) => v.trim())

      const csvToFormMapping: { [key: string]: keyof FormData } = {
        name: "name",
        code: "code",
        flagUrl: "flagUrl",
        region: "region",
        capital: "capital",
        population: "population",
        latitude: "latitude",
        longitude: "longitude",
      }

      const newFormData: FormData = { ...initialFormData }

      headers.forEach((header, index) => {
        const normalizedHeader = header.toLowerCase().replace(/[^a-z]/g, "")
        const matchingKey = Object.keys(csvToFormMapping).find(
          (key) => key.toLowerCase().replace(/[^a-z]/g, "") === normalizedHeader,
        )

        if (matchingKey && firstDataLine[index]) {
          const formField = csvToFormMapping[matchingKey]
          newFormData[formField] = firstDataLine[index].replace(/^"|"$/g, "")
        }
      })

      setFormData(newFormData)
      setMessage({ type: "success", text: "CSV data parsed successfully" })
    } catch (error) {
      console.error("Error parsing CSV:", error)
      setMessage({ type: "error", text: "Failed to parse CSV data" })
    }
  }

  const exportCountries = () => {
    const csvContent = [
      "name,code,flagUrl,region,capital,population,latitude,longitude",
      ...countries.map((c) =>
        [
          c.name,
          c.code,
          c.flagUrl,
          c.region,
          c.capital,
          c.population,
          c.coordinates.lat,
          c.coordinates.lng,
        ]
          .map((field) => `"${field}"`)
          .join(","),
      ),
    ].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "countries.csv"
    a.click()
    URL.revokeObjectURL(url)
  }

  // Show loading while checking authentication
  if (isCheckingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" />
          <p>Checking authentication...</p>
        </div>
      </div>
    )
  }

  // Redirect if not authenticated
  if (!isAuthenticated) {
    return null // Will redirect via useEffect
  }

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Country Admin Dashboard</h1>
        <p className="text-muted-foreground">Manage countries for the Flaggle game</p>
        {storageType === "session-only" && (
          <div className="mt-2 flex items-center gap-2 text-sm text-blue-600">
            <AlertTriangle className="w-4 h-4" />
            <span>Session-only storage active - changes will not persist after refresh</span>
          </div>
        )}
      </div>

      {message && (
        <Alert
          className={`mb-6 ${
            message.type === "error"
              ? "border-red-500"
              : message.type === "warning"
                ? "border-yellow-500"
                : message.type === "info"
                  ? "border-blue-500"
                  : "border-green-500"
          }`}
        >
          {message.type === "warning" && <AlertTriangle className="h-4 w-4" />}
          {message.type === "info" && <Info className="h-4 w-4" />}
          <AlertDescription
            className={
              message.type === "error"
                ? "text-red-700"
                : message.type === "warning"
                  ? "text-yellow-700"
                  : message.type === "info"
                    ? "text-blue-700"
                    : "text-green-700"
            }
          >
            {message.text}
          </AlertDescription>
        </Alert>
      )}

      <Tabs defaultValue="add" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="add">Add Country</TabsTrigger>
          <TabsTrigger value="list">Country List</TabsTrigger>
          <TabsTrigger value="csv">CSV Import</TabsTrigger>
          <TabsTrigger value="export">Export</TabsTrigger>
        </TabsList>

        <TabsContent value="add">
          <Card>
            <CardHeader>
              <CardTitle>{editingId ? "Edit Country" : "Add New Country"}</CardTitle>
              <CardDescription>
                {editingId ? "Update country information" : "Enter details for a new country"}
                {storageType === "session-only" && (
                  <span className="block mt-1 text-blue-600 text-sm">
                    ⚠️ Changes will only persist during this session
                  </span>
                )}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-blue-500" />
                      Quick CSV Parser
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Paste a single CSV line to auto-populate all form fields
                    </p>
                  </div>
                  <Button type="button" variant="outline" size="sm" onClick={() => setShowCsvParser(!showCsvParser)}>
                    <FileText className="w-4 h-4 mr-2" />
                    {showCsvParser ? "Hide" : "Show"} Parser
                  </Button>
                </div>

                {showCsvParser && (
                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-4">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="csvInput" className="text-sm font-medium">
                            CSV Line (Name,Code,FlagURL,Region,Capital,Population,Latitude,Longitude)
                          </Label>
                          <Textarea
                            id="csvInput"
                            value={csvInput}
                            onChange={(e) => setCsvInput(e.target.value)}
                            placeholder="France,FR,https://flagcdn.com/w320/fr.png,Europe,Paris,67391582,46.2276,2.2137"
                            rows={3}
                            className="font-mono text-xs bg-white"
                          />
                        </div>
                        <div className="flex gap-2">
                          <Button
                            type="button"
                            onClick={() => parseCsvLine(csvInput)}
                            disabled={!csvInput.trim()}
                            size="sm"
                            className="bg-blue-500 hover:bg-blue-600 text-white"
                          >
                            <Sparkles className="w-4 h-4 mr-2" />
                            Parse & Fill Form
                          </Button>
                          <Button type="button" variant="outline" size="sm" onClick={() => setCsvInput("")}>
                            Clear
                          </Button>
                        </div>
                        <div className="text-xs text-muted-foreground bg-white p-2 rounded border">
                          <strong>Expected format:</strong> Each field separated by commas. Use quotes around fields
                          containing commas.
                          <br />
                          <strong>Example:</strong> "France","FR","https://flagcdn.com/w320/fr.png","Europe","Paris","67391582","46.2276","2.2137"
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {editingId && (
                    <div>
                      <Label htmlFor="id">ID</Label>
                      <Input id="id" value={formData.id} disabled className="bg-gray-100" />
                    </div>
                  )}
                  <div>
                    <Label htmlFor="name">Country Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Country name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="code">Country Code *</Label>
                    <Input
                      id="code"
                      value={formData.code}
                      onChange={(e) => handleInputChange("code", e.target.value)}
                      placeholder="e.g., FR, US, GB"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="flagUrl">Flag URL</Label>
                    <Input
                      id="flagUrl"
                      value={formData.flagUrl}
                      onChange={(e) => handleInputChange("flagUrl", e.target.value)}
                      placeholder="https://flagcdn.com/w320/fr.png"
                    />
                  </div>
                  <div>
                    <Label htmlFor="region">Region</Label>
                    <Select value={formData.region} onValueChange={(value) => handleInputChange("region", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select region" />
                      </SelectTrigger>
                      <SelectContent>
                        {regions.map((region) => (
                          <SelectItem key={region} value={region}>
                            {region}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="capital">Capital</Label>
                    <Input
                      id="capital"
                      value={formData.capital}
                      onChange={(e) => handleInputChange("capital", e.target.value)}
                      placeholder="Capital city"
                    />
                  </div>
                  <div>
                    <Label htmlFor="population">Population</Label>
                    <Input
                      id="population"
                      value={formData.population}
                      onChange={(e) => handleInputChange("population", e.target.value)}
                      placeholder="e.g., 67391582"
                      type="number"
                    />
                  </div>
                  <div>
                    <Label htmlFor="latitude">Latitude</Label>
                    <Input
                      id="latitude"
                      value={formData.latitude}
                      onChange={(e) => handleInputChange("latitude", e.target.value)}
                      placeholder="e.g., 46.2276"
                      type="number"
                      step="any"
                    />
                  </div>
                  <div>
                    <Label htmlFor="longitude">Longitude</Label>
                    <Input
                      id="longitude"
                      value={formData.longitude}
                      onChange={(e) => handleInputChange("longitude", e.target.value)}
                      placeholder="e.g., 2.2137"
                      type="number"
                      step="any"
                    />
                  </div>
                </div>

                {/* Flag Preview Section */}
                {formData.flagUrl && (
                  <div className="mt-6">
                    <Label>Flag Preview</Label>
                    <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-4">
                      <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                        <img
                          src={formData.flagUrl}
                          alt="Flag preview"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.src = `/placeholder.svg?height=400&width=600&query=${encodeURIComponent(formData.name || "flag")}`
                          }}
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex gap-2">
                  <Button type="submit" disabled={loading}>
                    {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Plus className="w-4 h-4 mr-2" />}
                    {editingId ? "Update Country" : "Add Country"}
                  </Button>
                  {editingId && (
                    <Button type="button" variant="outline" onClick={resetForm}>
                      Cancel Edit
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="list">
          <Card>
            <CardHeader>
              <CardTitle>Country List ({countries.length})</CardTitle>
              <CardDescription>
                All countries in the database
                {storageType === "session-only" && (
                  <span className="block mt-1 text-blue-600 text-sm">
                    ⚠️ Session-only storage - changes will be lost on refresh
                  </span>
                )}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="w-6 h-6 animate-spin mr-2" />
                  Loading countries...
                </div>
              ) : (
                <div className="space-y-4">
                  {countries.map((country) => (
                    <div key={country.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                            <img
                              src={country.flagUrl}
                              alt={country.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement
                                target.src = `/placeholder.svg?height=96&width=96&query=${encodeURIComponent(country.name)}`
                              }}
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{country.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {country.capital}, {country.region}
                            </p>
                            <div className="flex gap-2 mt-2">
                              <Badge variant="secondary">{country.code}</Badge>
                              <Badge variant="outline">{country.region}</Badge>
                              <Badge variant="outline">{country.population.toLocaleString()}</Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <Button size="sm" variant="outline" onClick={() => handleEdit(country)}>
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDelete(country.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="csv">
          <Card>
            <CardHeader>
              <CardTitle>CSV Import</CardTitle>
              <CardDescription>Import country data from CSV format</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="csvData">CSV Data</Label>
                <Textarea
                  id="csvData"
                  value={csvData}
                  onChange={(e) => setCsvData(e.target.value)}
                  placeholder="Paste CSV data here..."
                  rows={8}
                />
              </div>
              <Button onClick={parseCsvData} disabled={!csvData.trim()}>
                <Upload className="w-4 h-4 mr-2" />
                Parse CSV Data
              </Button>
              <div className="text-sm text-muted-foreground">
                <p>Expected CSV format:</p>
                <code className="text-xs">
                  name,code,flagUrl,region,capital,population,latitude,longitude
                </code>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="export">
          <Card>
            <CardHeader>
              <CardTitle>Export Data</CardTitle>
              <CardDescription>Export country data for backup or analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={exportCountries}>
                <Download className="w-4 h-4 mr-2" />
                Export as CSV
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 