import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <header className="text-red-800">Navbar</header>
      <main>
        <Outlet />
      </main>
      <footer className="text-red-800" >footer</footer>
    </div>
  );
};
