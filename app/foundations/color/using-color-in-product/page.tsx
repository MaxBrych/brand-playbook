import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import SidebarNav from "@/components/sidebar-nav"

// Color palette data
const productPalette = {
  red: ["#FFEBEE", "#FFCDD2", "#EF9A9A", "#E57373", "#EF5350", "#F44336", "#E53935", "#D32F2F", "#C62828", "#B71C1C"],
  green: ["#E8F5E9", "#C8E6C9", "#A5D6A7", "#81C784", "#66BB6A", "#4CAF50", "#43A047", "#388E3C", "#2E7D32", "#1B5E20"],
  blue: ["#E3F2FD", "#BBDEFB", "#90CAF9", "#64B5F6", "#42A5F5", "#2196F3", "#1E88E5", "#1976D2", "#1565C0", "#0D47A1"],
  gray: ["#FAFAFA", "#F5F5F5", "#EEEEEE", "#E0E0E0", "#BDBDBD", "#9E9E9E", "#757575", "#616161", "#424242", "#212121"],
}

export default function UsingColorInProductPage() {
  return (
    <div className="flex flex-col md:flex-row">
      <aside className="md:w-64 lg:w-72 shrink-0 border-r hidden md:block">
        <div className="h-full py-6 pr-6 pl-4">
          <h2 className="text-lg font-semibold mb-4">Color</h2>
          <SidebarNav />
        </div>
      </aside>

      <main className="flex-1 min-h-screen bg-black text-white">
        <div className="container max-w-4xl py-6 md:py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Using color in product</h1>
          <p className="text-lg text-gray-400 mb-12 max-w-3xl">
            Our product color system is designed to create accessible, consistent, and engaging experiences across all
            eBay products.
          </p>

          {/* Hero Section */}
          <section className="mb-16">
            <div className="bg-gray-900 rounded-lg p-8">
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-black rounded-2xl p-2 aspect-[9/19]">
                    <Image
                      src={`/placeholder.svg?text=App+Screen+${i}`}
                      alt={`App screen ${i}`}
                      width={270}
                      height={584}
                      className="rounded-xl w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Product Palette */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Product palette</h2>
            <div className="grid grid-cols-4 gap-8">
              {Object.entries(productPalette).map(([name, colors]) => (
                <div key={name} className="space-y-2">
                  <h3 className="text-sm font-medium capitalize mb-4">{name}</h3>
                  {colors.map((color, i) => (
                    <div key={i} className="h-8 rounded-md" style={{ backgroundColor: color }} />
                  ))}
                </div>
              ))}
            </div>
          </section>

          {/* Product Color Strategy */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Product color strategy</h2>
            <p className="text-gray-400 mb-8">
              Our color strategy emphasizes clarity and accessibility while maintaining brand consistency.
            </p>

            <div className="bg-gray-900 rounded-lg p-8 mb-8">
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-[#e53238] rounded-lg p-4">
                  <span className="text-white text-sm">Primary</span>
                </div>
                <div className="bg-[#0064d2] rounded-lg p-4">
                  <span className="text-white text-sm">Secondary</span>
                </div>
                <div className="bg-[#86b817] rounded-lg p-4">
                  <span className="text-white text-sm">Success</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-800 rounded-lg p-4">
                  <span className="text-white text-sm">Background</span>
                </div>
                <div className="bg-gray-700 rounded-lg p-4">
                  <span className="text-white text-sm">Surface</span>
                </div>
                <div className="bg-gray-600 rounded-lg p-4">
                  <span className="text-white text-sm">Border</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {/* Example UI Components */}
              <div className="bg-gray-900 rounded-lg p-6">
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full" />
                    <div>
                      <div className="h-4 w-32 bg-gray-200 rounded mb-2" />
                      <div className="h-3 w-24 bg-gray-100 rounded" />
                    </div>
                  </div>
                  <div className="h-40 bg-gray-100 rounded-lg mb-4" />
                  <div className="flex justify-between">
                    <div className="h-8 w-24 bg-[#0064d2] rounded" />
                    <div className="h-8 w-24 bg-gray-200 rounded" />
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-4">Example light mode UI</p>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gray-700 rounded-full" />
                    <div>
                      <div className="h-4 w-32 bg-gray-700 rounded mb-2" />
                      <div className="h-3 w-24 bg-gray-600 rounded" />
                    </div>
                  </div>
                  <div className="h-40 bg-gray-700 rounded-lg mb-4" />
                  <div className="flex justify-between">
                    <div className="h-8 w-24 bg-[#0064d2] rounded" />
                    <div className="h-8 w-24 bg-gray-600 rounded" />
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-4">Example dark mode UI</p>
              </div>
            </div>
          </section>

          {/* Color Tokens */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Color tokens</h2>
            <div className="bg-gray-900 rounded-lg p-8">
              <div className="space-y-4">
                <div className="h-12 bg-gray-800 rounded-lg flex items-center px-4">
                  <div className="w-8 h-8 bg-gray-700 rounded-full mr-4" />
                  <div className="flex-1">
                    <div className="h-2 w-32 bg-gray-700 rounded" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-16 bg-gray-800 rounded-lg p-4">
                    <div className="h-2 w-24 bg-[#0064d2] rounded mb-2" />
                    <div className="h-2 w-16 bg-gray-700 rounded" />
                  </div>
                  <div className="h-16 bg-gray-800 rounded-lg p-4">
                    <div className="h-2 w-24 bg-[#e53238] rounded mb-2" />
                    <div className="h-2 w-16 bg-gray-700 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Modes */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Modes</h2>
            <div className="bg-gray-900 rounded-lg p-8 mb-8">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="h-12 bg-white rounded-lg mb-4" />
                  <p className="text-sm text-gray-400">Light mode</p>
                </div>
                <div>
                  <div className="h-12 bg-gray-800 rounded-lg mb-4" />
                  <p className="text-sm text-gray-400">Dark mode</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#e53238] rounded-lg p-4">
                <span className="text-white text-sm">Error</span>
              </div>
              <div className="bg-[#f5af02] rounded-lg p-4">
                <span className="text-black text-sm">Warning</span>
              </div>
              <div className="bg-[#86b817] rounded-lg p-4">
                <span className="text-white text-sm">Success</span>
              </div>
            </div>
          </section>

          {/* Resources */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Resources</h2>
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="justify-start bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
              >
                <div className="w-8 h-8 bg-[#0064d2] rounded mr-4 flex items-center justify-center">
                  <Download className="h-4 w-4 text-white" />
                </div>
                Color tokens
              </Button>
              <Button
                variant="outline"
                className="justify-start bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
              >
                <div className="w-8 h-8 bg-[#86b817] rounded mr-4 flex items-center justify-center">
                  <Download className="h-4 w-4 text-white" />
                </div>
                Style guide
              </Button>
            </div>
          </section>

          {/* Changelog */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Changelog</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-gray-900 rounded-lg p-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full overflow-hidden">
                  <Image src="/placeholder.svg?text=Avatar" alt="User avatar" width={40} height={40} />
                </div>
                <div>
                  <h3 className="font-medium">Updated color tokens</h3>
                  <p className="text-sm text-gray-400">March 1, 2025</p>
                  <p className="text-sm text-gray-400 mt-1">Added new semantic color tokens for product UI.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

