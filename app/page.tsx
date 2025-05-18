import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { FacilitiesSection } from "@/components/facilities-section"
import { SupportersSection } from "@/components/supporters-section"
import { SocialSidebar } from "@/components/social-sidebar"
import { MarqueeAnnouncement } from "@/components/marquee-announcement"
import { HeroCarousel } from "@/components/hero-carousel"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header/>

      {/* Marquee Announcement */}
      <MarqueeAnnouncement />

      {/* Main Content */}
      <main className="flex-1">
        {/* Social Media Sidebar */}
        <SocialSidebar />

        <div className="container mx-auto px-4 py-8">
          {/* Side by side layout */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left side - Carousel (75% width) */}
            <div className="w-full lg:w-3/4">
              <HeroCarousel />
            </div>

            {/* Right side - Search and updates (25% width) */}
            <div className="w-full lg:w-1/4 bg-white shadow-md h-fit">
              {/* Search section */}
              <div className="bg-[#f0ad4e] text-white p-2 font-bold text-center">Search</div>
              <div className="p-3 border-b">
                <div className="relative">
                  <Input type="text" placeholder="Search PDF" className="pr-8" />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2">
                    <Search className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Latest Updates section */}
              <div className="bg-[#f0ad4e] text-white p-2 font-bold text-center">Latest Updates</div>
              <div className="p-3 bg-[#004d00] text-white">
                <ul className="space-y-2">
                  <li className="flex items-start gap-1">
                    <span>➤</span>
                    <Link href="/sparsh-login" className="hover:underline">
                      SPARSH Login
                    </Link>
                  </li>
                  <li className="flex items-start gap-1">
                    <span>➤</span>
                    <Link href="/check-sparsh-status" className="hover:underline">
                      Check SPARSH Status
                    </Link>
                  </li>
                  <li className="flex items-start gap-1">
                    <span>➤</span>
                    <Link href="/vsk-login" className="hover:underline">
                      VSK Login
                    </Link>
                  </li>
                  <li className="flex items-start gap-1">
                    <span>➤</span>
                    <p className="text-sm">
                      To prevent stoppage of pension, please ensure you have submitted your life certificate
                    </p>
                  </li>
                </ul>
              </div>

              <div className="p-3 flex justify-center">
                <Image src="/qr-code.png" alt="QR Code" width={150} height={150} />
              </div>
            </div>
          </div>
          
          {/* After the carousel and sidebar, add your facility and supporters sections */}
          <div className="mt-8">
            <FacilitiesSection />
          </div>

          <div className="mt-8">
            <SupportersSection />
          </div>
        </div>
      </main>

      <Footer/>

      {/* Footer */}
      {/*<footer className="bg-[#1a2332] text-white py-8">*/}
      {/*  <div className="container mx-auto px-4">*/}
      {/*    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">*/}
      {/*      <div className="flex flex-col items-center md:items-start">*/}
      {/*        <Image src="/fav.png" alt="DIAV Logo" width={80} height={80} className="mb-4" />*/}
      {/*        <p className="text-sm">Indian Army Veterans Node, Headquaters Dakshin Command, Pune</p>*/}
      {/*        <p className="text-sm">104 Cavalry Road, Middle Lane, Pune Cantt - 411010</p>*/}
      {/*        <p className="text-sm mt-2">*/}
      {/*          <span>👨‍✈️ Service Pensioner Helpline: 01125664200,</span>*/}
      {/*          <br />*/}
      {/*          <span>WhatsApp: 9910610856, E-Mail: veteranscell.army@nic.in</span>*/}
      {/*        </p>*/}
      {/*        <div className="flex gap-2 mt-4">*/}
      {/*          <Link href="https://facebook.com" className="bg-[#f0ad4e] rounded-full p-2">*/}
      {/*            <svg*/}
      {/*              xmlns="http://www.w3.org/2000/svg"*/}
      {/*              width="16"*/}
      {/*              height="16"*/}
      {/*              fill="currentColor"*/}
      {/*              className="bi bi-facebook"*/}
      {/*              viewBox="0 0 16 16"*/}
      {/*            >*/}
      {/*              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />*/}
      {/*            </svg>*/}
      {/*          </Link>*/}
      {/*          <Link href="https://whatsapp.com" className="bg-[#f0ad4e] rounded-full p-2">*/}
      {/*            <svg*/}
      {/*              xmlns="http://www.w3.org/2000/svg"*/}
      {/*              width="16"*/}
      {/*              height="16"*/}
      {/*              fill="currentColor"*/}
      {/*              className="bi bi-whatsapp"*/}
      {/*              viewBox="0 0 16 16"*/}
      {/*            >*/}
      {/*              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />*/}
      {/*            </svg>*/}
      {/*          </Link>*/}
      {/*          <Link href="https://twitter.com" className="bg-[#f0ad4e] rounded-full p-2">*/}
      {/*            <svg*/}
      {/*              xmlns="http://www.w3.org/2000/svg"*/}
      {/*              width="16"*/}
      {/*              height="16"*/}
      {/*              fill="currentColor"*/}
      {/*              className="bi bi-twitter"*/}
      {/*              viewBox="0 0 16 16"*/}
      {/*            >*/}
      {/*              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />*/}
      {/*            </svg>*/}
      {/*          </Link>*/}
      {/*        </div>*/}
      {/*      </div>*/}

      {/*      <div>*/}
      {/*        <h3 className="text-lg font-bold mb-4 text-center md:text-left">Contacts</h3>*/}
      {/*        <ul className="space-y-2 text-sm">*/}
      {/*          <li className="flex items-start gap-1">*/}
      {/*            <span>📞</span>*/}
      {/*            <div>*/}
      {/*              <p>Family Pensioner Helpline: 01125664100,</p>*/}
      {/*              <p>WhatsApp: 9910640067, E-Mail:</p>*/}
      {/*              <p>diavfamilypension@gmail.com</p>*/}
      {/*            </div>*/}
      {/*          </li>*/}
      {/*          <li className="flex items-start gap-1">*/}
      {/*            <span>📞</span>*/}
      {/*            <div>*/}
      {/*              <p>ECHS Cell: 9717194522</p>*/}
      {/*            </div>*/}
      {/*          </li>*/}
      {/*          <li className="flex items-start gap-1">*/}
      {/*            <span>📞</span>*/}
      {/*            <div>*/}
      {/*              <p>Col Policy & Outreach: 9311938855</p>*/}
      {/*            </div>*/}
      {/*          </li>*/}
      {/*          <li className="flex items-start gap-1">*/}
      {/*            <span>📞</span>*/}
      {/*            <div>*/}
      {/*              <p>Col Pension & Entitlement: 9311938935</p>*/}
      {/*            </div>*/}
      {/*          </li>*/}
      {/*          <li className="flex items-start gap-1">*/}
      {/*            <span>📞</span>*/}
      {/*            <div>*/}
      {/*              <p>Col Rehabilitation & Welfare: 9311938954</p>*/}
      {/*            </div>*/}
      {/*          </li>*/}
      {/*          <li className="flex items-start gap-1">*/}
      {/*            <span>📞</span>*/}
      {/*            <div>*/}
      {/*              <p>Col Skill & Transition: 9717990925</p>*/}
      {/*            </div>*/}
      {/*          </li>*/}
      {/*          <li className="flex items-start gap-1">*/}
      {/*            <span>📞</span>*/}
      {/*            <div>*/}
      {/*              <p>Jt Dir Grievance/Media & Website: 9717054057</p>*/}
      {/*            </div>*/}
      {/*          </li>*/}
      {/*        </ul>*/}
      {/*      </div>*/}

      {/*      <div>*/}
      {/*        <h3 className="text-lg font-bold mb-4 text-center md:text-left">Opening Hours</h3>*/}
      {/*        <div className="space-y-4 text-sm">*/}
      {/*          <div>*/}
      {/*            <p className="text-yellow-400">MONDAY - SATURDAY</p>*/}
      {/*            <p>09:30 AM - 04:30 PM</p>*/}
      {/*          </div>*/}
      {/*          <div>*/}
      {/*            <p className="text-yellow-400">Sunday</p>*/}
      {/*            <p className="bg-[#f0ad4e] text-black inline-block px-2 py-1 rounded">CLOSED</p>*/}
      {/*          </div>*/}
      {/*          <div>*/}
      {/*            <p className="text-yellow-400">Public Holidays</p>*/}
      {/*            <p className="bg-[#f0ad4e] text-black inline-block px-2 py-1 rounded">CLOSED</p>*/}
      {/*          </div>*/}
      {/*          <div>*/}
      {/*            <p className="text-yellow-400">Visitor Count : 5783582</p>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}

      {/*    <div className="mt-8 pt-4 border-t border-gray-700 text-center text-xs">*/}
      {/*      <p>©2023 Copyright VMS. All Rights Reserved. Design & Developed by X-Softwares.</p>*/}
      {/*      <div className="mt-2 flex justify-center gap-4">*/}
      {/*        <Link href="/terms" className="hover:underline">*/}
      {/*          Terms & Conditions*/}
      {/*        </Link>*/}
      {/*        <Link href="/privacy" className="hover:underline">*/}
      {/*          Privacy Policy*/}
      {/*        </Link>*/}
      {/*        <Link href="/support" className="hover:underline">*/}
      {/*          Support*/}
      {/*        </Link>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</footer>*/}
    </div>
  )
}
