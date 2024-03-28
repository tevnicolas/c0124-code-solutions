import { Link, Outlet } from 'react-router-dom';

export function Header() {
  return (
    <>
      <div className="header">
        <Link to="/about" className="link">
          <h3 className="header-text">About</h3>
        </Link>
        <Link to="/" className="link">
          <h3 className="header-text">Catalog</h3>
        </Link>
      </div>
      <Outlet />
    </>
  );
}
