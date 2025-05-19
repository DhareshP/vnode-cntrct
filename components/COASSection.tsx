import Image from "next/image"

                                            export default function COASSection() {
                                                return (
                                                    <section>
                                                        <div className="text-center mb-6">
                                                            <h2 className="text-2xl font-semibold text-gray-800">
                                                                OUR <span className="text-[#f0ad4e]">COAS</span>
                                                            </h2>
                                                            <div className="mt-2 mb-4 flex justify-center">
                                                                <div className="border-t-2 border-[#f0ad4e] w-16 mx-2" />
                                                                <div className="w-3 h-3 bg-[#f0ad4e] rotate-45" />
                                                                <div className="border-t-2 border-[#f0ad4e] w-16 mx-2" />
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-col md:flex-row items-center gap-6">
                                                            <div className="w-full md:w-1/3">
                                                                <Image
                                                                    src="/coas.png"
                                                                    alt="General Upendra Dwivedi"
                                                                    width={300}
                                                                    height={400}
                                                                    className="rounded shadow"
                                                                />
                                                            </div>
                                                            <div className="w-full md:w-2/3 text-justify">
                                                                <div className="bg-[#004d00] text-white text-center font-bold py-2 mb-4 w-full">
                                                                    GENERAL UPENDRA DWIVEDI, PVSM, AVSM
                                                                </div>
                                                                <p>
                                                                    General Upendra Dwivedi assumed command of the Indian Army on 30 Jun 24. Prior to this, he was Vice Chief of the Army Staff from Feb 24 onwards.
                                                                    He is the recipient of Param Vishisht Seva Medal, Ati Vishisht Seva Medal and three GOC-in-C Commendation cards.
                                                                </p>
                                                                <p className="mt-3">
                                                                    He hails from Madhya Pradesh and has studied in Sainik School Rewa MP. He joined the prestigious National Defence Academy in January 1981 and
                                                                    was commissioned into the 18th Battalion of the Jammu and Kashmir Rifles on 15 Dec 1984, which he later commanded in the Kashmir valley and
                                                                    the deserts of Rajasthan. From his school days, he was an outstanding sportsman and excelled in both NDA and IMA, where he was awarded the
                                                                    Blue in Physical Training. He continued to excel post commissioning and was awarded the gold medal in the Physical Training Course.
                                                                </p>
                                                                <button className="bg-[#004d00] text-white px-4 py-2 mt-4 rounded hover:bg-green-900">
                                                                    Read More
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </section>
                                                )
                                            }