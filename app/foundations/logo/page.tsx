import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Download, Clock } from "lucide-react"
import SidebarNav from "@/components/sidebar-nav"

export default function LogoPage() {
  return (
    <div className="flex flex-col md:flex-row">
      <aside className="md:w-64 lg:w-72 shrink-0 border-r hidden md:block">
        <div className="h-full py-6 pr-6 pl-4">
          <h2 className="text-lg font-semibold mb-4">Foundations</h2>
          <SidebarNav />
        </div>
      </aside>

      <main className="flex-1">
        <div className="container max-w-4xl py-6 md:py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Our logo</h1>
          <p className="text-lg text-muted-foreground mb-8">
            The eBay logo is the primary visual representation of our brand and should be used consistently across all
            touchpoints.
          </p>

          <div className="bg-white rounded-lg p-8 mb-12 border">
            <div className="flex items-center justify-center h-40">
              <Image
                src="/placeholder.svg?text=eBay+Logo"
                alt="eBay Logo"
                width={200}
                height={80}
                className="object-contain"
              />
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">On this page</h2>
            <ul className="space-y-2">
              <li>
                <Link href="#identity" className="text-muted-foreground hover:text-foreground flex items-center">
                  Identity
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </li>
              <li>
                <Link href="#clear-space" className="text-muted-foreground hover:text-foreground flex items-center">
                  Clear space
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </li>
              <li>
                <Link href="#size" className="text-muted-foreground hover:text-foreground flex items-center">
                  Size
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </li>
              <li>
                <Link href="#scalability" className="text-muted-foreground hover:text-foreground flex items-center">
                  Scalability
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </li>
              <li>
                <Link href="#placement" className="text-muted-foreground hover:text-foreground flex items-center">
                  Placement
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </li>
              <li>
                <Link href="#cobrands" className="text-muted-foreground hover:text-foreground flex items-center">
                  Cobrands
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </li>
              <li>
                <Link href="#fashion" className="text-muted-foreground hover:text-foreground flex items-center">
                  Fashion
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </li>
              <li>
                <Link href="#avatar" className="text-muted-foreground hover:text-foreground flex items-center">
                  Avatar
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </li>
              <li>
                <Link
                  href="#brand-partnerships"
                  className="text-muted-foreground hover:text-foreground flex items-center"
                >
                  Brand partnerships
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          <section id="identity" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Identity</h2>
            <p className="text-muted-foreground mb-6">
              Our logo is the most recognizable element of our brand. It should be used consistently and with care.
            </p>

            <div className="bg-white rounded-lg p-8 mb-6 border">
              <div className="flex items-center justify-center h-40">
                <Image
                  src="/placeholder.svg?text=eBay+Logo"
                  alt="eBay Logo"
                  width={200}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>
          </section>

          <section id="clear-space" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Clear space</h2>
            <p className="text-muted-foreground mb-6">
              Always maintain adequate clear space around the logo to ensure visibility and impact.
            </p>

            <div className="bg-white rounded-lg p-8 mb-6 border">
              <div className="flex items-center justify-center h-40 border border-dashed border-gray-300">
                <div className="relative p-8 border border-dashed border-gray-300">
                  <Image
                    src="/placeholder.svg?text=eBay+Logo"
                    alt="eBay Logo"
                    width={150}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </section>

          <section id="size" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Size</h2>
            <p className="text-muted-foreground mb-6">
              The logo should never be displayed smaller than the minimum size to ensure legibility.
            </p>

            <div className="bg-white rounded-lg p-8 mb-6 border">
              <div className="flex flex-col items-center space-y-8">
                <Image
                  src="/placeholder.svg?text=eBay+Logo"
                  alt="eBay Logo"
                  width={200}
                  height={80}
                  className="object-contain"
                />
                <Image
                  src="/placeholder.svg?text=eBay+Logo"
                  alt="eBay Logo"
                  width={100}
                  height={40}
                  className="object-contain"
                />
                <Image
                  src="/placeholder.svg?text=eBay+Logo"
                  alt="eBay Logo"
                  width={50}
                  height={20}
                  className="object-contain"
                />
              </div>
            </div>
          </section>

          <section id="scalability" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Scalability</h2>
            <p className="text-muted-foreground mb-6">
              Our logo is designed to work at various sizes across different mediums.
            </p>

            <div className="bg-white rounded-lg p-8 mb-6 border">
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <div className="mb-2">Minimum size</div>
                  <Image
                    src="/placeholder.svg?text=eBay"
                    alt="eBay Logo"
                    width={40}
                    height={16}
                    className="object-contain mx-auto"
                  />
                </div>
                <div className="text-center">
                  <div className="mb-2">Standard size</div>
                  <Image
                    src="/placeholder.svg?text=eBay"
                    alt="eBay Logo"
                    width={80}
                    height={32}
                    className="object-contain mx-auto"
                  />
                </div>
              </div>
            </div>
          </section>

          <section id="placement" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Placement</h2>
            <p className="text-muted-foreground mb-6">
              Guidelines for logo placement across different applications and formats.
            </p>

            <div className="bg-white rounded-lg p-8 mb-6 border">
              <div className="grid grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="aspect-video bg-gray-100 rounded flex items-center justify-center p-4">
                    <Image
                      src="/placeholder.svg?text=eBay"
                      alt="eBay Logo"
                      width={60}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="cobrands" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Cobrands</h2>
            <p className="text-muted-foreground mb-6">Guidelines for using the eBay logo alongside partner brands.</p>

            <div className="bg-white rounded-lg p-8 mb-6 border">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-center space-x-8 p-4 border border-gray-200 rounded">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-xs">
                    eBay
                  </div>
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-xs">
                    Brand
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-8 p-4 border border-gray-200 rounded">
                  <div className="w-16 h-16 bg-gray-800 rounded flex items-center justify-center text-white text-xs">
                    eBay
                  </div>
                  <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center text-xs">Brand</div>
                </div>
              </div>
            </div>
          </section>

          <section id="resources" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-orange-100 rounded-lg p-4 flex items-center">
                <div className="bg-orange-200 rounded p-3 mr-4">
                  <Download className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-medium">Logo package</h3>
                  <p className="text-sm text-muted-foreground">Download all logo assets</p>
                </div>
              </div>

              <div className="bg-blue-100 rounded-lg p-4 flex items-center">
                <div className="bg-blue-200 rounded p-3 mr-4">
                  <Download className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">Usage guidelines</h3>
                  <p className="text-sm text-muted-foreground">Complete brand guidelines PDF</p>
                </div>
              </div>
            </div>
          </section>

          <section id="changelog" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Changelog</h2>
            <div className="border rounded-lg divide-y">
              <div className="p-4 flex">
                <div className="mr-4">
                  <div className="bg-gray-100 rounded-full p-2">
                    <Clock className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium">Updated logo guidelines</h3>
                  <p className="text-sm text-muted-foreground">January 15, 2025</p>
                  <p className="text-sm mt-2">Added new sections for digital applications and responsive design.</p>
                </div>
              </div>

              <div className="p-4 flex">
                <div className="mr-4">
                  <div className="bg-gray-100 rounded-full p-2">
                    <Clock className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium">Initial release</h3>
                  <p className="text-sm text-muted-foreground">October 10, 2024</p>
                  <p className="text-sm mt-2">First version of the logo guidelines published.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

