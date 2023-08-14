import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Link from "next/link";

function LoginPage() {
  return (
    <section className="text-gray-600 h-[70vh] flex items-center justify-center p-5">
      <div className="bg-white flex flex-col mx-auto md:w-3/4 lg:w-1/2 w-full p-8">
        <Heading>Sign in</Heading>
        <p className="leading-relaxed mb-5 text-gray-600">
          Access your personal shopping experience 🛒
        </p>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-white rounded border border-gray-300 focus:border-[#67595E] focus:ring-2 focus:ring-[#67595E] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="password" className="leading-7 text-sm text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full bg-white rounded border border-gray-300 focus:border-[#67595E] focus:ring-2 focus:ring-[#67595E]  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <Button
          variant="primary"
          className="flex justify-center text-lg uppercase tracking-wide"
        >
          Login
        </Button>
        <p className="text-md text-gray-500 mt-3">
          Don't have an account ?{" "}
          <Link href="/auth/register" className="text-[#67595E] underline">
            Register
          </Link>
        </p>
      </div>
    </section>
  );
}

export default LoginPage;
