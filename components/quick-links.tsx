import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Heart, Home, Landmark, Briefcase, GraduationCap, Phone } from "lucide-react"

const quickLinks = [
  {
    title: "Pension Services",
    description: "Check pension status and updates",
    icon: <FileText className="h-6 w-6" />,
    href: "/pension",
  },
  {
    title: "Healthcare",
    description: "Access healthcare services",
    icon: <Heart className="h-6 w-6" />,
    href: "/healthcare",
  },
  {
    title: "Housing Schemes",
    description: "Housing benefits for veterans",
    icon: <Home className="h-6 w-6" />,
    href: "/housing",
  },
  {
    title: "Financial Services",
    description: "Loans and financial assistance",
    icon: <Landmark className="h-6 w-6" />,
    href: "/financial",
  },
  {
    title: "Employment Opportunities",
    description: "Job listings for veterans",
    icon: <Briefcase className="h-6 w-6" />,
    href: "/employment",
  },
  {
    title: "Education Support",
    description: "Scholarships and education benefits",
    icon: <GraduationCap className="h-6 w-6" />,
    href: "/education",
  },
  {
    title: "Helpline",
    description: "24/7 support for veterans",
    icon: <Phone className="h-6 w-6" />,
    href: "/helpline",
  },
]

export function QuickLinks() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {quickLinks.map((link) => (
        <Link key={link.href} href={link.href} className="block">
          <Card className="h-full transition-all hover:shadow-md">
            <CardContent className="flex flex-col items-center text-center p-4">
              <div className="rounded-full bg-primary/10 p-3 mb-3">{link.icon}</div>
              <h3 className="font-medium mb-1">{link.title}</h3>
              <p className="text-sm text-muted-foreground">{link.description}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
