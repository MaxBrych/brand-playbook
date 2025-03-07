import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-12">
            One system
            <br />
            for everyone
            <br />
            to love.
          </h1>

          <p className="text-lg mb-8 max-w-md">
            eBay Evo is our brand and design system, created so we show up consistently all around the world with the
            flexibility to strengthen local market relevance.
          </p>

          <Button variant="outline" className="rounded-full px-6">
            Read press release
          </Button>
        </div>

        <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <Button variant="secondary" className="rounded-full flex items-center gap-2">
              <Play className="h-4 w-4" />
              Play video
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

