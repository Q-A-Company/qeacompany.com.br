"use client"

import { useEffect, useRef } from "react"
import { animate, useInView } from "framer-motion"

type AnimatedCounterProps = {
  value: number
  suffix?: string
  prefix?: string
  /** Casas decimais na exibição */
  decimals?: number
  className?: string
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  useEffect(() => {
    if (!inView || !ref.current) return
    const node = ref.current

    const controls = animate(0, value, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(latest) {
        node.textContent =
          prefix +
          latest.toLocaleString("pt-BR", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          }) +
          suffix
      },
    })
    return () => controls.stop()
  }, [inView, value, suffix, prefix, decimals])

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  )
}
