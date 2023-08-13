import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string().required(),
  description: Yup.string().required(),
  price: Yup.number().required(),
  priceDiscount: Yup.number(),
});

const AddProductForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: "",
      priceDiscount: "",
    },
    validationSchema: schema,
    onSubmit: async ({ name, description, price, priceDiscount }) => {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description, price, priceDiscount }),
      };
      const res = await fetch(
        "http://localhost:8080/api/v1/products",
        requestOptions
      );
      const data = await res.json();
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <form
      className="h-[50dvh] flex items-center flex-col justify-center gap-2"
      onSubmit={formik.handleSubmit}
      method="POST"
    >
      <label htmlFor="name">Name</label>
      <input
        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-1/6 rounded-md sm:text-sm focus:ring-1"
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      {errors.name && touched.name && (
        <span className="text-red-700">{errors.name}</span>
      )}

      <label htmlFor="description">Description</label>
      <textarea
        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-1/6 rounded-md sm:text-sm focus:ring-1"
        id="description"
        name="description"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.description}
      />
      {errors.description && touched.description && (
        <span className="text-red-700">{errors.description}</span>
      )}

      <label htmlFor="price">Price</label>
      <input
        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-1/6 rounded-md sm:text-sm focus:ring-1"
        id="price"
        name="price"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.price}
      />
      {errors.price && touched.price && (
        <span className="text-red-700">{errors.price}</span>
      )}

      <label htmlFor="discount">Discount</label>
      <input
        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-1/6 rounded-md sm:text-sm focus:ring-1"
        id="discount"
        name="discount"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.discount}
      />
      {errors.discount && touched.discount && (
        <span className="text-red-700">{errors.discount}</span>
      )}

      <button
        type="submit"
        className="rounded bg-blue-500 text-white px-7 py-2 mt-2"
      >
        Submit
      </button>
    </form>
  );
};

export default AddProductForm;
