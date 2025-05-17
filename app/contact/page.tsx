import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { MainNav } from "@/components/main-nav"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Home, Mail, MapPin, Menu, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MobileNav } from "@/components/mobile-nav"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="mr-2">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0">
                <MobileNav />
              </SheetContent>
            </Sheet>
          </div>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Indian Army Veterans Logo" width={40} height={40} className="h-8 w-auto" />
            <span className="hidden font-bold sm:inline-block">Indian Army Veterans</span>
          </Link>
          <div className="flex flex-1 items-center justify-end md:justify-between">
            <MainNav className="hidden md:flex" />
            <div className="flex items-center gap-2">
              <Button size="sm" className="hidden md:flex">
                Login
              </Button>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-6">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">
                  <Home className="h-4 w-4 mr-1" />
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/contact">Contact Us</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-3xl font-bold tracking-tight mb-6">Contact Us</h1>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-4">
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
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-muted-foreground">
                        Directorate of Indian Army Veterans,
                        <br />
                        Integrated HQ of MoD (Army),
                        <br />
                        West Block-IV, R.K. Puram,
                        <br />
                        New Delhi - 110066
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-muted-foreground">
                        Main Office: +91-11-26192358
                        <br />
                        Helpline: 1800-180-0166 (Toll Free)
                        <br />
                        Fax: +91-11-26192362
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground">
                        General Inquiries: contact@indianarmyveterans.gov.in
                        <br />
                        Pension Queries: pension@indianarmyveterans.gov.in
                        <br />
                        Technical Support: support@indianarmyveterans.gov.in
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Office Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 5:30 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday & Holidays</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Regional Offices</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div>
                      <h3 className="font-semibold">Northern Region</h3>
                      <p className="text-muted-foreground">
                        Zila Sainik Board, Delhi Cantonment
                        <br />
                        Phone: +91-11-25693568
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Southern Region</h3>
                      <p className="text-muted-foreground">
                        Zila Sainik Board, Chennai
                        <br />
                        Phone: +91-44-25674921
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Eastern Region</h3>
                      <p className="text-muted-foreground">
                        Zila Sainik Board, Kolkata
                        <br />
                        Phone: +91-33-22436982
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Western Region</h3>
                      <p className="text-muted-foreground">
                        Zila Sainik Board, Mumbai
                        <br />
                        Phone: +91-22-22616918
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Location Map</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                <p className="text-muted-foreground">Interactive map would be embedded here</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
