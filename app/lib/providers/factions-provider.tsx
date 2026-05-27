'use client'

import { createContext } from 'react'

export const FactionsContext = createContext<Promise<any> | null>(null)

export default function FactionsProvider({
  children,
  factionsPromise,
}: {
  children: React.ReactNode
  factionsPromise: Promise<any>
}) {
  return <FactionsContext value={factionsPromise}>{children}</FactionsContext>
}
