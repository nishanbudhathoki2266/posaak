import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import FormError from "@/components/FormError";
import { login } from "@/utils/api";
import { setDetails } from "@/redux/reducerSlices/userSlice";

function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  async function handleLogin(values) {
    setIsLoading(true);
    const response = await login({
      email: values.email,
      password: values.password,
    });

    if (response.status === "success") {
      dispatch(setDetails(response));
      router.push("/");
      toast.success("Login successful!");
    } else {
      toast.error(response.message);
    }
    setIsLoading(false);
  }

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email is required"),

    password: Yup.string().required("Password is required"),
  });

  return (
    <section className="text-gray-600 h-[70vh] flex items-center justify-center p-5">
      <div className="bg-white flex flex-col mx-auto md:w-3/4 lg:w-1/2 w-full p-8 relative ">
        <Heading>Sign in</Heading>
        <p className="leading-relaxed mb-5 text-gray-600">
          Access your personal shopping experience 🛒
        </p>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={async (values) => {
            handleLogin(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              {" "}
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <Field
                  type="text"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-[#67595E] focus:ring-2 focus:ring-[#67595E] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <FormError>
                  {errors.email && touched.email ? errors.email : ""}
                </FormError>
              </div>
              <div className="mb-4 relative bg-red-900">
                <label
                  htmlFor="password"
                  className="leading-7 text-sm text-gray-600"
                >
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="w-full bg-white rounded border border-gray-300 focus:border-[#67595E] focus:ring-2 focus:ring-[#67595E]  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                ></Field>
                <p className="bg-gray-200 py-1 px-3 w-auto inline right-3 top-8 absolute">
                  show
                </p>
                <FormError>
                  {errors.password && touched.password ? errors.password : ""}
                </FormError>
              </div>
              <Button
                disabled={isLoading}
                type="submit"
                variant="primary"
                className="flex justify-center text-lg uppercase tracking-wide"
              >
                {isLoading ? "PROCESSING..." : "Login"}
              </Button>
            </Form>
          )}
        </Formik>
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
