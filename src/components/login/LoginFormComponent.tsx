import { type FC } from "react";

type PropsType = {
  onLogin: (username: string, password: string) => void;
};

export const LoginFormComponent: FC<PropsType> = ({ onLogin }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    onLogin(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" placeholder="Username" required />
      <input name="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginFormComponent;
