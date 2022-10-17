import React from "react";

const ForgotPass = () => {
  return (
    <div>
      {/* <!-- The button to open modal --> */}
      <label
        htmlFor="my-modal-4"
        className="modal-button cursor-pointer text-red-500 underline hover:text-red-600"
      >
        Forgot Password?
      </label>

      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative">
          <h3 className="text-lg font-bold">Forgot Password?</h3>
          <p className="py-4">Enter Your Email to reset password</p>
            <div>
            <div className="form-control">
                <input
                name="resetEmail"
                type="email"
                placeholder="email"
                className="input input-bordered"
                // required
                />
            </div>
            <button className="btn btn-accent mt-5">Reset Password</button>
            </div>
        </label>
      </label>
      {/* .................................  */}
    </div>
  );
};

export default ForgotPass;
