import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../context/AuthContext";

const Register = () => {
    const {createNewUser, error, updateUserProfile, registerSuccess} = useContext(authContext);

    const handleSubmitRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name);
        createNewUser(email, password);
        updateUserProfile(name)
        .then(() => {
          // ..
          console.log('displayNamme Updated');
        })
        .catch((error) => {
            console.error('error', error)
          })        
          e.target.reset();
        
    }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmitRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <label className="label">
                  <Link to="/login" className="label-text-alt link link-hover">
                    Alreay have an account?
                  </Link>
                </label>
                {registerSuccess && <p className="text-green-500">User Created Successfully</p>}
                {error?.code && <p className="text-left text-red-400">Sorry: {error?.code}</p>}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
