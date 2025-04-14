import Link from "next/link"
import { Button } from "@/components/ui/button"

export function LandingHero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Streamline Your Development Workflow
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                ProManage+ is a comprehensive project management system designed for developers and teams. Collaborate
                in real-time, manage tasks, integrate with GitHub, and more.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/register">
                <Button size="lg" className="w-full min-[400px]:w-auto">
                  Get Started
                </Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-full overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 p-4 shadow-lg">
              <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,transparent)]" />
              <div className="relative h-full w-full overflow-hidden rounded-lg border bg-background p-2 shadow-md">
                <div className="flex h-full flex-col">
                  <div className="flex h-8 items-center border-b px-3">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-red-500" />
                      <div className="h-2 w-2 rounded-full bg-yellow-500" />
                      <div className="h-2 w-2 rounded-full bg-green-500" />
                    </div>
                  </div>
                  <div className="flex-1 p-4">
                    <div className="grid grid-cols-3 gap-4 h-full">
                      <div className="col-span-1 space-y-2">
                        <div className="h-6 w-full rounded-md bg-muted" />
                        <div className="h-24 w-full rounded-md bg-muted" />
                        <div className="h-12 w-full rounded-md bg-muted" />
                        <div className="h-12 w-full rounded-md bg-muted" />
                      </div>
                      <div className="col-span-2 space-y-2">
                        <div className="h-6 w-full rounded-md bg-muted" />
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-24 w-full rounded-md bg-muted" />
                          <div className="h-24 w-full rounded-md bg-muted" />
                        </div>
                        <div className="h-12 w-full rounded-md bg-muted" />
                        <div className="h-12 w-full rounded-md bg-muted" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
