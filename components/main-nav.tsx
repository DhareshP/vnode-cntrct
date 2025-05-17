import Link from "next/link"
import { cn } from "@/lib/utils"

const navItems = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Welfare Schemes", href: "/welfare-schemes" },
  { title: "Pension", href: "/pension" },
  { title: "Ex-Servicemen Contribution", href: "/contribution" },
  { title: "Contact Us", href: "/contact" },
]

interface MainNavProps {
  className?: string
}

export function MainNav({ className }: MainNavProps) {
  return (
    <nav className={cn("flex items-center gap-6", className)}>
      {navItems.map((item) => (
        <Link key={item.href} href={item.href} className="text-sm font-medium transition-colors hover:text-primary">
          {item.title}
        </Link>
      ))}
    </nav>
  )
}
