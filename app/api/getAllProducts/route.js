import { getAllProducts } from "@/app/dataRepository/queryFunc";

export async function Get(request) {
  const data = await getAllProducts();
  const res = await data.json();
  return Response.json({ res });
}
