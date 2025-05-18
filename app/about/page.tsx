import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Footer } from "@/components/footer"
import Image from "next/image"
import {Header} from "@/components/header"

export default function AboutPage() {
  return (
        <div className="flex min-h-screen flex-col">
          {/* Top Bar with Helpline Info */}
          <Header />
          <main className="container mx-auto flex-1 py-8 space-y-6">
            <h1 className="text-3xl font-bold tracking-tight">About Us</h1>

          <Tabs defaultValue="overview" className="mb-8">
            {/* ... rest of tabs as before ... */}
            <TabsList className="mb-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
              <TabsTrigger value="organization">Organization</TabsTrigger>
              <TabsTrigger value="leadership">Leadership</TabsTrigger>
            </TabsList>
            {/* TabsContent blocks here */}
            <TabsContent value="overview">
              <Card>
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p>
                    The Directorate of Indian Army Veterans (DIAV) was established to address the concerns of Veterans,
                    Veer Naris and their dependents. It functions as a single window organization to address all issues
                    concerning Veterans welfare, including pension problems, rehabilitation, second career options and
                    various other welfare schemes.
                  </p>
                  <p>
                    Our mission is to ensure that all Indian Army Veterans and their families receive the support,
                    benefits, and recognition they deserve for their service to the nation. We work closely with various
                    government departments and agencies to advocate for veterans' rights and welfare.
                  </p>
                  <p>
                    The Directorate serves as a bridge between the veterans community and the government, ensuring that
                    policies and programs are implemented effectively to benefit those who have served in the Indian
                    Army.
                  </p>
                  <h3>Our Objectives</h3>
                  <ul>
                    <li>To address pension-related issues and ensure timely disbursement of benefits</li>
                    <li>To provide healthcare services through the Ex-Servicemen Contributory Health Scheme (ECHS)</li>
                    <li>To facilitate resettlement and second career opportunities for veterans</li>
                    <li>To offer financial assistance to veterans and their families in need</li>
                    <li>To maintain a comprehensive database of veterans for better service delivery</li>
                    <li>To recognize and honor the contributions of veterans to the nation</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="history">
              <Card>
                <CardHeader>
                  <CardTitle>History</CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p>
                    The Directorate of Indian Army Veterans has evolved over the years to better serve the needs of the
                    growing veterans community in India. The journey began with the establishment of various welfare
                    organizations post-independence to cater to the needs of ex-servicemen.
                  </p>
                  <p>
                    In the early years after independence, the welfare of ex-servicemen was primarily handled by the
                    Directorate General Resettlement (DGR) under the Ministry of Defence. As the number of veterans grew
                    and their needs became more diverse, it became necessary to establish a dedicated organization
                    focused solely on veterans' welfare.
                  </p>
                  <p>
                    The Directorate of Indian Army Veterans was formally established to consolidate all veterans'
                    welfare activities under one umbrella, providing a single point of contact for all veterans'
                    concerns. This has significantly improved the efficiency and effectiveness of service delivery to
                    veterans.
                  </p>
                  <p>
                    Over the years, the Directorate has expanded its scope and reach, implementing numerous welfare
                    schemes and initiatives to improve the quality of life for veterans and their families. Today, it
                    stands as a testament to the nation's commitment to honoring and supporting those who have served in
                    the Indian Army.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="organization">
              <Card>
                <CardHeader>
                  <CardTitle>Organization Structure</CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p>
                    The Directorate of Indian Army Veterans operates under the Adjutant General's Branch of the
                    Integrated Headquarters of Ministry of Defence (Army). It is headed by a Director General, who is a
                    serving Lieutenant General of the Indian Army.
                  </p>
                  <p>
                    The Directorate is organized into several departments, each focusing on specific aspects of
                    veterans' welfare:
                  </p>
                  <ul>
                    <li>
                      <strong>Pension Cell:</strong> Handles all pension-related issues and coordinates with various
                      pension disbursing agencies
                    </li>
                    <li>
                      <strong>Welfare Cell:</strong> Manages welfare schemes and financial assistance programs
                    </li>
                    <li>
                      <strong>Resettlement Cell:</strong> Facilitates employment opportunities and skill development for
                      veterans
                    </li>
                    <li>
                      <strong>ECHS Cell:</strong> Coordinates healthcare services for veterans through the Ex-Servicemen
                      Contributory Health Scheme
                    </li>
                    <li>
                      <strong>Records Cell:</strong> Maintains comprehensive records of all veterans
                    </li>
                    <li>
                      <strong>Grievance Cell:</strong> Addresses complaints and grievances from veterans
                    </li>
                  </ul>
                  <p>
                    The Directorate works closely with various other organizations such as the Kendriya Sainik Board,
                    Rajya Sainik Boards, Zila Sainik Boards, and Ex-Servicemen Associations to ensure comprehensive
                    support for veterans across the country.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="leadership">
              <Card>
                <CardHeader>
                  <CardTitle>Leadership</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex flex-col items-center text-center">
                          <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden">
                            <Image src="/placeholder.svg" alt="Lt Gen Sunil Puri" fill className="object-cover" />
                          </div>
                          <h3 className="text-lg font-semibold">Lt Gen Sunil Puri</h3>
                          <p className="text-sm text-muted-foreground mb-2">Director General</p>
                          <p className="text-sm">
                            Oversees all operations of the Directorate and coordinates with the Ministry of Defence on
                            policy matters.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex flex-col items-center text-center">
                          <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden">
                            <Image src="/placeholder.svg" alt="Maj Gen Raj Kumar" fill className="object-cover" />
                          </div>
                          <h3 className="text-lg font-semibold">Maj Gen Raj Kumar</h3>
                          <p className="text-sm text-muted-foreground mb-2">Additional Director General</p>
                          <p className="text-sm">
                            Responsible for the day-to-day administration and implementation of welfare schemes.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex flex-col items-center text-center">
                          <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden">
                            <Image src="/placeholder.svg" alt="Brig Vikram Singh" fill className="object-cover" />
                          </div>
                          <h3 className="text-lg font-semibold">Brig Vikram Singh</h3>
                          <p className="text-sm text-muted-foreground mb-2">Director (Welfare)</p>
                          <p className="text-sm">
                            Heads the Welfare Cell and oversees all welfare schemes and financial assistance programs.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          </main>

          <Footer />
        </div>
    )
  }

