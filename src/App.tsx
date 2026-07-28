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
              <span className="font-mono text-sm font-extrabold tracking-tight select-none sm:text-base">
                VN
              </span>
            </div>
          }
          logoHref="#"
          logoLabel="Vietnam History Timeline"
        >
          <div className="flex items-center">
            <a
              href="https://github.com/evilrabbit/lifeline"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 transition-colors duration-300 hover:text-black dark:text-zinc-400 dark:hover:text-white"
            >
              Built with Lifeline
            </a>
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
          <div className="flex w-full items-center justify-between gap-6 text-xs">
            <div className="flex items-center gap-6">
              <ThemeSwitcher />
              <LifelineLegend items={vietnamLifeline.legend} />
            </div>
          </div>
        </LifelineFooter>
      </LifelineShell>
    </ThemeProvider>
  );
}

export default App;
