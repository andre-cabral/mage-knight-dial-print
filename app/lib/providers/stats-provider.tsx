'use client'

import { createContext } from 'react'

export const StatsContext = createContext<Promise<any> | null>(null)

export default function StatsProvider({
  children,
  statsPromise,
}: {
  children: React.ReactNode
  statsPromise: Promise<any>
}) {
  return <StatsContext value={statsPromise}>{children}</StatsContext>
}
