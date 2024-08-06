import { login } from "@/lib/actions";
import SubmitButton from "./SubmitButton";

export default function Login() {
  return (
    <div className="flex justify-center py-10 ">
      <form
        action={login}
        className="flex flex-col gap-2 p-2 border rounded-xl"
      >
        <div className="flex justify-between gap-2 items-center">
          <label htmlFor="email">Email:</label>
          <input
            className=" border border-gray-300 p-1 rounded-md"
            id="email"
            name="email"
            type="email"
            required
          />
        </div>
        <div className=" flex justify-between gap-2 items-center">
          <label htmlFor="password">Password:</label>
          <input
            className="border border-gray-300 p-1 rounded-md"
            id="password"
            name="password"
            type="password"
            required
          />
        </div>
        <SubmitButton type="submit" />
      </form>
    </div>
  );
}
