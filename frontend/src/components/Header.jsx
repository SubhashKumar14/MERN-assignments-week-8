import { NavLink } from "react-router";

const navLinkClass = ({ isActive }) => {
  const base = "rounded-md px-3 py-2 text-sm font-medium";
  return isActive
    ? `${base} bg-blue-600 text-white`
    : `${base} text-gray-700 hover:bg-gray-100`;
};

function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <NavLink to="/" className="flex items-center gap-3">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://thumbs.dreamstime.com/b/creative-simple-dragons-silhouettes-logo-stylized-vector-illustrations-simple-dragons-silhouettes-logo-130475058.jpg"
            alt="App logo"
          />
          <span className="text-base font-semibold text-gray-900 sm:text-lg">
            User Management
          </span>
        </NavLink>

        <nav aria-label="Primary">
          <ul className="flex items-center gap-1 sm:gap-2">
            <li>
              <NavLink to="/" end className={navLinkClass}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/adduser" className={navLinkClass}>
                Add User
              </NavLink>
            </li>

            <li>
              <NavLink to="/userslist" className={navLinkClass}>
                Users List
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;