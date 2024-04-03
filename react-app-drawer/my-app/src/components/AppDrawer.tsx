import { Outlet, Link } from 'react-router-dom';
import './AppDrawer.css';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

export function Foo() {
  return <FaBars />;
}

export type MenuItem = {
  name: string;
  iconUrl: string;
  path: string;
};

type Props = {
  menuItems: MenuItem[];
};
export function AppDrawer({ menuItems }: Props) {
  const [open, setOpen] = useState(true);
  return (
    <div className="d-flex vw-100">
      <div>
        <div className={`menu-drawer ${open && 'is-open'}`}>
          <FaBars
            onClick={() => setOpen((prev) => !prev)}
            className="menu-icon"
          />
          <h3 className={`menu-heading ${!open && 'hidden'}`}>
            Hylian Shopping
          </h3>
          <ul className="menu-items">
            {menuItems.map((menu) => (
              <Link to={menu.path} className="menu-link">
                <li key={menu.name} className="menu-item">
                  <img src={menu.iconUrl} className="item-icon" />
                  {open && menu.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-grow-1">
        <Outlet />
      </div>
    </div>
  );
}
