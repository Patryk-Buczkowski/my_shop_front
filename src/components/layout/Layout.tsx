import { Outlet } from "react-router-dom";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export const Layout: React.FC = () => {
  return (
    <div className="w-[100vw]">
      <header className="w-full z-20 h-[var(--header-height)] font-bold p-2 text-[var(--color-header-nav)]">
        <Header />
      </header>

      <main className="z-10 overflow-auto h-[calc(100vh-90px)]">
        <Outlet />
      </main>

      <footer className="z-10 absolute rounded-t-2xl bottom-0 left-0 right-0 border-1 h-[var(--footer-height)] border-transparent" >
        <Footer />
      </footer>
    </div>
  );
};
