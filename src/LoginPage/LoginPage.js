import React from 'react';

function LoginPage() {
  return (
    <div className="App">
      <h2>Login</h2>
      <form action="login_process.php" method="post">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
          <input type="submit" value="Sign In" />
        </div>
      </form>
      <div className="options">
        <a href="signup.html">Sign Up</a> |
        <a href="forgot_password.html">Forgot Password</a>
      </div>
    </div>
  );
}

export default LoginPage;
