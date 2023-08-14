import Link from "next/link";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import FormError from "@/components/FormError";
import { login } from "@/utils/api";
import { useState } from "react";

function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(values) {
    setIsLoading(true);
    const response = await login({
      email: values.email,
      password: values.password,
    });
    setIsLoading(false);
    if (response.status === "success") {
      toast.success("Login successful!", {
        position: "top-right",
        className: "h-16 w-96",
      });
    } else {
      toast.error(response.message, {
        position: "top-right",
        className: "h-16 w-96",
      });
    }
  }

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email is required"),

    password: Yup.string().required("Password is required"),
  });

  // const formik = useFormik({
  //   initialValues: {
  //     email: "",
  //     password: "",
  //   },
  //   validationSchema: LoginSchema,
  // });
  return (
    <section className="text-gray-600 h-[70vh] flex items-center justify-center p-5">
      <div className="bg-white flex flex-col mx-auto md:w-3/4 lg:w-1/2 w-full p-8">
        <Heading>Sign in</Heading>
        <p className="leading-relaxed mb-5 text-gray-600">
          Access your personal shopping experience 🛒
        </p>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={async (values, { resetForm }) => {
            handleLogin(values);
            resetForm();
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
              <div className="relative mb-4">
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
                />
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
                Login
              </Button>
              <Toaster />
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
