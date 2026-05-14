import { NavLink } from "react-router";

function Home() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="page-title">User Management</h1>
        <p className="page-subtitle">
          Add users, then view their details.
        </p>
      </header>

      <section className="card">
        <h2 className="card-title">Quick actions</h2>
        <p className="card-muted mt-1">Choose what you want to do next.</p>

        <div className="mt-4 flex flex-wrap gap-3">
          <NavLink to="/adduser" className="btn btn-primary">
            Add User
          </NavLink>
          <NavLink to="/userslist" className="btn btn-ghost">
            View Users
          </NavLink>
        </div>
      </section>
    </div>
  );
}

export default Home;