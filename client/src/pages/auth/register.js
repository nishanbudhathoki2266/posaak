import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import FormError from "@/components/FormError";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "@/utils/api";
import { setDetails } from "@/redux/reducerSlices/userSlice";
import { toast } from "react-hot-toast";

function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  async function handleRegister(values) {
    setIsLoading(true);
    const response = await register({
      name: values.fullName,
      email: values.email,
      password: values.password,
      passwordConfirm: values.passwordConfirm,
    });

    setIsLoading(false);
    if (response.status === "success") {
      dispatch(setDetails(response));
      router.push("/");
      toast.success("Registered successfully! Welcome.");
    } else {
      toast.error(response.message);
    }
  }

  // Schema
  const RegisterSchema = Yup.object().shape({
    fullName: Yup.string().required("Please enter your full name!"),
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters!"),
    passwordConfirm: Yup.string()
      .required("You must confirm your password!")
      .oneOf([Yup.ref("password")], "Both passwords must match!"),
  });

  return (
    <section className="text-gray-600 h-auto px-5 py-16">
      <div className="bg-white flex flex-col mx-auto md:w-3/4 lg:w-1/2 w-full p-8">
        <Heading>Sign Up</Heading>
        <p className="leading-relaxed mb-5 text-gray-600">
          Register and unlock a world of endless fashion possibilities 👗🧥
        </p>
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            password: "",
            passwordConfirm: "",
          }}
          validationSchema={RegisterSchema}
          onSubmit={async (values) => {
            handleRegister(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Full Name
                </label>
                <Field
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="w-full bg-white rounded border border-gray-300 focus:border-[#67595E] focus:ring-2 focus:ring-[#67595E] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <FormError>
                  {errors.fullName && touched.fullName ? errors.fullName : ""}
                </FormError>
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <Field
                  type="email"
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
              <div className="relative mb-4">
                <label
                  htmlFor="passwordConfirm"
                  className="leading-7 text-sm text-gray-600"
                >
                  Confirm Password
                </label>
                <Field
                  type="password"
                  id="passwordConfirm"
                  name="passwordConfirm"
                  className="w-full bg-white rounded border border-gray-300 focus:border-[#67595E] focus:ring-2 focus:ring-[#67595E]  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <FormError>
                  {errors.passwordConfirm && touched.passwordConfirm
                    ? errors.passwordConfirm
                    : ""}
                </FormError>
              </div>
              <Button
                disabled={isLoading}
                type="submit"
                variant="primary"
                className="flex justify-center text-lg uppercase tracking-wide"
              >
                {isLoading ? "Registering..." : "Register"}
              </Button>
            </Form>
          )}
        </Formik>
        <p className="text-md text-gray-500 mt-3">
          Already have an account ?
          <Link href="/auth/login" className="text-[#67595E] underline">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}

export default RegisterPage;
