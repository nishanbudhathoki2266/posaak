import Button from "@/components/Button";
import FormError from "@/components/FormError";
import Heading from "@/components/Heading";
import ProtectedPage from "@/components/ProtectedPage";
import {
  getToken,
  getUserDetails,
  setDetails,
  logOut,
} from "@/redux/reducerSlices/userSlice";
import { updateMe, updateMyPassword } from "@/utils/api";
import { Field, Form, Formik } from "formik";
import Image from "next/image";
import { Fragment, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

function index() {
  const user = useSelector(getUserDetails);
  const token = useSelector(getToken);

  const dispatch = useDispatch();

  // For file input
  const fileRef = useRef(null);

  // To tracke if the user changes filed inputs -> so that a button is displayed
  const [isChanged, setIsChanged] = useState(false);

  // Some loading states
  const [isUpdatingDetails, setIsUpdatingDetails] = useState(false);
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);
  const [isUpdatingImage, setIsUpdatingImage] = useState(false);

  // For file uploaded in avatar of user
  const [file, setFile] = useState(null);

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

  // Api call for updating user image
  async function updateImage(values) {
    const formData = new FormData();
    formData.append("image", values.file);
    setIsUpdatingImage(true);

    const response = await updateMe(
      { Authorization: `Bearer ${token ? token : ""}` },
      formData,
      true
    );

    if (response.status === "success") {
      dispatch(setDetails(response.data));
      toast.success("Image updated successfully!");
    } else {
      toast.error(response.message);
    }

    setIsUpdatingImage(false);
    setFile(null);
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
      dispatch(setDetails(response.data));
      toast.success("Details updated successfully!");
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

    if (response.status === "success") {
      dispatch(setDetails(response));
      toast.success("Password changed succesfully!");
    } else {
      toast.error(response.message || "Something went wrong!");
    }
    setIsUpdatingPassword(false);
    return response.status;
  }

  return (
    <ProtectedPage url="profile">
      <section className="max-w-[1440px] md:w-3/4 lg:w-1/2 mx-auto px-4 py-8">
        <Heading position="center">Profile Details</Heading>

        <div className="text-center p-2 rounded-full">
          <Image
            src={`http://localhost:8080/img/users/${user?.image}`}
            alt={`Avatar`}
            width={150}
            height={150}
            className="inline-flex object-cover mx-auto rounded-full border-2 shadow-lg cursor-pointer justify-center items-center"
            onClick={() => fileRef.current.click()}
          />

          <Formik
            initialValues={{
              file: null,
            }}
            onSubmit={(values) => updateImage(values)}
          >
            {({ values, setFieldValue }) => (
              <Form className="mt-4">
                <input
                  ref={fileRef}
                  name="file"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    setFieldValue("file", e.target.files[0]);
                    setFile(e.target.files[0].name);
                  }}
                  hidden
                />
                {file && (
                  <Fragment>
                    <p className="text-xs mb-2">{file}</p>
                    <button
                      type="submit"
                      className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                    >
                      Upload
                    </button>
                  </Fragment>
                )}
              </Form>
            )}
          </Formik>

          {/* Update details */}
        </div>
        {/* Details Forms */}
        <Formik
          initialValues={{
            name: user?.name,
            email: user?.email,
            address: user?.address,
          }}
          validationSchema={UpdateDetailsSchema}
          onSubmit={(values) => {
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
          <Formik
            initialValues={{
              passwordCurrent: "",
              password: "",
              passwordConfirm: "",
            }}
            validationSchema={ChangePasswordSchema}
            onSubmit={async (values, { resetForm }) => {
              const response = await updatePassword(values);
              if (response === "success") resetForm();
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
                    placeholder="********"
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
                    placeholder="********"
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
                    placeholder="********"
                    className="w-full bg-white rounded border border-gray-300 focus:border-[#67595E] focus:ring-2 focus:ring-[#67595E]  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <FormError>
                    {errors.passwordConfirm && touched.passwordConfirm
                      ? errors.passwordConfirm
                      : ""}
                  </FormError>
                </div>
                <Button
                  disabled={isUpdatingPassword}
                  type="submit"
                  variant="primary"
                  className="flex justify-center text-lg uppercase tracking-wide w-full mt-2"
                >
                  {isUpdatingPassword ? "Changing..." : "Change"}
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </ProtectedPage>
  );
}

export default index;
