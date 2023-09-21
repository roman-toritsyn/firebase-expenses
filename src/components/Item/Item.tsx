import React, { useState } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/app/firebase";
import { TItem } from "@/Types/TItem";
import UpdateItemForm from "@/components/UpdateItemForm/UpdateItemForm";
import PrimaryButton from "@/Elements/PrimaryButton/PrimaryButton";

const Item: React.FC<TItem> = ({ name, price, id }) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const toggleIsUpdating = () => setIsUpdating((isUpdating) => !isUpdating);
  const hideUpdateForm = () => setIsUpdating(false);

  const deleteItem = async (id: string) => {
    await deleteDoc(doc(db, "items", id));
  };

  return (
    <li>
      <div className="my-4 w-full flex justify-between bg-slate-950">
        <PrimaryButton name="..." clickHandler={toggleIsUpdating} />
        <div className="p-4 w-full flex justify-between border-l-2 border-r-2 border-slate-900">
          <span className="capitalize">{name}</span>
          <span>${price}</span>
        </div>
        <button
          aria-label="delete"
          onClick={() => deleteItem(id)}
          className="p-4 hover:bg-slate-900 w-16 text-white"
        >
          X
        </button>
      </div>
      {isUpdating ? (
        <UpdateItemForm
          itemName={name}
          itemPrice={price}
          itemId={id}
          hideUpdateForm={hideUpdateForm}
        />
      ) : null}
    </li>
  );
};

export default Item;
