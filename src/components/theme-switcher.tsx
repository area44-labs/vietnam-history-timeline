"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { Toggle } from "@base-ui/react"
import { cn } from "@/lib/utils"
import { useTheme } from "./theme-provider"

export function ThemeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <span className="inline-block h-4 w-4" aria-hidden="true" />
  }

  const isDark = resolvedTheme === "dark"

  return (
    <Toggle
      checked={isDark}
      onChange={(checked) => setTheme(checked ? "dark" : "light")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={cn(
        "inline-flex items-center p-0 text-zinc-500 transition-colors duration-300 hover:text-black dark:hover:text-white cursor-pointer"
      )}
    >
      {isDark ? (
        <Sun className="h-4 w-4" strokeWidth={1.75} />
      ) : (
        <Moon className="h-4 w-4" strokeWidth={1.75} />
      )}
    </Toggle>
  )
}
