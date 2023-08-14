import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Link from "next/link";

function RegisterPage() {
  return (
    <section className="text-gray-600 h-auto px-5 py-16">
      <div className="bg-white flex flex-col mx-auto md:w-3/4 lg:w-1/2 w-full p-8">
        <Heading>Sign Up</Heading>
        <p className="leading-relaxed mb-5 text-gray-600">
          Register and unlock a world of endless fashion possibilities 👗🧥
        </p>
        <form>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="w-full bg-white rounded border border-gray-300 focus:border-[#67595E] focus:ring-2 focus:ring-[#67595E] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
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
            <label
              htmlFor="password"
              className="leading-7 text-sm text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-[#67595E] focus:ring-2 focus:ring-[#67595E]  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="password"
              className="leading-7 text-sm text-gray-600"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full bg-white rounded border border-gray-300 focus:border-[#67595E] focus:ring-2 focus:ring-[#67595E]  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="address"
              className="leading-7 text-sm text-gray-600"
            >
              Address
            </label>
            <input
              type="text"
              placeholder="Itahari (City), Sunsari (District) - Recommended format"
              id="address"
              name="address"
              className="w-full bg-white rounded border border-gray-300 focus:border-[#67595E] focus:ring-2 focus:ring-[#67595E]  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <Button
            variant="primary"
            className="flex justify-center text-lg uppercase tracking-wide"
          >
            Login
          </Button>
        </form>
        <p className="text-md text-gray-500 mt-3">
          Already have an account ?{" "}
          <Link href="/auth/login" className="text-[#67595E] underline">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}

export default RegisterPage;
