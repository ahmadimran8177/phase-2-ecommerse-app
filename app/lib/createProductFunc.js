"use server";
import { createProduct } from "@/app/dataRepository/queryFunc";
import { redirect } from "next/navigation";

export const createProductFunc = async (
  name,
  price,
  description,
  imageUrl,
  category,
  stock,
  sellerid
) => {
  const newProduct = await createProduct(
    name,
    price,
    description,
    imageUrl,
    category,
    stock,
    sellerid
  );
  redirect("/");
};
