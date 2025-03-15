import { Outlet } from "react-router-dom";


import "./styles.css";

export function Layout() {
  return (
    <div>
      <header className="user">
        <p>Olá, Wanderson</p>
      </header>

      <Outlet />

      <footer>
        <span>Todos os direitos reservados</span>
      </footer>
    </div>
  );
}
