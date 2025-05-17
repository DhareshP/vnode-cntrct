import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-muted/40 p-4">
      <Link href="/" className="flex items-center gap-2 mb-8">
        <Image src="/logo.png" alt="Indian Army Veterans Logo" width={50} height={50} className="h-12 w-auto" />
        <span className="font-bold text-xl">Indian Army Veterans</span>
      </Link>

      <Tabs defaultValue="login" className="w-full max-w-md">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Account Login</CardTitle>
              <CardDescription>Enter your credentials to access your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="service-number">Service Number</Label>
                <Input id="service-number" placeholder="Enter your service number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter your password" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="remember" className="rounded border-gray-300" />
                  <Label htmlFor="remember" className="text-sm font-normal">
                    Remember me
                  </Label>
                </div>
                <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="register">
          <Card>
            <CardHeader>
              <CardTitle>Register Account</CardTitle>
              <CardDescription>Create a new account to access veteran services</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="reg-service-number">Service Number</Label>
                <Input id="reg-service-number" placeholder="Enter your service number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="reg-name">Full Name</Label>
                <Input id="reg-name" placeholder="Enter your full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="reg-email">Email</Label>
                <Input id="reg-email" type="email" placeholder="Enter your email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="reg-mobile">Mobile Number</Label>
                <Input id="reg-mobile" placeholder="Enter your mobile number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="reg-password">Password</Label>
                <Input id="reg-password" type="password" placeholder="Create a password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="reg-confirm-password">Confirm Password</Label>
                <Input id="reg-confirm-password" type="password" placeholder="Confirm your password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Register</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8 text-center text-sm text-muted-foreground">
        <p>For assistance, contact our helpdesk at 1800-180-0166 (Toll Free)</p>
        <p className="mt-2">
          <Link href="/" className="text-primary hover:underline">
            Return to Home Page
          </Link>
        </p>
      </div>
    </div>
  )
}
