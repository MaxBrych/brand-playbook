import { Button } from "@/components/ui/button"
import { Download, Clock } from "lucide-react"
import SidebarNav from "@/components/sidebar-nav"

export default function ColorPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Using color</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Our color system is designed to create accessible, consistent, and engaging experiences.
          </p>

          <section id="color-palette" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Color palette</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-4">
                <div className="h-24 bg-[#e53238] rounded-lg"></div>
                <div>
                  <h3 className="font-medium">Red</h3>
                  <p className="text-sm text-muted-foreground">#e53238</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-24 bg-[#0064d2] rounded-lg"></div>
                <div>
                  <h3 className="font-medium">Blue</h3>
                  <p className="text-sm text-muted-foreground">#0064d2</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-24 bg-[#f5af02] rounded-lg"></div>
                <div>
                  <h3 className="font-medium">Yellow</h3>
                  <p className="text-sm text-muted-foreground">#f5af02</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-24 bg-[#86b817] rounded-lg"></div>
                <div>
                  <h3 className="font-medium">Green</h3>
                  <p className="text-sm text-muted-foreground">#86b817</p>
                </div>
              </div>
            </div>
          </section>

          <section id="color-combinations" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Color combinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 border">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="h-32 bg-[#e53238] rounded-lg"></div>
                  <div className="h-32 bg-[#0064d2] rounded-lg"></div>
                </div>
                <h3 className="font-medium">Primary combination</h3>
                <p className="text-sm text-muted-foreground">Main color combination for brand applications</p>
              </div>
              <div className="bg-white rounded-lg p-6 border">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="h-32 bg-[#f5af02] rounded-lg"></div>
                  <div className="h-32 bg-[#86b817] rounded-lg"></div>
                </div>
                <h3 className="font-medium">Secondary combination</h3>
                <p className="text-sm text-muted-foreground">Supporting color combination for accents</p>
              </div>
            </div>
          </section>

          <section id="accessibility" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Accessibility</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#e53238] rounded-lg p-6 text-white">
                <h3 className="font-medium mb-2">Red on White</h3>
                <p className="text-sm">WCAG 2.1 AA Compliant</p>
                <div className="mt-4 p-4 bg-white rounded text-[#e53238]">Sample text</div>
              </div>
              <div className="bg-[#0064d2] rounded-lg p-6 text-white">
                <h3 className="font-medium mb-2">Blue on White</h3>
                <p className="text-sm">WCAG 2.1 AA Compliant</p>
                <div className="mt-4 p-4 bg-white rounded text-[#0064d2]">Sample text</div>
              </div>
            </div>
          </section>

          <section id="examples" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Examples</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 border">
                <div className="aspect-square bg-gradient-to-br from-[#e53238] to-[#0064d2] rounded-lg mb-4"></div>
                <h3 className="font-medium">Gradients</h3>
                <p className="text-sm text-muted-foreground">Color transitions and overlays</p>
              </div>
              <div className="bg-white rounded-lg p-6 border">
                <div className="aspect-square bg-[#f5af02] rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full"></div>
                </div>
                <h3 className="font-medium">Icons</h3>
                <p className="text-sm text-muted-foreground">Color usage in iconography</p>
              </div>
              <div className="bg-white rounded-lg p-6 border">
                <div className="aspect-square bg-[#86b817] rounded-lg mb-4 flex items-center justify-center p-4">
                  <div className="w-full h-2 bg-white rounded-full"></div>
                </div>
                <h3 className="font-medium">UI Elements</h3>
                <p className="text-sm text-muted-foreground">Color in interface components</p>
              </div>
            </div>
          </section>

          <section id="resources" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Resources</h2>
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
            <h2 className="text-2xl font-semibold mb-4">Changelog</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-medium">Updated color palette</h3>
                  <p className="text-sm text-muted-foreground">March 1, 2025</p>
                  <p className="text-sm mt-1">Added new accessibility guidelines and examples.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

