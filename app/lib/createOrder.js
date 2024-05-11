"use server";
import { createOrder } from "@/app/dataRepository/queryFunc";
import { redirect } from "next/navigation";

export const createOrderFunc = async (productId, userId, quantity) => {
  const status = "processing";
  const createdOrder = await createOrder(productId, userId, quantity, status);
  redirect("/");
};
