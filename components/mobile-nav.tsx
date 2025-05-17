import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const navItems = [
  { title: "Home", href: "/" },
  {
    title: "About Us",
    href: "/about",
    subItems: [
      { title: "History", href: "/about/history" },
      { title: "Organization", href: "/about/organization" },
      { title: "Leadership", href: "/about/leadership" },
    ],
  },
  {
    title: "Services",
    href: "/services",
    subItems: [
      { title: "Resettlement", href: "/services/resettlement" },
      { title: "Healthcare", href: "/services/healthcare" },
      { title: "Education", href: "/services/education" },
    ],
  },
  {
    title: "Welfare Schemes",
    href: "/welfare-schemes",
    subItems: [
      { title: "Financial Assistance", href: "/welfare-schemes/financial" },
      { title: "Housing", href: "/welfare-schemes/housing" },
      { title: "Employment", href: "/welfare-schemes/employment" },
    ],
  },
  { title: "Pension", href: "/pension" },
  { title: "Ex-Servicemen Contribution", href: "/contribution" },
  { title: "Contact Us", href: "/contact" },
]

export function MobileNav() {
  return (
    <div className="flex flex-col gap-4 py-4">
      <div className="px-2 py-4">
        <Button className="w-full">Login</Button>
      </div>
      <div className="px-2">
        {navItems.map((item) =>
          item.subItems ? (
            <Accordion key={item.href} type="single" collapsible className="w-full">
              <AccordionItem value={item.title}>
                <AccordionTrigger className="text-sm">{item.title}</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-2 pl-4">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="text-sm transition-colors hover:text-primary"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ) : (
            <Link
              key={item.href}
              href={item.href}
              className="flex py-2 text-sm font-medium transition-colors hover:text-primary"
            >
              {item.title}
            </Link>
          ),
        )}
      </div>
    </div>
  )
}
