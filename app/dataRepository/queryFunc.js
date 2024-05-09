import prisma from "@/app/lib/prismaCLient";

export async function getAllProducts() {
  const res = await prisma.product.findMany();
  return res;
}

export async function getOneProduct(slug) {
  const res = await prisma.product.findUnique({
    where: {
      id: Number(slug),
    },
  });
  return res;
}
