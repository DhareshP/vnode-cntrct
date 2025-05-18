import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { ChevronRight, Home, Mail, MapPin, Menu, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Header } from "@/components/header"

export default function ContactPage() {
  return (
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="container mx-auto flex-1 py-8 space-y-6">
          <h1 className="text-3xl font-bold tracking-tight">Contact Us</h1>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-4">
                    {/* Form fields... */}
                    <div className="grid gap-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Enter your full name" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="service-number">Service Number (if applicable)</Label>
                      <Input id="service-number" placeholder="Enter your service number" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter your phone number" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="query-type">Query Type</Label>
                      <Select>
                        <SelectTrigger id="query-type">
                          <SelectValue placeholder="Select query type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pension">Pension Related</SelectItem>
                          <SelectItem value="healthcare">Healthcare Related</SelectItem>
                          <SelectItem value="employment">Employment Related</SelectItem>
                          <SelectItem value="documentation">Documentation Related</SelectItem>
                          <SelectItem value="welfare">Welfare Schemes</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Enter your message or query" rows={5} />
                    </div>
                    <Button type="submit" className="w-full">
                      Submit Query
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                  {/* Contact info cards... */}
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-muted-foreground">
                        Directorate of Indian Army Veterans,
                        <br /> Integrated HQ of MoD (Army),
                        <br /> West Block-IV, R.K. Puram,
                        <br /> New Delhi - 110066
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-muted-foreground">
                        Main Office: +91-11-26192358
                        <br /> Helpline: 1800-180-0166 (Toll Free)
                        <br /> Fax: +91-11-26192362
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground">
                        General Inquiries: contact@indianarmyveterans.gov.in
                        <br /> Pension Queries: pension@indianarmyveterans.gov.in
                        <br /> Technical Support: support@indianarmyveterans.gov.in
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* Office Hours & Regional Offices cards... */}
            </div>
          </div>

          {/* Map Embed */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Location Map</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video rounded-md overflow-hidden">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3118.1487327940436!2d73.88918177416953!3d18.521817069138212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1feaf720267%3A0x8ff8432c6c203e0e!2sVeterans%20Node%2C%20Pune!5e1!3m2!1sen!2sus!4v1747563370840!5m2!1sen!2sus"
                    width="600" height="450"  loading="lazy" className="w-full h-full"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </CardContent>
          </Card>
        </main>

        <Footer/>
      </div>
  )
}
