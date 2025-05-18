import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Youtube, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/fav.png" alt="Indian Army Veterans Logo" width={40} height={40} className="h-10 w-auto" />
              <span className="font-bold text-lg">Indian Army Veterans</span>
            </div>
            <p className="text-slate-300 mb-4">
              Supporting the welfare and well-being of Indian Army Veterans and their families.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white hover:text-primary">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="#" className="text-white hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/welfare-schemes" className="text-slate-300 hover:text-white">
                  Welfare Schemes
                </Link>
              </li>
              <li>
                <Link href="/pension" className="text-slate-300 hover:text-white">
                  Pension
                </Link>
              </li>
              <li>
                <Link href="/contribution" className="text-slate-300 hover:text-white">
                  Ex-Servicemen Contribution
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Important Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://mod.gov.in/"
                  className="text-slate-300 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ministry of Defence
                </Link>
              </li>
              <li>
                <Link
                  href="https://indianarmy.nic.in/"
                  className="text-slate-300 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Indian Army
                </Link>
              </li>
              <li>
                <Link
                  href="https://ksb.gov.in/"
                  className="text-slate-300 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kendriya Sainik Board
                </Link>
              </li>
              <li>
                <Link
                  href="https://echs.gov.in/"
                  className="text-slate-300 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ECHS
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.india.gov.in/"
                  className="text-slate-300 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  National Portal of India
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0" />
                <span className="text-slate-300">
                  Directorate of Indian Army Veterans, Integrated HQ of MoD (Army), West Block-IV, R.K. Puram, New Delhi
                  - 110066
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <Link href="tel:+911126192358" className="text-slate-300 hover:text-white">
                  +91-11-26192358
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <Link href="mailto:contact@indianarmyveterans.gov.in" className="text-slate-300 hover:text-white">
                  contact@indianarmyveterans.gov.in
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="container py-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Indian Army Veterans. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link href="/privacy-policy" className="text-slate-400 text-sm hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="text-slate-400 text-sm hover:text-white">
              Terms of Use
            </Link>
            <Link href="/sitemap" className="text-slate-400 text-sm hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
