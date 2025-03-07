"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ChevronDown, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

type NavItem = {
  title: string
  href?: string
  locked?: boolean
  children?: NavItem[]
}

const items: NavItem[] = [
  {
    title: "Overview",
    href: "/foundations",
  },
  {
    title: "Logo",
    children: [
      {
        title: "Our logo",
        href: "/foundations/logo",
      },
      {
        title: "Using our logo",
        href: "/foundations/logo/using-our-logo",
      },
      {
        title: "Using our tagline",
        href: "/foundations/logo/using-our-tagline",
      },
      {
        title: "Best practices",
        href: "/foundations/logo/best-practices",
        locked: true,
      },
      {
        title: "Showcase",
        href: "/foundations/logo/showcase",
      },
    ],
  },
  {
    title: "Color",
    children: [
      {
        title: "Our color",
        href: "/foundations/color",
      },
      {
        title: "Using color",
        href: "/foundations/color/using-color",
      },
      {
        title: "Color combinations",
        href: "/foundations/color/combinations",
      },
    ],
  },
  {
    title: "Typography",
    children: [
      {
        title: "Overview",
        href: "/foundations/typography",
      },
      {
        title: "Font family",
        href: "/foundations/typography/font-family",
      },
    ],
  },
  {
    title: "Photography",
    children: [
      {
        title: "Overview",
        href: "/foundations/photography",
      },
      {
        title: "Guidelines",
        href: "/foundations/photography/guidelines",
      },
    ],
  },
  {
    title: "Iconography",
    children: [
      {
        title: "Overview",
        href: "/foundations/iconography",
      },
      {
        title: "Library",
        href: "/foundations/iconography/library",
      },
    ],
  },
  {
    title: "Illustration",
    children: [
      {
        title: "Overview",
        href: "/foundations/illustration",
      },
      {
        title: "Style",
        href: "/foundations/illustration/style",
      },
    ],
  },
  {
    title: "Composition",
    children: [
      {
        title: "Overview",
        href: "/foundations/composition",
      },
      {
        title: "Grid",
        href: "/foundations/composition/grid",
      },
    ],
  },
  {
    title: "Motion",
    href: "/foundations/motion",
  },
  {
    title: "Interaction",
    href: "/foundations/interaction",
  },
  {
    title: "Generative AI",
    href: "/foundations/generative-ai",
    locked: true,
  },
  {
    title: "Accessibility",
    href: "/foundations/accessibility",
  },
  {
    title: "Object styles",
    href: "/foundations/object-styles",
  },
  {
    title: "Voice and tone",
    href: "/foundations/voice-and-tone",
    locked: true,
  },
]

function NavLink({ item, pathname }: { item: NavItem; pathname: string }) {
  const isActive = item.href === pathname
  const isParentOfActive = item.children?.some((child) => child.href === pathname)
  const [isOpen, setIsOpen] = React.useState(isParentOfActive) // Moved useState out of conditional

  if (!item.href && item.children) {
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            className={cn(
              "flex w-full items-center justify-between p-2 text-left text-sm hover:bg-accent hover:text-accent-foreground",
              isParentOfActive && "font-medium text-foreground",
            )}
          >
            {item.title}
            <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="pl-4 pt-1">
          {item.children.map((child) => (
            <NavLink key={child.href} item={child} pathname={pathname} />
          ))}
        </CollapsibleContent>
      </Collapsible>
    )
  }

  return (
    <Link
      href={item.href || "#"}
      className={cn(
        "flex items-center justify-between rounded-md px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground",
        isActive ? "bg-accent text-accent-foreground font-medium" : "text-muted-foreground",
      )}
    >
      {item.title}
      {item.locked && <Lock className="h-3 w-3 ml-2" />}
    </Link>
  )
}

export default function SidebarNav() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col space-y-1">
      {items.map((item) => (
        <NavLink key={item.href || item.title} item={item} pathname={pathname} />
      ))}
    </nav>
  )
}

