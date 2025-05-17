import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const links = [
  {
    title: "Ministry of Defence",
    logo: "/mod-logo.png",
    href: "https://mod.gov.in/",
  },
  {
    title: "Indian Army",
    logo: "/army-logo.png",
    href: "https://indianarmy.nic.in/",
  },
  {
    title: "Directorate of Indian Army Veterans",
    logo: "/diav-logo.png",
    href: "#",
  },
  {
    title: "Kendriya Sainik Board",
    logo: "/ksb-logo.png",
    href: "https://ksb.gov.in/",
  },
  {
    title: "Ex-Servicemen Contributory Health Scheme",
    logo: "/echs-logo.png",
    href: "https://echs.gov.in/",
  },
  {
    title: "National Portal of India",
    logo: "/india-gov-logo.png",
    href: "https://www.india.gov.in/",
  },
]

export function ImportantLinks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {links.map((link) => (
        <Link key={link.title} href={link.href} target="_blank" rel="noopener noreferrer" className="block">
          <Card className="h-full transition-all hover:shadow-md">
            <CardContent className="flex flex-col items-center justify-center text-center p-4 h-full">
              <div className="relative w-16 h-16 mb-3">
                <Image src={link.logo || "/placeholder.svg"} alt={link.title} fill className="object-contain" />
              </div>
              <h3 className="text-sm font-medium">{link.title}</h3>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
