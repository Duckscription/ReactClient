import React from "react";
import duck_image from "../img/duck_signin_singup.png";

function SignIn() {
  return (
    <div className="signin_wrapper">
      <div className="img_wrapper">
        <img src={duck_image} alt="Logo" />;
      </div>

      <div className="content_wrapper flex flex-center">
        <form action="">
          <h2>Sign in</h2>
          <h3 className="">
            Get started absolutely <span className="highlight">free</span>
          </h3>

          <div>
            <label htmlFor="">Email</label>
            <input type="email" name="email" id="" />
          </div>

          <div>
            <label htmlFor="">Password</label>
            <input type="password" name="password" id="" />
          </div>

          <p style={{ marginTop: "17px" }}>
            You don't have account yet?{" "}
            <a href="">
              <span className="highlight">
                <strong>Sign Up</strong>
              </span>
            </a>
          </p>

          <button class="sign_in_btn">Sign in</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
