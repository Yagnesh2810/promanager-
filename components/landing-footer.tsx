import Link from "next/link"

export function LandingFooter() {
  return (
    <footer className="w-full border-t bg-background py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lg font-bold">ProManage+</span>
          </Link>
          <nav className="flex gap-4 md:gap-6">
            <Link href="#" className="text-xs md:text-sm hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-xs md:text-sm hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="#" className="text-xs md:text-sm hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
        </div>
        <p className="text-xs md:text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} ProManage+. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
