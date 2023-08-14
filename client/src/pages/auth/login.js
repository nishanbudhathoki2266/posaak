import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import FormError from "@/components/FormError";

function LoginPage() {
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email is required"),

    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
  });
  return (
    <section className="text-gray-600 h-[70vh] flex items-center justify-center p-5">
      <div className="bg-white flex flex-col mx-auto md:w-3/4 lg:w-1/2 w-full p-8">
        <Heading>Sign in</Heading>
        <p className="leading-relaxed mb-5 text-gray-600">
          Access your personal shopping experience 🛒
        </p>
        <form onSubmit={formik.handleSubmit}>
          {" "}
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-[#67595E] focus:ring-2 focus:ring-[#67595E] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <FormError>
              {formik.errors.email ? formik.errors.email : ""}
            </FormError>
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
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <FormError>
              {formik.errors.password ? formik.errors.password : ""}
            </FormError>
          </div>
          <Button
            variant="primary"
            className="flex justify-center text-lg uppercase tracking-wide"
          >
            Login
          </Button>
        </form>
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
