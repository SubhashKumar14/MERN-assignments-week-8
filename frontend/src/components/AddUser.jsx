import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useState } from "react";
function AddUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let [error, setError] = useState(null);
  let [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  //form submit
  const onUserCreate = async (newUser) => {
    setLoading(true);
    setError(null);
    //make api call to create user
    try {
      let res = await fetch("http://localhost:5000/user-api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (res.status === 201) {
        //user created navigate to user list page
        navigate("/userslist");
      }
      //if error in creating user show error message
      else {
        console.log(res);
        throw new Error("Error in creating user");
      }
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <header>
        <h1 className="page-title">Add User</h1>
        <p className="page-subtitle">Enter details and submit the form.</p>
      </header>

      <div className="card mx-auto w-full max-w-xl">
        <form className="space-y-4" onSubmit={handleSubmit(onUserCreate)}>
          <div className="space-y-1">
            <label className="field-label" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              className="field-input"
              {...register("name", { required: true })}
            />
            {errors.name && <p className="field-error">Name is required.</p>}
          </div>

          <div className="space-y-1">
            <label className="field-label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="john@example.com"
              className="field-input"
              {...register("email", { required: true })}
            />
            {errors.email && <p className="field-error">Email is required.</p>}
          </div>

          <div className="space-y-1">
            <label className="field-label" htmlFor="dateOfBirth">
              Date of birth
            </label>
            <input
              id="dateOfBirth"
              type="date"
              className="field-input"
              {...register("dateOfBirth", { required: true })}
            />
            {errors.dateOfBirth && (
              <p className="field-error">Date of birth is required.</p>
            )}
          </div>

          <div className="space-y-1">
            <label className="field-label" htmlFor="mobileNumber">
              Mobile number
            </label>
            <input
              id="mobileNumber"
              type="number"
              placeholder="9999999999"
              className="field-input"
              {...register("mobileNumber", { required: true })}
            />
            {errors.mobileNumber && (
              <p className="field-error">Mobile number is required.</p>
            )}
          </div>

          {error && (
            <p className="field-error" role="alert">
              {error.message}
            </p>
          )}

          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddUser