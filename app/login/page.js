import { login } from "@/lib/actions";

export default function Login() {
  return (
    <div className="w-full flex justify-center ">
      <form className="flex flex-col p-2 border rounded-xl">
        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input id="password" name="password" type="password" required />
        </div>
        <button formAction={login}>Log in</button>
      </form>
    </div>
  );
}
