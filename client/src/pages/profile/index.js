import Button from "@/components/Button";
import FormError from "@/components/FormError";
import Heading from "@/components/Heading";
import ProtectedPage from "@/components/ProtectedPage";
import {
  getToken,
  getUserDetails,
  updateDetails,
} from "@/redux/reducerSlices/userSlice";
import { updateMe } from "@/utils/api";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

function index() {
  const user = useSelector(getUserDetails);
  const token = useSelector(getToken);

  const dispatch = useDispatch();

  // To tracke if the user changes filed inputs -> so that a button is displayed
  const [isChanged, setIsChanged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const myHeaders = new Headers({
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  });

  function handleChanged() {
    setIsChanged(true);
  }

  async function updateMyDetails(values) {
    setIsLoading(true);

    try {
      const response = await updateMe(myHeaders, {
        name: values.name,
        email: values.email,
        address: values.address,
      });

      dispatch(updateDetails(response.data.user));
      toast.success("Updated successfully!");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
    setIsChanged(false);
  }

  return (
    <section className="max-w-[1440px] md:w-3/4 lg:w-1/2 mx-auto px-4 py-8">
      <ProtectedPage url="profile">
        <Heading position="center">Your profile</Heading>

        {/* Forms */}
        <Formik
          initialValues={{
            name: user.name,
            email: user.email,
            address: user.address,
          }}
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
                  disabled={isLoading}
                  type="submit"
                  variant="primary"
                  className="flex justify-center text-lg uppercase tracking-wide w-full mt-2"
                >
                  {isLoading ? "Updating..." : "Update Details"}
                </Button>
              )}
            </Form>
          )}
        </Formik>
      </ProtectedPage>
    </section>
  );
}

export default index;
