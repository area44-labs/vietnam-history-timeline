import {
  LifelineFooter,
  LifelineNav,
  LifelineShell,
  LifelineStage,
} from "./components/lifeline-shell";
import { Lifeline } from "./components/lifeline/lifeline";
import { LifelineLegend } from "./components/lifeline/lifeline-legend";
import { ThemeProvider } from "./components/theme-provider";
import { ThemeSwitcher } from "./components/theme-switcher";
import { vietnamLifeline } from "./lib/lifeline-vietnam";

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <LifelineShell>
        <LifelineNav
          logo={
            <div className="flex items-center gap-2">
              <span className="text-xl">🇻🇳</span>
              <span className="text-sm font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Vietnam History
              </span>
            </div>
          }
          logoHref="#"
          logoLabel="Vietnam History Timeline"
        >
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/evilrabbit/lifeline"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              Lifeline UI
            </a>
            <ThemeSwitcher />
          </div>
        </LifelineNav>

        <LifelineStage>
          <Lifeline
            markers={vietnamLifeline.markers}
            birthYear={vietnamLifeline.birthYear}
            title={vietnamLifeline.name}
            className="h-full"
          />
        </LifelineStage>

        <LifelineFooter>
          <div className="flex w-full items-center justify-between">
            <LifelineLegend items={vietnamLifeline.legend} />
            <p className="hidden text-xs text-zinc-400 sm:block">Built with evilrabbit/lifeline</p>
          </div>
        </LifelineFooter>
      </LifelineShell>
    </ThemeProvider>
  );
}

export default App;
