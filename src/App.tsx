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
          <div className="flex w-full items-center justify-between">
            <LifelineLegend items={vietnamLifeline.legend} />
            <div className="hidden items-center gap-4 sm:flex">
              <a
                href="https://github.com/evilrabbit/lifeline"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-650 text-xs text-zinc-400 dark:hover:text-zinc-200"
              >
                GitHub
              </a>
              <span className="text-zinc-300 dark:text-zinc-800">|</span>
              <p className="text-xs text-zinc-400">Built with evilrabbit/lifeline</p>
            </div>
          </div>
        </LifelineFooter>
      </LifelineShell>
    </ThemeProvider>
  );
}

export default App;
