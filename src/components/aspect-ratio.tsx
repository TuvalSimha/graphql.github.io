import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"
import { clsx } from "clsx"
import React from "react"

interface AspectRatioProps {
  className?: string
  href: string
  title: string
  src: string
}

export function AspectRatio({ className, href, title, src }: AspectRatioProps) {
  return (
    <>
      <AspectRatioPrimitive.Root
        ratio={16 / 9}
        className={clsx(
          "group relative h-full w-full overflow-hidden rounded-lg shadow-md",
          className
        )}
      >
        <a
          href={href}
          className="hover:no-underline absolute inset-0 z-[1] flex items-center justify-center"
        >
          <h3 className="text-center select-none bg-gradient-to-r from-fuchsia-500 to-fuchsia-300 bg-clip-text text-3xl font-black uppercase text-transparent duration-300 ease-in-out group-hover:opacity-0 sm:text-4xl">
            {title}
          </h3>
        </a>
        <div
          className={clsx(
            "absolute inset-0 bg-gray-600 object-cover group-hover:bg-gray-500",
            "transition-colors duration-300 ease-in-out"
          )}
        >
          <img
            src={src}
            alt={title}
            className="h-full w-full mix-blend-overlay object-cover"
          />
        </div>
      </AspectRatioPrimitive.Root>
    </>
  )
}
