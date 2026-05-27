'use client'

import { createContext } from 'react'

export const AbilitiesContext = createContext<Promise<any> | null>(null)

export default function AbilitiesProvider({
  children,
  abilitiesPromise,
}: {
  children: React.ReactNode
  abilitiesPromise: Promise<any>
}) {
  return <AbilitiesContext value={abilitiesPromise}>{children}</AbilitiesContext>
}
