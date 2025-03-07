import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Clock } from "lucide-react"
import SidebarNav from "@/components/sidebar-nav"

export default function UsingOurTaglinePage() {
  return (
    <div className="flex flex-col md:flex-row">
      <aside className="md:w-64 lg:w-72 shrink-0 border-r hidden md:block">
        <div className="h-full py-6 pr-6 pl-4">
        <h2 className="text-lg font-semibold mb-4">Using our Tagline</h2>
        <SidebarNav />
        </div>
      </aside>

      <main className="flex-1">
        <div className="container max-w-4xl py-6 md:py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Using our tagline</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Guidelines for using the Things.People.Love. tagline across different applications.
          </p>

          <div className="bg-green-500 rounded-lg overflow-hidden mb-12">
            <div className="aspect-video relative">
              <Image
                src="/placeholder.svg?text=Things.People.Love."
                alt="Tagline example"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <section id="when-to-use" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">When to use</h2>
            <p className="text-muted-foreground mb-6">
              Our tagline should be used in specific contexts to reinforce our brand message.
            </p>

            <div className="bg-white rounded-lg p-6 border mb-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Image
                  src="/placeholder.svg?text=Example+1"
                  alt="Tagline usage example"
                  width={400}
                  height={200}
                  className="rounded-md"
                />
                <Image
                  src="/placeholder.svg?text=Example+2"
                  alt="Tagline usage example"
                  width={400}
                  height={200}
                  className="rounded-md"
                />
              </div>
            </div>
          </section>

          <section id="placement" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Placement</h2>
            <p className="text-muted-foreground mb-6">
              Guidelines for positioning the tagline in relation to other brand elements.
            </p>

            <div className="bg-white rounded-lg p-6 border">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?text=Placement+Guidelines"
                  alt="Tagline placement guidelines"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </section>

          <section id="size" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Size</h2>
            <p className="text-muted-foreground mb-6">Minimum and maximum size requirements for the tagline.</p>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border">
                <h3 className="font-medium mb-4">Large</h3>
                <div className="h-16 flex items-center">
                  <span className="text-2xl font-bold">Things.People.Love.</span>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border">
                <h3 className="font-medium mb-4">Small</h3>
                <div className="h-8 flex items-center">
                  <span className="text-sm font-bold">Things.People.Love.</span>
                </div>
              </div>
            </div>
          </section>

          <section id="tips" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-100 rounded-lg p-6">
                <h3 className="font-medium text-green-800 mb-2">Do</h3>
                <Image
                  src="/placeholder.svg?text=Correct+Usage"
                  alt="Correct tagline usage"
                  width={300}
                  height={200}
                  className="rounded-md mb-4"
                />
                <p className="text-sm text-green-800">Use the tagline with proper spacing and contrast</p>
              </div>

              <div className="bg-red-100 rounded-lg p-6">
                <h3 className="font-medium text-red-800 mb-2">Don't</h3>
                <Image
                  src="/placeholder.svg?text=Incorrect+Usage"
                  alt="Incorrect tagline usage"
                  width={300}
                  height={200}
                  className="rounded-md mb-4"
                />
                <p className="text-sm text-red-800">Modify or alter the tagline format</p>
              </div>
            </div>
          </section>

          <section id="resources" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Resources</h2>
            <Button variant="outline" className="w-full md:w-auto justify-start">
              <Download className="mr-2 h-4 w-4" />
              Download tagline package
            </Button>
          </section>

          <section id="changelog" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Changelog</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-medium">Updated tagline guidelines</h3>
                  <p className="text-sm text-muted-foreground">February 15, 2025</p>
                  <p className="text-sm mt-1">Added new examples and usage guidelines.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

