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
import type { Monument } from "@/lib/monument-database"
import { toast } from "@/hooks/use-toast"

interface FormData {
  id: string
  name: string
  location: string
  country: string
  continent: string
  type: string
  description: string
  yearBuilt: string
  height: string
  latitude: string
  longitude: string
  imageUrl: string
  source: string
  photoId: string
  sourceUrl: string
  photographerName: string
  photographerUrl: string
}

const initialFormData: FormData = {
  id: "",
  name: "",
  location: "",
  country: "",
  continent: "",
  type: "",
  description: "",
  yearBuilt: "",
  height: "",
  latitude: "",
  longitude: "",
  imageUrl: "",
  source: "Unsplash",
  photoId: "",
  sourceUrl: "",
  photographerName: "",
  photographerUrl: "",
}

const continents = ["Europe", "Asia", "North America", "South America", "Africa", "Oceania", "Middle East"]

export default function AdminDashboard() {
  const [monuments, setMonuments] = useState<Monument[]>([])
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error" | "warning" | "info"; text: string } | null>(null)
  const [csvData, setCsvData] = useState("")
  const [csvInput, setCsvInput] = useState("")
  const [showCsvParser, setShowCsvParser] = useState(false)
  const [storageType, setStorageType] = useState<string>("")

  // Load monuments from API
  const loadMonuments = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/monuments")
      const data = await response.json()

      if (data.monuments) {
        setMonuments(data.monuments)
        setStorageType(data.storageType || "unknown")

        // Show storage type info
        if (data.storageType === "session-only") {
          setMessage({
            type: "info",
            text: "⚠️ V0 Environment Limitation: Changes are stored in memory only during this session. All modifications will be lost when you refresh the page or restart the session. In a real Next.js development environment, changes would persist to files.",
          })
        }
      }
    } catch (error) {
      console.error("Error loading monuments:", error)
      setMessage({ type: "error", text: "Failed to load monuments" })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadMonuments()
  }, [])

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
      // Parse CSV line handling quoted fields and commas within descriptions
      const values = []
      let current = ""
      let inQuotes = false

      for (let i = 0; i < csvLine.length; i++) {
        const char = csvLine[i]
        if (char === '"') {
          inQuotes = !inQuotes
        } else if (char === "," && !inQuotes) {
          values.push(current.trim().replace(/^"|"$/g, "")) // Remove surrounding quotes
          current = ""
        } else {
          current += char
        }
      }
      values.push(current.trim().replace(/^"|"$/g, "")) // Add the last value

      // Expected CSV format: ID,Name,Country,Location,Continent,Type,Year,Lat,Lng,ImageURL,Photographer,PhotoURL,Description
      if (values.length < 13) {
        toast({
          title: "Error",
          description: `Invalid CSV format. Expected 13 columns, got ${values.length}`,
          variant: "destructive",
        })
        return
      }

      const [
        id,
        name,
        country,
        location,
        continent,
        type,
        yearBuilt,
        latitude,
        longitude,
        imageUrl,
        photographer,
        photographerUrl,
        description,
      ] = values

      // Parse year (handle formats like "14th century")
      let parsedYear = ""
      if (yearBuilt) {
        if (yearBuilt.includes("century")) {
          const centuryMatch = yearBuilt.match(/(\d+)(?:st|nd|rd|th)\s+century/i)
          if (centuryMatch) {
            const century = Number.parseInt(centuryMatch[1])
            parsedYear = ((century - 1) * 100 + 50).toString() // Mid-century approximation
          }
        } else {
          const numericYear = Number.parseInt(yearBuilt)
          if (!isNaN(numericYear)) {
            parsedYear = numericYear.toString()
          }
        }
      }

      // Extract photo ID from Unsplash URL
      let photoId = ""
      let source = "Unsplash"
      if (imageUrl) {
        if (imageUrl.includes("unsplash.com")) {
          const photoIdMatch = imageUrl.match(/photo-([a-zA-Z0-9_-]+)/)
          if (photoIdMatch) {
            photoId = photoIdMatch[1]
          }
          source = "Unsplash"
        } else if (imageUrl.includes("pexels.com")) {
          const photoIdMatch = imageUrl.match(/photos\/(\d+)/)
          if (photoIdMatch) {
            photoId = photoIdMatch[1]
          }
          source = "Pexels"
        }
      }

      // Update form data
      const newFormData: FormData = {
        id: "",
        name: name || "",
        location: location || "",
        country: country || "",
        continent: continent || "",
        type: type || "",
        description: description || "",
        yearBuilt: parsedYear,
        height: "",
        latitude: latitude || "",
        longitude: longitude || "",
        imageUrl: imageUrl || "",
        source,
        photoId,
        sourceUrl: imageUrl || "",
        photographerName: photographer || "",
        photographerUrl: photographerUrl || "",
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

    if (!formData.name || !formData.country) {
      setMessage({ type: "error", text: "Name and Country are required fields" })
      return
    }

    try {
      setLoading(true)

      const method = editingId ? "PUT" : "POST"
      const body = editingId ? { ...formData, id: editingId } : formData

      const response = await fetch("/api/monuments", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })

      const result = await response.json()

      if (result.success) {
        const messageType = result.warning ? "warning" : "success"
        setMessage({ type: messageType, text: result.message })
        resetForm()
        await loadMonuments() // Reload monuments
      } else {
        setMessage({ type: "error", text: result.error || "Operation failed" })
      }
    } catch (error) {
      console.error("Error saving monument:", error)
      setMessage({ type: "error", text: "Failed to save monument" })
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (monument: Monument) => {
    setFormData({
      id: monument.id.toString(),
      name: monument.name,
      location: monument.location,
      country: monument.country,
      continent: monument.continent,
      type: monument.type,
      description: monument.description,
      yearBuilt: monument.yearBuilt?.toString() || "",
      height: monument.height?.toString() || "",
      latitude: monument.latitude?.toString() || "",
      longitude: monument.longitude?.toString() || "",
      imageUrl: monument.images.large.jpg.split("?")[0] || "",
      source: monument.attribution.source,
      photoId: monument.attribution.photoId,
      sourceUrl: monument.attribution.url,
      photographerName: monument.attribution.photographer,
      photographerUrl: monument.attribution.photographerUrl,
    })
    setEditingId(monument.id)
  }

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this monument?")) return

    try {
      setLoading(true)
      const response = await fetch(`/api/monuments?id=${id}`, { method: "DELETE" })
      const result = await response.json()

      if (result.success) {
        const messageType = result.warning ? "warning" : "success"
        setMessage({ type: messageType, text: result.message })
        await loadMonuments() // Reload monuments
      } else {
        setMessage({ type: "error", text: result.error || "Delete failed" })
      }
    } catch (error) {
      console.error("Error deleting monument:", error)
      setMessage({ type: "error", text: "Failed to delete monument" })
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

      // Map CSV columns to form fields
      const csvToFormMapping: { [key: string]: keyof FormData } = {
        name: "name",
        location: "location",
        country: "country",
        continent: "continent",
        type: "type",
        description: "description",
        yearBuilt: "yearBuilt",
        height: "height",
        latitude: "latitude",
        longitude: "longitude",
        imageUrl: "imageUrl",
        source: "source",
        photoId: "photoId",
        sourceUrl: "sourceUrl",
        photographer: "photographerName",
        photographerName: "photographerName",
        photographerUrl: "photographerUrl",
      }

      const newFormData: FormData = { ...initialFormData }

      headers.forEach((header, index) => {
        const normalizedHeader = header.toLowerCase().replace(/[^a-z]/g, "")
        const matchingKey = Object.keys(csvToFormMapping).find(
          (key) => key.toLowerCase().replace(/[^a-z]/g, "") === normalizedHeader,
        )

        if (matchingKey && firstDataLine[index]) {
          const formField = csvToFormMapping[matchingKey]
          newFormData[formField] = firstDataLine[index].replace(/^"|"$/g, "") // Remove quotes
        }
      })

      setFormData(newFormData)
      setMessage({ type: "success", text: "CSV data parsed successfully" })
    } catch (error) {
      console.error("Error parsing CSV:", error)
      setMessage({ type: "error", text: "Failed to parse CSV data" })
    }
  }

  const exportMonuments = () => {
    const csvContent = [
      "name,location,country,continent,type,description,yearBuilt,height,latitude,longitude,imageUrl,source,photoId,sourceUrl,photographer,photographerUrl",
      ...monuments.map((m) =>
        [
          m.name,
          m.location,
          m.country,
          m.continent,
          m.type,
          m.description.replace(/,/g, ";"),
          m.yearBuilt || "",
          m.height || "",
          m.latitude || "",
          m.longitude || "",
          m.images.large.jpg.split("?")[0],
          m.attribution.source,
          m.attribution.photoId,
          m.attribution.url,
          m.attribution.photographer,
          m.attribution.photographerUrl,
        ]
          .map((field) => `"${field}"`)
          .join(","),
      ),
    ].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "monuments.csv"
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Monument Admin Dashboard</h1>
        <p className="text-muted-foreground">Manage monuments for the Monumentle game</p>
        {storageType === "session-only" && (
          <div className="mt-2 flex items-center gap-2 text-sm text-amber-600">
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
          <TabsTrigger value="add">Add Monument</TabsTrigger>
          <TabsTrigger value="list">Monument List</TabsTrigger>
          <TabsTrigger value="csv">CSV Import</TabsTrigger>
          <TabsTrigger value="export">Export</TabsTrigger>
        </TabsList>

        <TabsContent value="add">
          <Card>
            <CardHeader>
              <CardTitle>{editingId ? "Edit Monument" : "Add New Monument"}</CardTitle>
              <CardDescription>
                {editingId ? "Update monument information" : "Enter details for a new monument"}
                {storageType === "session-only" && (
                  <span className="block mt-1 text-amber-600 text-sm">
                    ⚠️ Changes will only persist during this session
                  </span>
                )}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* CSV Parser Section */}
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
                            CSV Line
                            (ID,Name,Country,Location,Continent,Type,Year,Lat,Lng,ImageURL,Photographer,PhotoURL,Description)
                          </Label>
                          <Textarea
                            id="csvInput"
                            value={csvInput}
                            onChange={(e) => setCsvInput(e.target.value)}
                            placeholder="62,Meteora,Greece,Thessaly,Europe,Rock Formation,14th century,39.721729,21.630466,https://images.unsplash.com/photo-1555993539-1732b0258235,,,Meteora is a striking geological formation..."
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
                          <strong>Example:</strong> 1,"Eiffel
                          Tower","France","Paris","Europe","Tower","1889",48.8584,2.2945,"https://...",""John
                          Doe"","https://...","Description here"
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
                    <Label htmlFor="name">Monument Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Monument name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="country">Country *</Label>
                    <Input
                      id="country"
                      value={formData.country}
                      onChange={(e) => handleInputChange("country", e.target.value)}
                      placeholder="Country name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => handleInputChange("location", e.target.value)}
                      placeholder="City/Region"
                    />
                  </div>
                  <div>
                    <Label htmlFor="continent">Continent</Label>
                    <Select value={formData.continent} onValueChange={(value) => handleInputChange("continent", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select continent" />
                      </SelectTrigger>
                      <SelectContent>
                        {continents.map((continent) => (
                          <SelectItem key={continent} value={continent}>
                            {continent}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="type">Type</Label>
                    <Input
                      id="type"
                      value={formData.type}
                      onChange={(e) => handleInputChange("type", e.target.value)}
                      placeholder="e.g., Tower, Castle, Temple"
                    />
                  </div>
                  <div>
                    <Label htmlFor="yearBuilt">Year Built</Label>
                    <Input
                      id="yearBuilt"
                      value={formData.yearBuilt}
                      onChange={(e) => handleInputChange("yearBuilt", e.target.value)}
                      placeholder="e.g., 1889"
                      type="number"
                    />
                  </div>
                  <div>
                    <Label htmlFor="latitude">Latitude</Label>
                    <Input
                      id="latitude"
                      value={formData.latitude}
                      onChange={(e) => handleInputChange("latitude", e.target.value)}
                      placeholder="e.g., 48.8584"
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
                      placeholder="e.g., 2.2945"
                      type="number"
                      step="any"
                    />
                  </div>
                  <div>
                    <Label htmlFor="imageUrl">Image URL</Label>
                    <Input
                      id="imageUrl"
                      value={formData.imageUrl}
                      onChange={(e) => handleInputChange("imageUrl", e.target.value)}
                      placeholder="https://images.unsplash.com/photo-..."
                    />
                  </div>
                  <div>
                    <Label htmlFor="photographerName">Photographer Name</Label>
                    <Input
                      id="photographerName"
                      value={formData.photographerName}
                      onChange={(e) => handleInputChange("photographerName", e.target.value)}
                      placeholder="Photographer's name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="photographerUrl">Photographer URL</Label>
                    <Input
                      id="photographerUrl"
                      value={formData.photographerUrl}
                      onChange={(e) => handleInputChange("photographerUrl", e.target.value)}
                      placeholder="Photographer's profile URL"
                    />
                  </div>
                </div>

                {/* Image Preview Section */}
                {formData.imageUrl && (
                  <div className="mt-6">
                    <Label>Image Preview</Label>
                    <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-4">
                      <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                        <img
                          src={formData.imageUrl || "/placeholder.svg"}
                          alt="Monument preview"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.src = `/placeholder.svg?height=400&width=600&query=${encodeURIComponent(formData.name || "monument")}`
                          }}
                        />
                      </div>
                      {formData.photographerName && (
                        <div className="mt-2 text-sm text-gray-600">
                          Photo by {formData.photographerName}
                          {formData.photographerUrl && (
                            <a
                              href={formData.photographerUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ml-1 text-blue-600 hover:underline"
                            >
                              (View Profile)
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    placeholder="Detailed description of the monument"
                    rows={4}
                  />
                </div>

                <div className="flex gap-2">
                  <Button type="submit" disabled={loading}>
                    {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Plus className="w-4 h-4 mr-2" />}
                    {editingId ? "Update Monument" : "Add Monument"}
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
              <CardTitle>Monument List ({monuments.length})</CardTitle>
              <CardDescription>
                All monuments in the database
                {storageType === "session-only" && (
                  <span className="block mt-1 text-amber-600 text-sm">
                    ⚠️ Session-only storage - changes will be lost on refresh
                  </span>
                )}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="w-6 h-6 animate-spin mr-2" />
                  Loading monuments...
                </div>
              ) : (
                <div className="space-y-4">
                  {monuments.map((monument) => (
                    <div key={monument.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          {/* Monument Image */}
                          <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                            <img
                              src={
                                monument.images?.thumbnail?.webp ||
                                monument.images?.thumbnail?.jpg ||
                                monument.images?.medium?.webp ||
                                monument.images?.medium?.jpg ||
                                monument.images?.large?.webp ||
                                monument.images?.large?.jpg ||
                                `/placeholder.svg?height=96&width=96&query=${encodeURIComponent(monument.name) || "/placeholder.svg"}`
                              }
                              alt={monument.name}
                              className="w-full h-full object-cover"
                              style={{ objectPosition: 'center' }}
                              onError={(e) => {
                                const target = e.target as HTMLImageElement
                                console.log(`❌ Image failed to load for ${monument.name}:`, target.src)
                                target.src = `/placeholder.svg?height=96&width=96&query=${encodeURIComponent(monument.name)}`
                              }}
                              onLoad={(e) => {
                                // Debug: log successful image loads
                                console.log(`✅ Image loaded for ${monument.name}:`, (e.target as HTMLImageElement).src)
                              }}
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{monument.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {monument.location}, {monument.country}
                            </p>
                            <div className="flex gap-2 mt-2">
                              <Badge variant="secondary">{monument.continent}</Badge>
                              <Badge variant="outline">{monument.type}</Badge>
                              {monument.yearBuilt && <Badge variant="outline">{monument.yearBuilt}</Badge>}
                            </div>
                            <p className="text-sm mt-2 line-clamp-2">{monument.description}</p>
                          </div>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <Button size="sm" variant="outline" onClick={() => handleEdit(monument)}>
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDelete(monument.id)}
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
              <CardDescription>Import monument data from CSV format</CardDescription>
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
                  name,location,country,continent,type,description,yearBuilt,height,latitude,longitude,imageUrl,source,photoId,sourceUrl,photographer,photographerUrl
                </code>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="export">
          <Card>
            <CardHeader>
              <CardTitle>Export Data</CardTitle>
              <CardDescription>Export monument data for backup or analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={exportMonuments}>
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
