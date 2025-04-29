import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { Header } from "../Header";

export const Layout: React.FC = () => {
  return (
    <div className="w-[95vw]">
      <header className="z-20 h-[var(--header-height)] w-full p-1 font-bold text-[var(--color-header-nav)]">
        <Header />
      </header>

      <main className="z-10 min-h-[calc(100vh-(var(--header-height)))] overflow-auto p-1">
        <Outlet />
      </main>

      <footer className="border-1 bottom-0 left-0 right-0 z-10 h-[var(--footer-height)] rounded-t-2xl border-transparent">
        <Footer />
      </footer>
    </div>
  );
};
