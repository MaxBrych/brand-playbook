import Image from "next/image"
import Link from "next/link"
import { Grid2X2, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Lock } from "lucide-react"

export default function FoundationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="container py-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Foundations</h1>
        <Separator className="my-6" />
        <p className="text-lg mb-8 max-w-3xl">
          Foundations are fundamental elements that provide the building blocks for creating consistent and cohesive
          user experiences.
        </p>

        <div className="flex justify-end mb-6 space-x-2">
          <Button variant="outline" size="sm" className="rounded-full">
            <Grid2X2 className="h-4 w-4 mr-2" />
            Grid
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            <List className="h-4 w-4 mr-2" />
            List
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Logo */}
          <Link href="/foundations/logo" className="block">
            <div className="bg-white rounded-lg overflow-hidden aspect-square">
              <div className="h-full w-full flex items-center justify-center p-8">
                <Image
                  src="/placeholder.svg?text=eBay+Logo"
                  alt="eBay Logo"
                  width={200}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>
            <h3 className="font-medium mt-3 mb-1">Logo</h3>
          </Link>

          {/* Color */}
          <Link href="/foundations/color" className="block">
            <div className="bg-gradient-to-br from-yellow-200 via-red-400 to-pink-500 rounded-lg overflow-hidden aspect-square">
              <div className="h-full w-full grid grid-cols-5 grid-rows-5">
                {[...Array(25)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-br from-yellow-200 via-red-400 to-pink-500 opacity-80"
                    style={{ opacity: 0.3 + (i % 5) * 0.15 }}
                  />
                ))}
              </div>
            </div>
            <h3 className="font-medium mt-3 mb-1">Color</h3>
          </Link>

          {/* Typography */}
          <Link href="/foundations/typography" className="block">
            <div className="bg-green-500 rounded-lg overflow-hidden aspect-square">
              <div className="h-full w-full flex items-center justify-center p-8">
                <span className="text-8xl font-bold text-black">Aa</span>
              </div>
            </div>
            <h3 className="font-medium mt-3 mb-1">Typography</h3>
          </Link>

          {/* Photography */}
          <Link href="/foundations/photography" className="block">
            <div className="bg-red-500 rounded-lg overflow-hidden aspect-square">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Photography example"
                width={400}
                height={400}
                className="object-cover h-full w-full"
              />
            </div>
            <h3 className="font-medium mt-3 mb-1">Photography</h3>
          </Link>

          {/* Iconography */}
          <Link href="/foundations/iconography" className="block">
            <div className="bg-lime-400 rounded-lg overflow-hidden aspect-square">
              <div className="h-full w-full flex items-center justify-center p-8">
                <div className="relative w-24 h-24 border-2 border-black/30 rounded-full flex items-center justify-center">
                  <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
                    {[...Array(16)].map((_, i) => (
                      <div key={i} className="border border-black/10" />
                    ))}
                  </div>
                  <div className="relative z-10 w-16 h-16 border-2 border-black/50 rounded-full">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 border-4 border-black/70 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="font-medium mt-3 mb-1">Iconography</h3>
          </Link>

          {/* Illustration */}
          <Link href="/foundations/illustration" className="block">
            <div className="bg-yellow-400 rounded-lg overflow-hidden aspect-square">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Illustration example"
                width={400}
                height={400}
                className="object-cover h-full w-full"
              />
            </div>
            <h3 className="font-medium mt-3 mb-1">Illustration</h3>
          </Link>

          {/* Composition */}
          <Link href="/foundations/composition" className="block">
            <div className="bg-orange-400 rounded-lg overflow-hidden aspect-square">
              <div className="h-full w-full grid grid-cols-8 grid-rows-8">
                {[...Array(64)].map((_, i) => (
                  <div key={i} className="border border-black/10" />
                ))}
                <div className="col-start-2 col-span-3 row-start-2 row-span-3 bg-amber-800 rounded-lg m-1"></div>
                <div className="col-start-3 col-span-3 row-start-4 row-span-3 bg-amber-800 rounded-lg m-1"></div>
                <div className="col-start-4 col-span-3 row-start-6 row-span-2 bg-amber-800 rounded-lg m-1"></div>
              </div>
            </div>
            <h3 className="font-medium mt-3 mb-1">Composition</h3>
          </Link>

          {/* Motion */}
          <Link href="/foundations/motion" className="block">
            <div className="bg-blue-400 rounded-lg overflow-hidden aspect-square">
              <div className="h-full w-full flex items-center justify-center p-8">
                <svg width="160" height="160" viewBox="0 0 160 160">
                  <path d="M40,120 C40,80 120,80 120,40" fill="none" stroke="black" strokeWidth="4" />
                  <circle cx="40" cy="120" r="6" fill="black" />
                  <circle cx="120" cy="40" r="6" fill="black" />
                </svg>
              </div>
            </div>
            <h3 className="font-medium mt-3 mb-1">Motion</h3>
          </Link>

          {/* Interaction */}
          <Link href="/foundations/interaction" className="block">
            <div className="bg-red-400 rounded-lg overflow-hidden aspect-square">
              <div className="h-full w-full flex items-center justify-center p-8">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-red-600 opacity-30"></div>
                  <div className="w-20 h-20 rounded-full bg-red-600 opacity-50 absolute top-0 left-6"></div>
                  <div className="w-20 h-20 rounded-full bg-red-600 opacity-70 absolute top-0 left-12"></div>
                  <div className="w-20 h-20 rounded-full bg-red-600 absolute top-0 left-18 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="font-medium mt-3 mb-1">Interaction</h3>
          </Link>

          {/* Generative AI */}
          <Link href="/foundations/generative-ai" className="block">
            <div className="bg-blue-100 rounded-lg overflow-hidden aspect-square">
              <div className="h-full w-full flex items-center justify-center p-8">
                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center">
                  <div className="w-16 h-16">
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <path d="M50,20 L80,50 L50,80 L20,50 Z" fill="#ff7e1a" />
                      <path d="M50,20 L20,50 L50,80 L80,50 Z" fill="#0064d2" />
                      <path d="M50,20 L80,50 L50,80 L20,50 Z" fill="#86b817" transform="rotate(45 50 50)" />
                      <path d="M50,20 L20,50 L50,80 L80,50 Z" fill="#f5af02" transform="rotate(45 50 50)" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center mt-3 mb-1">
              <h3 className="font-medium">Generative AI</h3>
              <Lock className="h-4 w-4 ml-2" />
            </div>
          </Link>

          {/* Accessibility */}
          <Link href="/foundations/accessibility" className="block">
            <div className="bg-purple-400 rounded-lg overflow-hidden aspect-square">
              <div className="h-full w-full flex items-center justify-center p-8">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="30" r="15" fill="#4c1d95" />
                  <path d="M20,85 C20,65 80,65 80,85" stroke="#4c1d95" strokeWidth="10" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <h3 className="font-medium mt-3 mb-1">Accessibility</h3>
          </Link>

          {/* Object styles */}
          <Link href="/foundations/object-styles" className="block">
            <div className="bg-pink-300 rounded-lg overflow-hidden aspect-square">
              <div className="h-full w-full flex items-center justify-center p-8">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full border-4 border-pink-600"></div>
                  <div className="absolute top-4 left-4 bg-pink-600 text-white text-xs px-2 py-1 rounded-full">
                    100%
                  </div>
                </div>
              </div>
            </div>
            <h3 className="font-medium mt-3 mb-1">Object styles</h3>
          </Link>

          {/* Voice and tone */}
          <Link href="/foundations/voice-and-tone" className="block">
            <div className="bg-orange-400 rounded-lg overflow-hidden aspect-square">
              <div className="h-full w-full flex items-center justify-center p-8">
                <div className="relative">
                  <div className="w-24 h-20 bg-amber-800 rounded-lg"></div>
                  <div className="w-16 h-14 bg-amber-800 rounded-lg absolute top-12 left-16"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center mt-3 mb-1">
              <h3 className="font-medium">Voice and tone</h3>
              <Lock className="h-4 w-4 ml-2" />
            </div>
          </Link>
        </div>
      </section>

      <footer className="bg-black text-white py-12 mt-12">
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

