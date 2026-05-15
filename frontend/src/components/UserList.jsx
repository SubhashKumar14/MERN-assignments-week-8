import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const USERS_STORAGE_KEY = "user-management.users";

function getStoredUsers() {
    try {
        const raw = localStorage.getItem(USERS_STORAGE_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

function UserList() {
    let [users, setUsers] = useState([]);
    let [loading, setLoading] = useState(true);
    let [error, setError] = useState(null);
    let navigate = useNavigate();

    useEffect(() => {
        let isMounted = true;

        async function getUsers() {
            setLoading(true);
            setError(null);

            try {
                const apiUrl = import.meta.env.VITE_API_URL;

                // If backend is configured, use API. Otherwise use localStorage.
                if (apiUrl) {
                    let res = await fetch(`${apiUrl}/user-api/users`, {
                        method: "GET",
                    });

                    if (res.status === 200) {
                        let resObj = await res.json();
                        if (isMounted) {
                            setUsers(resObj?.payload ?? []);
                        }
                        return;
                    }

                    throw new Error("Error in fetching users");
                }

                const storedUsers = getStoredUsers();
                if (isMounted) {
                    setUsers(storedUsers);
                }
            } catch (err) {
                console.log(err);
                if (isMounted) {
                    setError(err);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        getUsers();
        return () => {
            isMounted = false;
        };
    }, []);

    const goToUser = (userObj) => {
        navigate("/user", {
            state: {
                user: userObj,
            },
        });
    };

    return (
        <div className="space-y-6">
            <header>
                <h1 className="page-title">Users</h1>
                <p className="page-subtitle">Click a user to view details.</p>
            </header>

            {loading && (
                <div className="card">
                    <p className="text-gray-600">Loading users...</p>
                </div>
            )}

            {!loading && error && (
                <div className="card">
                    <p className="text-red-600">Couldn’t load users. Please try again.</p>
                </div>
            )}

            {!loading && !error && users?.length === 0 && (
                <div className="card">
                    <p className="text-gray-600">No users found.</p>
                </div>
            )}

            {!loading && !error && users?.length > 0 && (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {users?.map((userObj) => (
                        <div
                            key={userObj.email}
                            className="card cursor-pointer hover:border-gray-300"
                            onClick={() => goToUser(userObj)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") goToUser(userObj);
                            }}
                        >
                            <h2 className="card-title">{userObj.name}</h2>
                            <p className="card-muted">{userObj.email}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default UserList;