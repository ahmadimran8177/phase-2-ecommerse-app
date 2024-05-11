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

export const createOrder = async (
  productId,
  userId,
  quantity,
  status,
  price
) => {
  const res = await prisma.order.create({
    data: {
      userId: userId,
      productId: productId,
      quantity: Number(quantity),
      status: status,
      price: price,
    },
  });
  return res;
};

export const getAllOrders = async (userId) => {
  const orders = await prisma.order.findMany({
    where: {
      userId: userId,
    },
  });
  return orders;
};

export const getUserProducts = async (sellerid) => {
  const res = await prisma.product.findMany({
    where: {
      sellerid: sellerid,
    },
  });
  return res;
};

export const createProduct = async (
  name,
  price,
  description,
  imageUrl,
  category,
  stock,
  sellerid
) => {
  const res = await prisma.product.create({
    data: {
      name: name,
      price: Number(price),
      description: description,
      imageUrl: imageUrl,
      category: category,
      stock: Number(stock),
      sellerid: sellerid,
    },
  });
  return res;
};
