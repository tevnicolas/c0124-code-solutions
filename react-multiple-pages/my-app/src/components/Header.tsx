import './Header.css';
import { Link, Outlet } from 'react-router-dom';

export function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow-sm">
        <div className="navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="title nav-item nav-link">
              <Link to="/about">
                <div className="title">About</div>
              </Link>
            </li>
            <li className="nav-item nav-link">
              <Link to="/">
                <div className="title">Dashboard</div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
