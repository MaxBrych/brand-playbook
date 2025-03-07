import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, Clock } from "lucide-react"
import SidebarNav from "@/components/sidebar-nav"

export default function UsingColorPage() {
  return (
    <div className="flex flex-col md:flex-row">
      <aside className="md:w-64 lg:w-72 shrink-0 border-r hidden md:block">
        <div className="h-full py-6 pr-6 pl-4">
          <h2 className="text-lg font-semibold mb-4">Color</h2>
          <SidebarNav />
        </div>
      </aside>

      <main className="flex-1">
        <div className="container max-w-4xl py-6 md:py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Using color</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
            Consistently pairing color with typography, iconography, photography, and illustration can greatly improve
            brand recognition and perception. These guidelines outline how we use color across all touchpoints.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-[#0064d2] rounded-lg p-6 aspect-[4/5] flex items-center justify-center">
              <div className="w-24 h-24 border-4 border-white rounded-full flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
            </div>
            <div className="bg-[#f5af02] rounded-lg p-6 aspect-[4/5] relative">
              <h3 className="text-black text-lg font-medium mb-2">Illustration</h3>
              <Image
                src="/placeholder.svg?text=Illustration"
                alt="Person with eBay box"
                width={300}
                height={400}
                className="absolute bottom-0 left-0 right-0 mx-auto"
              />
            </div>
            <div className="bg-[#e53238] rounded-lg p-6 aspect-[4/5] flex items-center justify-center">
              <h3 className="text-white text-8xl font-bold">Aa</h3>
            </div>
          </div>

          <section id="color-palette" className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Color palette</h2>
            <div className="grid grid-cols-8 gap-2 mb-8">
              {[...Array(64)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-md"
                  style={{
                    backgroundColor: `hsl(${i * 5.625}, 70%, 50%)`,
                  }}
                />
              ))}
            </div>
          </section>

          <section id="color-combinations" className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Color combinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <div className="h-40 bg-[#e53238] rounded-lg" />
                <div className="h-40 bg-[#0064d2] rounded-lg" />
              </div>
              <div className="space-y-4">
                <div className="h-40 bg-[#f5af02] rounded-lg" />
                <div className="h-40 bg-[#86b817] rounded-lg" />
              </div>
              <div className="space-y-4">
                <div className="h-40 bg-black rounded-lg" />
                <div className="h-40 bg-white rounded-lg border" />
              </div>
            </div>
          </section>

          <section id="color-in-use" className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Color in use</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 border">
                <div className="aspect-video bg-[#0064d2] rounded-lg mb-4" />
                <h3 className="font-medium">Digital</h3>
                <p className="text-sm text-muted-foreground">Color usage in digital applications</p>
              </div>
              <div className="bg-white rounded-lg p-6 border">
                <div className="aspect-video bg-[#e53238] rounded-lg mb-4" />
                <h3 className="font-medium">Print</h3>
                <p className="text-sm text-muted-foreground">Color usage in print materials</p>
              </div>
            </div>
          </section>

          <section id="color-wheel" className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Color wheel</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="aspect-square relative">
                <div className="absolute inset-0 rounded-full border-8 border-gray-200">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-4 h-4 rounded-full bg-black"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: `rotate(${i * 30}deg) translate(150px) rotate(-${i * 30}deg)`,
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="aspect-square relative">
                <div className="absolute inset-0 rounded-full border-8 border-gray-200">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-4 h-4 rounded-full"
                      style={{
                        backgroundColor: `hsl(${i * 30}, 100%, 50%)`,
                        top: "50%",
                        left: "50%",
                        transform: `rotate(${i * 30}deg) translate(150px) rotate(-${i * 30}deg)`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="examples" className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Examples</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={`/placeholder.svg?text=Example+${i + 1}`}
                    alt={`Color example ${i + 1}`}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </section>

          <section id="resources" className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" className="justify-start">
                <Download className="mr-2 h-4 w-4" />
                Download color palette
              </Button>
              <Button variant="outline" className="justify-start">
                <Download className="mr-2 h-4 w-4" />
                Download style guide
              </Button>
            </div>
          </section>

          <section id="changelog" className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Changelog</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-medium">Updated color guidelines</h3>
                  <p className="text-sm text-muted-foreground">March 1, 2025</p>
                  <p className="text-sm mt-1">Added new color combinations and usage examples.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

