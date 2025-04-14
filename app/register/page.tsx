import Link from "next/link"
import { RegisterForm } from "@/components/register-form"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container flex flex-col items-center justify-center min-h-screen py-12">
        <Link href="/" className="absolute left-4 top-4 md:left-8 md:top-8">
          <Button variant="ghost" className="flex items-center gap-1">
            <ChevronLeft className="h-4 w-4" />
            Back
          </Button>
        </Link>
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
            <p className="text-sm text-muted-foreground">Enter your information to create an account</p>
          </div>
          <RegisterForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="underline underline-offset-4 hover:text-primary">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
