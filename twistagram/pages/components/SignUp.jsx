import React from "react";

function SignUp() {
  return (
    <div class="">
      <div>
        <div>
          <span>Username</span>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <span>Email</span>
          <input type="email" name="email" placeholder="Email" />
        </div>
        <div>
          <span>Password</span>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <div>
          <span>Confirm Password</span>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
          />
        </div>
        <button type="button">Sign Up</button>
        <div>
          <p>
            Already have an account?
            <p class="text-purple-800 ml-1.5 text-center">
              <Link href="/signin">Sign in</Link>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
