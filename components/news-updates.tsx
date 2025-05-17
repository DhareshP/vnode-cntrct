import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays } from "lucide-react"

const newsItems = [
  {
    id: 1,
    title: "New Pension Scheme Announced for Veterans",
    excerpt:
      "The government has announced a new pension scheme that will benefit thousands of army veterans across the country.",
    date: "May 15, 2025",
    category: "Pension",
    href: "/news/new-pension-scheme",
  },
  {
    id: 2,
    title: "Healthcare Benefits Extended for Veterans' Families",
    excerpt:
      "The healthcare benefits for veterans have been extended to include immediate family members under the new policy.",
    date: "May 10, 2025",
    category: "Healthcare",
    href: "/news/healthcare-benefits-extended",
  },
  {
    id: 3,
    title: "Annual Veterans Meet Scheduled for June",
    excerpt:
      "The annual veterans meet will be held in New Delhi from June 10-12, 2025. Registration is now open for all veterans.",
    date: "May 5, 2025",
    category: "Events",
    href: "/news/annual-veterans-meet",
  },
  {
    id: 4,
    title: "New Employment Initiative for Veterans",
    excerpt:
      "A new initiative has been launched to provide employment opportunities for veterans in various government sectors.",
    date: "April 28, 2025",
    category: "Employment",
    href: "/news/employment-initiative",
  },
]

export function NewsUpdates() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {newsItems.map((item) => (
        <Card key={item.id} className="h-full flex flex-col">
          <CardContent className="flex-1 p-4">
            <div className="mb-2">
              <Badge variant="outline">{item.category}</Badge>
            </div>
            <h3 className="font-semibold text-lg mb-2">
              <Link href={item.href} className="hover:underline">
                {item.title}
              </Link>
            </h3>
            <p className="text-sm text-muted-foreground mb-4">{item.excerpt}</p>
          </CardContent>
          <CardFooter className="pt-0 pb-4 px-4 border-t">
            <div className="flex items-center text-xs text-muted-foreground">
              <CalendarDays className="h-3 w-3 mr-1" />
              {item.date}
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
