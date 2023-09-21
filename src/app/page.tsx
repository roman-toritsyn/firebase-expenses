"use client";
import React, { useState, useEffect } from "react";
import {
  collection,
  query,
  onSnapshot,
} from "firebase/firestore";
import { db } from "./firebase";
import AddItemForm from "@/components/AddItemForm/AddItemForm";
import { TItem } from "@/Types/TItem";
import Item from "@/components/Item/Item";
import TotalCount from "@/elements/TotalCount/TotalCount";

export default function Home() {
  const [items, setItems] = useState<TItem[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const q = query(collection(db, "items"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let itemsArr: TItem[] = [];

      querySnapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id } as TItem);
      });
      setItems(itemsArr);

      const calculateTotal = () => {
        const totalPrice = itemsArr.reduce(
          (sum, item) => sum + parseFloat(item.price),
          0,
        );
        setTotal(totalPrice);
      };
      calculateTotal();
      return () => unsubscribe();
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:p-24 p-4">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm ">
        <h1 className="text-4xl p-4 text-center">Expense Tracker</h1>
        <div className="bg-slate-800 p-4 rounded-lg">
          <AddItemForm />
          <ul>
            {items.map((item) => {
              console.log(item);
              return (
                <Item
                  name={item.name}
                  price={item.price}
                  id={item.id}
                  key={item.id}
                />
              );
            })}
          </ul>
          {items.length > 0 &&  <TotalCount total={total} />}
        </div>
      </div>
    </main>
  );
}
