import { useState } from "react";
import { login } from "../../services/api.services";
import { LoginFormComponent } from "./LoginFormComponent";

export const LoginComponent = () => {
  const [message, setMessage] = useState<string>("");

  const handleLogin = async (username: string, password: string) => {
    try {
      await login({ username, password, expiresInMins: 30 });
      setMessage("Login successful!");
    } catch (error) {
      console.error("Login error:", error);
      setMessage("Login failed!");
    }
  };

  return (
    <>
      <h1>Login Component</h1>
      <LoginFormComponent onLogin={handleLogin} />
      {message && <p>{message}</p>}
    </>
  );
};

export default LoginComponent;
