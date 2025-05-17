import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { MainNav } from "@/components/main-nav"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Home, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MobileNav } from "@/components/mobile-nav"

export default function ServicesPage() {
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
                <BreadcrumbLink href="/services">Services</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-3xl font-bold tracking-tight mb-6">Services for Veterans</h1>

          <p className="text-lg text-muted-foreground mb-8">
            The Directorate of Indian Army Veterans provides a wide range of services to support veterans and their
            families. Below are the key services available to all registered veterans.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Pension Services</CardTitle>
                <CardDescription>Comprehensive pension management and support</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Pension disbursement and tracking</li>
                  <li>Resolution of pension anomalies</li>
                  <li>Family pension processing</li>
                  <li>Pension slips and certificates</li>
                  <li>Digital Life Certificate (Jeevan Pramaan)</li>
                </ul>
                <Button variant="link" className="px-0 mt-4">
                  <Link href="/pension">Learn more about Pension Services</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Healthcare Services</CardTitle>
                <CardDescription>Ex-Servicemen Contributory Health Scheme (ECHS)</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>ECHS membership and smart cards</li>
                  <li>Access to military and empanelled hospitals</li>
                  <li>Specialized medical treatments</li>
                  <li>Medical reimbursements</li>
                  <li>Telemedicine services</li>
                </ul>
                <Button variant="link" className="px-0 mt-4">
                  <Link href="/healthcare">Learn more about Healthcare Services</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Resettlement Services</CardTitle>
                <CardDescription>Second career assistance and opportunities</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Job placement assistance</li>
                  <li>Skill development programs</li>
                  <li>Entrepreneurship support</li>
                  <li>Reservation in government jobs</li>
                  <li>Career counseling</li>
                </ul>
                <Button variant="link" className="px-0 mt-4">
                  <Link href="/resettlement">Learn more about Resettlement Services</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Financial Services</CardTitle>
                <CardDescription>Financial assistance and support schemes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Loans at concessional rates</li>
                  <li>Financial aid for distressed veterans</li>
                  <li>Education scholarships for children</li>
                  <li>Marriage grants for daughters</li>
                  <li>Emergency financial assistance</li>
                </ul>
                <Button variant="link" className="px-0 mt-4">
                  <Link href="/financial">Learn more about Financial Services</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Housing Services</CardTitle>
                <CardDescription>Housing schemes and accommodation support</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Army Welfare Housing Organization schemes</li>
                  <li>Housing loans at special rates</li>
                  <li>Reservation in government housing schemes</li>
                  <li>Retirement homes and communities</li>
                  <li>Property tax concessions</li>
                </ul>
                <Button variant="link" className="px-0 mt-4">
                  <Link href="/housing">Learn more about Housing Services</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Documentation Services</CardTitle>
                <CardDescription>Essential documentation and certificates</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Ex-Servicemen identity cards</li>
                  <li>Service certificates</li>
                  <li>Dependent cards</li>
                  <li>NOCs and other official documents</li>
                  <li>Record verification and updates</li>
                </ul>
                <Button variant="link" className="px-0 mt-4">
                  <Link href="/documentation">Learn more about Documentation Services</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>How to Access Services</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>To access the services provided by the Directorate of Indian Army Veterans, veterans need to:</p>
              <ol>
                <li>
                  <strong>Register on the Portal:</strong> Create an account on the Indian Army Veterans portal using
                  your service number and other details.
                </li>
                <li>
                  <strong>Update Your Profile:</strong> Ensure that all your personal information, contact details, and
                  bank information are up-to-date.
                </li>
                <li>
                  <strong>Apply for Services:</strong> Navigate to the specific service you require and follow the
                  application process.
                </li>
                <li>
                  <strong>Track Your Application:</strong> Use the portal to track the status of your applications and
                  requests.
                </li>
                <li>
                  <strong>Visit Nearest Office:</strong> For in-person assistance, visit your nearest Zila Sainik Board
                  or Ex-Servicemen Cell.
                </li>
              </ol>
              <p>
                For any assistance or queries regarding the services, you can contact our helpline at{" "}
                <strong>+91-11-26192358</strong> or email us at <strong>contact@indianarmyveterans.gov.in</strong>.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
