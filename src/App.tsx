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
            <div className="flex items-center">
              <span className="text-xl">🇻🇳</span>
            </div>
          }
          logoHref="#"
          logoLabel="Vietnam History Timeline"
        >
          <div className="flex items-center">
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
          <div className="flex w-full items-center justify-between gap-4 text-xs">
            <LifelineLegend items={vietnamLifeline.legend} />
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/evilrabbit/lifeline"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                GitHub
              </a>
              <span className="hidden text-zinc-300 sm:inline dark:text-zinc-800">|</span>
              <p className="hidden text-zinc-400 sm:block">Built with evilrabbit/lifeline</p>
            </div>
          </div>
        </LifelineFooter>
      </LifelineShell>
    </ThemeProvider>
  );
}

export default App;
