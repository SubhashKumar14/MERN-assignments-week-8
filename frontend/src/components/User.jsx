import { NavLink, useLocation } from "react-router";

function User() {
  let location = useLocation();
  let user = location?.state?.user;

  if (!user) {
    return (
      <div className="space-y-6">
        <header>
          <h1 className="page-title">User Details</h1>
          <p className="page-subtitle">No user selected.</p>
        </header>

        <div className="card">
          <p className="text-gray-600">
            Open this page by selecting a user from the list.
          </p>
          <div className="mt-4">
            <NavLink to="/userslist" className="btn btn-primary">
              Back to Users
            </NavLink>
          </div>
        </div>
      </div>
    );
  }

  let formattedDob = user?.dateOfBirth
    ? new Date(user.dateOfBirth).toLocaleDateString()
    : "—";

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="page-title">User Details</h1>
          <p className="page-subtitle">{user?.email}</p>
        </div>
        <NavLink to="/userslist" className="btn btn-ghost">
          Back
        </NavLink>
      </header>

      <div className="card">
        <dl className="grid gap-4 sm:grid-cols-2">
          <div>
            <dt className="field-label">Name</dt>
            <dd className="mt-1 text-gray-900">{user?.name}</dd>
          </div>
          <div>
            <dt className="field-label">Email</dt>
            <dd className="mt-1 text-gray-900">{user?.email}</dd>
          </div>
          <div>
            <dt className="field-label">Date of birth</dt>
            <dd className="mt-1 text-gray-900">{formattedDob}</dd>
          </div>
          <div>
            <dt className="field-label">Mobile number</dt>
            <dd className="mt-1 text-gray-900">{user?.mobileNumber ?? "—"}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default User;