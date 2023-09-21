import { validationSchema } from "@/components/AddItemForm/validationSchema";
import { useFormik } from "formik";
import React from "react";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "@/app/firebase";
import PrimaryButton from "@/Elements/PrimaryButton/PrimaryButton";

type TUpdateItemForm = {
  itemName: string;
  itemPrice: string;
  itemId: string;
  hideUpdateForm: () => void;
};

const UpdateItemForm: React.FC<TUpdateItemForm> = ({
  itemName,
  itemPrice,
  itemId,
  hideUpdateForm,
}) => {
  const formik = useFormik({
    initialValues: {
      name: itemName,
      price: itemPrice,
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const itemDocRef = doc(db, "items", itemId);

      await updateDoc(itemDocRef, {
        ...values,
      });

      resetForm();
      hideUpdateForm();
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="grid grid-cols-6 pb-8 items-center text-black relative"
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
      <PrimaryButton name="Change" type="submit" />
    </form>
  );
};

export default UpdateItemForm;
