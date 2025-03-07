import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Clock } from "lucide-react"
import SidebarNav from "@/components/sidebar-nav"

export default function UsingOurLogoPage() {
  return (
    <div className="flex flex-col md:flex-row">
      <aside className="md:w-64 lg:w-72 shrink-0 border-r hidden md:block">
        <div className="h-full py-6 pr-6 pl-4">
        <h2 className="text-lg font-semibold mb-4">Using our Logo</h2>
        <SidebarNav />
        </div>
      </aside>

      <main className="flex-1">
        <div className="container max-w-4xl py-6 md:py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Using our logo</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Guidelines for using the eBay logo across different applications and contexts.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-lg p-6 border">
              <Image
                src="/placeholder.svg?text=Example+1"
                alt="Logo usage example"
                width={400}
                height={300}
                className="rounded-md mb-4"
              />
              <p>            Guidelines for using the eBay logo across different applications and contexts.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border">
              <Image
                src="/placeholder.svg?text=Example+2"
                alt="Logo usage example"
                width={400}
                height={300}
                className="rounded-md mb-4"
              />
            </div>
          </div>

          <section id="heritage" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Heritage</h2>
            <p className="text-muted-foreground mb-6">
              Our logo represents our heritage and should be used consistently across all touchpoints.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 border">
                <Image
                  src="/placeholder.svg?text=eBay+Logo+Light"
                  alt="eBay Logo Light"
                  width={200}
                  height={80}
                  className="mb-4"
                />
                <p className="text-sm text-muted-foreground">Light version for dark backgrounds</p>
              </div>
              <div className="bg-black rounded-lg p-6 border">
                <Image
                  src="/placeholder.svg?text=eBay+Logo+Dark"
                  alt="eBay Logo Dark"
                  width={200}
                  height={80}
                  className="mb-4 invert"
                />
                <p className="text-sm text-white/70">Dark version for light backgrounds</p>
              </div>
            </div>
          </section>

          <section id="black-and-white" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Black and white</h2>
            <p className="text-muted-foreground mb-6">Use these versions when color reproduction is limited.</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 border">
                <Image
                  src="/placeholder.svg?text=eBay+Logo+Black"
                  alt="eBay Logo Black"
                  width={200}
                  height={80}
                  className="mb-4"
                />
              </div>
              <div className="bg-gray-100 rounded-lg p-6 border">
                <Image
                  src="/placeholder.svg?text=eBay+Logo+White"
                  alt="eBay Logo White"
                  width={200}
                  height={80}
                  className="mb-4"
                />
              </div>
            </div>
          </section>

          <section id="tone-on-tone" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Tone on tone</h2>
            <p className="text-muted-foreground mb-6">Examples of the logo used in tone on tone applications.</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-yellow-400 rounded-lg p-6">
                <Image
                  src="/placeholder.svg?text=eBay"
                  alt="eBay Logo Yellow"
                  width={120}
                  height={48}
                  className="mb-4"
                />
              </div>
              <div className="bg-red-400 rounded-lg p-6">
                <Image src="/placeholder.svg?text=eBay" alt="eBay Logo Red" width={120} height={48} className="mb-4" />
              </div>
              <div className="bg-green-400 rounded-lg p-6">
                <Image
                  src="/placeholder.svg?text=eBay"
                  alt="eBay Logo Green"
                  width={120}
                  height={48}
                  className="mb-4"
                />
              </div>
            </div>
          </section>

          <section id="resources" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" className="justify-start">
                <Download className="mr-2 h-4 w-4" />
                Download logo package
              </Button>
              <Button variant="outline" className="justify-start">
                <Download className="mr-2 h-4 w-4" />
                Download guidelines
              </Button>
            </div>
          </section>

          <section id="changelog" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Changelog</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-medium">Updated logo usage guidelines</h3>
                  <p className="text-sm text-muted-foreground">March 1, 2025</p>
                  <p className="text-sm mt-1">Added new examples for digital applications.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

