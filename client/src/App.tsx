/**
 * Blush Ledger: white and pink accountant portfolio with repository-aware GitHub Pages routing.
 */
import { Toaster } from "@/components/ui/sonner";
import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <Toaster />
        <WouterRouter base={basePath}>
          <Routes />
        </WouterRouter>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
