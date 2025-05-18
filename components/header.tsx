import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export function Header() {
    return (
        <div className="flex flex-col">
            {/* Top Helpline Bar */}
            <div className="bg-[#004d00] text-white text-sm py-2 px-4">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row justify-center gap-2 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-1">
                            <span>👨‍👩‍👧 Family Pensioner Helpline: 01125664100, WhatsApp: 9910640067, E-Mail:</span>
                            <a href="mailto:diavfamilypension@gmail.com" className="hover:underline">
                                diavfamilypension@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-1">
                            <span>👨‍✈️ Service Pensioner Helpline: 01125664200, WhatsApp: 9910610856, E-Mail:</span>
                            <a href="mailto:veteranscell.army@nic.in" className="hover:underline">
                                veteranscell.army@nic.in
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Header with Logo and Title */}
            <header className="w-full bg-gradient-to-r from-green-300 via-yellow-100 to-green-300 py-4">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <Image src="/indianarmylogo.png" alt="Indian Army Logo" width={80} height={80} />
                    <div className="text-center">
                        <h1 className="text-xl md:text-2xl font-bold text-[#004d00]">Indian Army Veteran Node Headquaters Dakshin Command</h1>
                        <h1 className="text-xl md:text-2xl font-bold text-[#004d00]">Pune</h1>
                        <p className="text-sm italic">(Taking Care of Our Own No Matter What...!)</p>
                    </div>
                    <Image src="/fav.png" alt="SouthernCommand Logo" width={80} height={80} />
                </div>
            </header>

            {/* Navigation Menu */}
            <nav className="bg-white border-b border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap items-center justify-center">
                        <Link href="/" className="p-3 text-gray-700 hover:text-[#004d00] hover:bg-gray-100">
              <span className="flex items-center gap-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </span>
                        </Link>
                        <Link href="/about" className="p-3 text-gray-700 hover:text-[#004d00] hover:bg-gray-100">
                            About Us
                        </Link>
                        <Link href="/coas" className="p-3 text-gray-700 hover:text-[#004d00] hover:bg-gray-100">
                            Our COAs
                        </Link>
                        <Link href="/outreach" className="p-3 text-gray-700 hover:text-[#004d00] hover:bg-gray-100">
                            Outreach
                        </Link>
                        <Link href="/pension" className="p-3 text-gray-700 hover:text-[#004d00] hover:bg-gray-100">
                            Pension
                        </Link>
                        <Link href="/entitlement" className="p-3 text-gray-700 hover:text-[#004d00] hover:bg-gray-100">
                            Entitlement
                        </Link>
                        <Link href="/skill" className="p-3 text-gray-700 hover:text-[#004d00] hover:bg-gray-100">
                            Skill & Transition
                        </Link>
                        <Link href="/rehab" className="p-3 text-gray-700 hover:text-[#004d00] hover:bg-gray-100">
                            Rehab & Welfare
                        </Link>
                        <Link href="/jobs" className="p-3 text-gray-700 hover:text-[#004d00] hover:bg-gray-100">
                            Jobs
                        </Link>
                        <Link href="/links" className="p-3 text-gray-700 hover:text-[#004d00] hover:bg-gray-100">
                            Links
                        </Link>
                        {/* <Link href="/vsk" className="p-3 text-gray-700 hover:text-[#004d00] hover:bg-gray-100">
                              VSK+
                            </Link> */}
                        <Link href="/contact" className="p-3 text-gray-700 hover:text-[#004d00] hover:bg-gray-100">
                            Contact us
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}