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
        <PrimaryButton
          name="..."
          clickHandler={toggleIsUpdating}
          borderPosition="right"
        />
        <div className="p-4 w-full flex justify-between">
          <span className="capitalize">{name}</span>
          <span>${price}</span>
        </div>
        <button
          onClick={() => deleteItem(id)}
          className="ml-8 p-4 border-l-2 border-slate-900 hover:bg-slate-900 w-16"
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
