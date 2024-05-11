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

export async function getOneUser(slug) {
  const res = await prisma.user.findUnique({
    where: {
      id: Number(slug),
    },
  });
  return res;
}
export const getUserWithEmail = async (username) => {
  const res = await prisma.user.findUnique({
    where: {
      email: username,
    },
  });
  return res;
};

export const getSearchProducts = async (search) => {
  const res = await prisma.product.findMany({
    where: {
      name: {
        contains: search,
        mode: "insensitive",
      },
    },
  });
  return res;
};
