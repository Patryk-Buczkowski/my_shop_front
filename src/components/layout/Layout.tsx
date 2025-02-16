import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { Header } from "../Header";

export const Layout: React.FC = () => {
  return (
    <div className="w-[100vw]">
      <header className="w-full z-20 h-[var(--header-height)] font-bold p-1 text-[var(--color-header-nav)]">
        <Header />
      </header>

      <main className="z-10 p-1 overflow-auto h-[calc(100vh-(var(--footer-height)+var(--header-height))-10px)]">
        <Outlet />
      </main>

      <footer className="z-10 absolute rounded-t-2xl bottom-0 left-0 right-0 border-1 h-[var(--footer-height)] border-transparent" >
        <Footer />
      </footer>
    </div>
  );
};
