import Button from "@/components/Button";
import FormError from "@/components/FormError";
import Heading from "@/components/Heading";
import ProtectedPage from "@/components/ProtectedPage";
import {
  getToken,
  getUserDetails,
  logOut,
  updateDetails,
} from "@/redux/reducerSlices/userSlice";
import { updateMe, updateMyPassword } from "@/utils/api";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

function index() {
  const user = useSelector(getUserDetails);
  const token = useSelector(getToken);

  const dispatch = useDispatch();
  const router = useRouter();

  // To tracke if the user changes filed inputs -> so that a button is displayed
  const [isChanged, setIsChanged] = useState(false);
  const [isUpdatingDetails, setIsUpdatingDetails] = useState(false);
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);

  // Update Details Schema
  const UpdateDetailsSchema = Yup.object().shape({
    name: Yup.string().required("Name is required!"),
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email is required"),

    address: Yup.string().required("Address is required!"),
  });

  // Update Password Schema
  const ChangePasswordSchema = Yup.object().shape({
    passwordCurrent: Yup.string().required(
      "You must enter your current password!"
    ),
    password: Yup.string()
      .required("Please enter a new password!")
      .min(8, "Password must be at least 8 characters!"),

    passwordConfirm: Yup.string()
      .required("You must confirm your password!")
      .oneOf([Yup.ref("password")], "Both passwords must match!"),
  });

  // Setting headers with token and content type
  const myHeaders = new Headers({
    "Content-Type": "application/json",
    Authorization: `Bearer ${token ? token : ""}`,
  });

  // Detect form value changes in update details
  function handleChanged() {
    setIsChanged(true);
  }

  // Calling api for updating details
  async function updateMyDetails(values) {
    setIsUpdatingDetails(true);
    const response = await updateMe(myHeaders, {
      name: values.name,
      email: values.email,
      address: values.address,
    });

    if (response.status === "success") {
      dispatch(updateDetails(response));
      toast.success("Updated successfully!");
    } else {
      toast.error(
        response.message.includes("E11000")
          ? "Looks like the email already exists"
          : response.message
      );
    }
    setIsUpdatingDetails(false);
    setIsChanged(false);
  }

  // Api call for updating password
  async function updatePassword(values) {
    setIsUpdatingPassword(true);

    const response = await updateMyPassword(myHeaders, {
      passwordCurrent: values.passwordCurrent,
      password: values.password,
      passwordConfirm: values.passwordConfirm,
    });

    console.log(response);

    if (!response.status === "fail") {
      dispatch(logOut());
      router.push("/auth/login");
      toast.success("Updated successfully! Please login again!");
    } else {
      toast.error(response.message || "Something went wrong!");
    }
    setIsUpdatingPassword(false);
  }

  return (
    <section className="max-w-[1440px] md:w-3/4 lg:w-1/2 mx-auto px-4 py-8">
      <ProtectedPage url="profile">
        <Heading position="center">Profile Details</Heading>

        {/* Details Forms */}
        <Formik
          initialValues={{
            name: user?.name,
            email: user?.email,
            address: user?.address,
          }}
          validationSchema={UpdateDetailsSchema}
          onSubmit={async (values) => {
            updateMyDetails(values);
          }}
          onCh
        >
          {({ errors, touched }) => (
            <Form onChange={handleChanged}>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Your Name
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-[#67595E] focus:ring-2 focus:ring-[#67595E] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <FormError>
                  {errors.name && touched.name ? errors.name : ""}
                </FormError>
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Your Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-[#67595E] focus:ring-2 focus:ring-[#67595E]  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <FormError>
                  {errors.email && touched.email ? errors.email : ""}
                </FormError>
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="address"
                  className="leading-7 text-sm text-gray-600"
                >
                  Your Address
                </label>
                <Field
                  type="text"
                  id="address"
                  name="address"
                  className="w-full bg-white rounded border border-gray-300 focus:border-[#67595E] focus:ring-2 focus:ring-[#67595E]  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <FormError>
                  {errors.address && touched.address ? errors.address : ""}
                </FormError>
              </div>
              {isChanged && (
                <Button
                  disabled={isUpdatingDetails}
                  type="submit"
                  variant="primary"
                  className="flex justify-center text-lg uppercase tracking-wide w-full mt-2"
                >
                  {isUpdatingDetails ? "Updating..." : "Update Details"}
                </Button>
              )}
            </Form>
          )}
        </Formik>

        <div className="mt-8">
          <Heading position="center">Update your password</Heading>

          {/* Change Password Forms */}
          {/* Details Forms */}
          <Formik
            initialValues={{
              passwordCurrent: "",
              password: "",
              passwordConfirm: "",
            }}
            validationSchema={ChangePasswordSchema}
            onSubmit={(values) => {
              updatePassword(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="relative mb-4">
                  <label
                    htmlFor="passwordCurrent"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Current Password
                  </label>
                  <Field
                    type="password"
                    id="passwordCurrent"
                    name="passwordCurrent"
                    className="w-full bg-white rounded border border-gray-300 focus:border-[#67595E] focus:ring-2 focus:ring-[#67595E] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <FormError>
                    {errors.passwordCurrent && touched.passwordCurrent
                      ? errors.passwordCurrent
                      : ""}
                  </FormError>
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="password"
                    className="leading-7 text-sm text-gray-600"
                  >
                    New Password
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
                  type="submit"
                  variant="primary"
                  className="flex justify-center text-lg uppercase tracking-wide w-full mt-2"
                >
                  Update
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </ProtectedPage>
    </section>
  );
}

export default index;
