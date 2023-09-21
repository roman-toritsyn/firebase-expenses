import { useFormik } from "formik";
import React from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/app/firebase";
import PrimaryButton from "@/elements/PrimaryButton/PrimaryButton";
import { validationSchema } from "@/constants/itemFormsValidation.schema";

const AddItemForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      await addDoc(collection(db, "items"), {
        ...values,
      });

      resetForm();
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="grid grid-cols-6 pb-6 items-center text-black relative"
    >
      <input
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="col-span-3 p-3 border"
        type="text"
        placeholder="Enter Item"
      />
      {formik.touched.name && formik.errors.name ? (
        <div className="text-red-600 absolute bottom-0 left-10">
          {formik.errors.name}
        </div>
      ) : null}
      <input
        name="price"
        value={formik.values.price}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="col-span-2 p-3 border mx-3"
        type="number"
        placeholder="Enter $"
      />
      {formik.touched.price && formik.errors.price ? (
        <div className="text-red-600  absolute bottom-0 right-10">
          {formik.errors.price}
        </div>
      ) : null}
      <PrimaryButton name="+" type="submit" />
    </form>
  );
};

export default AddItemForm;
