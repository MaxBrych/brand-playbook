import Image from "next/image"
import Link from "next/link"

export default function ShowcasePage() {
  return (
    <div className="flex flex-col md:flex-row">
      <aside className="md:w-64 lg:w-72 shrink-0 border-r hidden md:block">
        <div className="h-full py-6 pr-6 pl-4">
          <h2 className="text-lg font-semibold mb-4">Logo</h2>
          <nav className="flex flex-col space-y-1">
            <Link
              href="/foundations/logo"
              className="text-muted-foreground hover:text-foreground hover:bg-accent/50 px-3 py-2 text-sm rounded-md"
            >
              Overview
            </Link>
            <Link
              href="/foundations/logo/using-our-logo"
              className="text-muted-foreground hover:text-foreground hover:bg-accent/50 px-3 py-2 text-sm rounded-md"
            >
              Using our logo
            </Link>
            <Link
              href="/foundations/logo/using-our-tagline"
              className="text-muted-foreground hover:text-foreground hover:bg-accent/50 px-3 py-2 text-sm rounded-md"
            >
              Using our tagline
            </Link>
            <Link
              href="/foundations/logo/showcase"
              className="bg-accent text-accent-foreground font-medium px-3 py-2 text-sm rounded-md"
            >
              Showcase
            </Link>
          </nav>
        </div>
      </aside>

      <main className="flex-1">
        <div className="container max-w-4xl py-6 md:py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Showcase</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Examples of our logo and tagline in action across different applications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden border aspect-[4/3]">
                <Image
                  src="/placeholder.svg?text=Example"
                  alt={`Showcase example ${i + 1}`}
                  width={600}
                  height={450}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>

          <section id="product" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Product</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 border">
                <Image
                  src="/placeholder.svg?text=Product+Example"
                  alt="Product example"
                  width={400}
                  height={300}
                  className="rounded-md mb-4"
                />
                <div className="space-y-2">
                  <h3 className="font-medium">Product listing</h3>
                  <p className="text-sm text-muted-foreground">
                    Logo application in product listings and search results
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border">
                <Image
                  src="/placeholder.svg?text=Mobile+Example"
                  alt="Mobile example"
                  width={400}
                  height={300}
                  className="rounded-md mb-4"
                />
                <div className="space-y-2">
                  <h3 className="font-medium">Mobile app</h3>
                  <p className="text-sm text-muted-foreground">Logo usage in our mobile applications</p>
                </div>
              </div>
            </div>
          </section>

          <section id="social" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Social</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg overflow-hidden border aspect-square">
                  <Image
                    src="/placeholder.svg?text=Social"
                    alt={`Social media example ${i + 1}`}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </section>

          <section id="brand-partnerships" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Brand partnerships</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg p-6 border">
                  <Image
                    src="/placeholder.svg?text=Partnership"
                    alt={`Partnership example ${i + 1}`}
                    width={400}
                    height={300}
                    className="rounded-md mb-4"
                  />
                  <div className="space-y-2">
                    <h3 className="font-medium">Partner campaign</h3>
                    <p className="text-sm text-muted-foreground">Logo usage in partnership campaigns</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="print" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Print</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg overflow-hidden border">
                  <Image
                    src="/placeholder.svg?text=Print"
                    alt={`Print example ${i + 1}`}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

