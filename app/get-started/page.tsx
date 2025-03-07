import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Download, HelpCircle, Book } from "lucide-react"

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="container py-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Get started</h1>
        <Separator className="my-6" />
        <p className="text-lg mb-8">
          eBay Evo is our brand and design system, created so we show up consistently all around the world.
        </p>

        <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden mb-12">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="eBay on multiple devices"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="container py-6">
        <h2 className="text-3xl font-bold mb-6">Explore Evo</h2>
        <Separator className="my-6" />

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gray-100 rounded-lg p-6 relative overflow-hidden">
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-md bg-gradient-to-br from-red-500 via-yellow-500 to-blue-500 opacity-80"
                />
              ))}
            </div>
            <h3 className="text-xl mb-2">Foundation</h3>
            <p className="text-gray-700 mb-4">
              Fundamental elements that provide the building blocks for creating consistent and cohesive user
              experiences.
            </p>
            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              <Link href="/foundations">Learn more</Link>
            </Button>
          </div>

          <div className="bg-gray-100 rounded-lg p-6 relative overflow-hidden">
            <div className="grid grid-cols-1 gap-2 mb-4">
              <div className="rounded-md bg-blue-500 p-4">
                <div className="flex justify-between mb-2">
                  <div className="h-4 w-24 bg-white/30 rounded"></div>
                  <div className="h-4 w-12 bg-white/30 rounded"></div>
                </div>
                <div className="h-6 w-40 bg-white/50 rounded mb-4"></div>
                <div className="flex gap-2">
                  <div className="h-8 w-20 bg-black/20 rounded"></div>
                  <div className="h-8 w-20 bg-white/30 rounded"></div>
                </div>
              </div>
            </div>
            <h3 className="text-xl mb-2">Design system</h3>
            <p className="text-gray-700 mb-4">
              Evo is the design system of eBay that enables us to build great experiences together.
            </p>
            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              <Link href="/design-system">Learn more</Link>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gray-100 rounded-lg p-6 relative overflow-hidden">
            <div className="aspect-video rounded-md bg-white p-4 mb-4">
              <div className="flex items-center">
                <div className="h-8 w-16 bg-gray-200 rounded mr-2"></div>
                <div className="h-4 w-40 bg-gray-200 rounded"></div>
              </div>
            </div>
            <h3 className="text-xl mb-2">Press release</h3>
            <p className="text-gray-700 mb-4">
              Discover the journey behind the creation of eBay Evo and its global impact.
            </p>
            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              Learn more
            </Button>
          </div>

          <div className="bg-gray-100 rounded-lg p-6 relative overflow-hidden">
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-md bg-gradient-to-br from-orange-500 via-red-500 to-purple-500 opacity-80"
                />
              ))}
            </div>
            <h3 className="text-xl mb-2">Media kit</h3>
            <p className="text-gray-300 mb-4">
              Download our eBay Evo media kit to share with publications and partners.
            </p>
            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>
        </div>
      </section>

      <section className="container py-6">
        <h2 className="text-3xl font-bold mb-6">About Evo</h2>
        <Separator className="my-6" />

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gray-100 rounded-lg p-6 relative overflow-hidden">
            <div className="flex justify-center items-center mb-6">
              <HelpCircle className="h-24 w-24 text-green-900" />
            </div>
            <h3 className="text-xl mb-2">FAQs</h3>
            <p className="text-green-900 mb-4">
              You've got questions, we've got answers. If you have a question or issue that isn't listed here, feel free
              to get in touch.
            </p>
            <Button variant="outline" className="bg-transparent text-black border-black hover:bg-black/10">
              Learn more
            </Button>
          </div>

          <div className="bg-gray-100 rounded-lg p-6 relative overflow-hidden">
            <div className="flex justify-center items-center mb-6">
              <Book className="h-24 w-24 text-purple-900" />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">System definitions</h3>
            <p className="text-purple-900 mb-4">
              Explore definitions and examples of words and elements mentioned across eBay Evo.
            </p>
            <Button variant="outline" className="bg-transparent text-black border-black hover:bg-black/10">
              Learn more
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-100 py-12">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Things.People.Love.</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/get-started" className="text-sm text-gray-400 hover:text-white">
                    Get started
                  </Link>
                </li>
                <li>
                  <Link href="/brand-strategy" className="text-sm text-gray-400 hover:text-white">
                    Brand strategy
                  </Link>
                </li>
                <li>
                  <Link href="/foundations" className="text-sm text-gray-400 hover:text-white">
                    Foundations
                  </Link>
                </li>
                <li>
                  <Link href="/design-system" className="text-sm text-gray-400 hover:text-white">
                    Design system
                  </Link>
                </li>
                <li>
                  <Link href="/expressions" className="text-sm text-gray-400 hover:text-white">
                    Expressions
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="text-sm text-gray-400 hover:text-white">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link href="/articles" className="text-sm text-gray-400 hover:text-white">
                    Articles
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-4">About</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/contributors" className="text-sm text-gray-400 hover:text-white">
                    Contributors
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-sm text-gray-400 hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-white">
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="text-sm text-gray-400 hover:text-white">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="mb-4 md:mb-0">
                <Link href="/" className="text-white font-bold">
                  eBay
                </Link>
              </div>
              <div className="text-xs text-gray-400">
                © 2025 eBay. All rights reserved.
                <br />
                eBay Evo, the eBay trademark, and the eBay logo are the intellectual property of eBay Inc.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

