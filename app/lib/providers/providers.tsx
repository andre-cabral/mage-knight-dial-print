import AbilitiesProvider from "@/app/lib/providers/abilities-provide";
import { getAbilities } from "@/app/lib/fetches/abilities";
import ExpansionsProvider from "@/app/lib/providers/expansions-provider";
import { getExpansions } from "@/app/lib/fetches/expansions";
import FactionsProvider from "@/app/lib/providers/factions-provider";
import { getFactions } from "@/app/lib/fetches/factions";
import StatsProvider from "@/app/lib/providers/stats-provider";
import { getStats } from "@/app/lib/fetches/stats";

export function Providers({ children }) {
  const abilitiesPromise = getAbilities();
  const expansionsPromise = getExpansions();
  const factionsPromise = getFactions();
  const statsPromise = getStats();

  return (
    <AbilitiesProvider abilitiesPromise={abilitiesPromise}>
      <ExpansionsProvider expansionsPromise={expansionsPromise}>
        <FactionsProvider factionsPromise={factionsPromise}>
          <StatsProvider statsPromise={statsPromise}>
            {children}
          </StatsProvider>
        </FactionsProvider>
      </ExpansionsProvider>
    </AbilitiesProvider>
  );
}
