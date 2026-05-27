'use client'

import { createContext } from 'react'

export const ExpansionsContext = createContext<Promise<any> | null>(null)

export default function ExpansionsProvider({
  children,
  expansionsPromise,
}: {
  children: React.ReactNode
  expansionsPromise: Promise<any>
}) {
  return <ExpansionsContext value={expansionsPromise}>{children}</ExpansionsContext>
}
