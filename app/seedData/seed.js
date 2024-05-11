// To seed data run "node seed.js" in terminal

const { PrismaClient } = require("@prisma/client");
let prisma;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

const users = [
  {
    id: 4,
    email: "user4@example.com",
    password: "password4",
    name: "John Doe",
    shippingAddress: "123 Main St",
    userType: "seller",
    admin: "Yes",
  },
  // Add 9 more users with unique emails and names
  {
    id: 5,
    email: "user5@example.com",
    password: "password5",
    name: "Alice Smith",
    shippingAddress: "123234 Main St",
    userType: "buyer",
    admin: "No",
  },
  {
    id: 6,
    email: "user6@example.com",
    password: "password6",
    name: "Edward Doe",
    shippingAddress: "34563 Main St",
    userType: "buyer",
    admin: "No",
  },
  // Add 9 more users with unique emails and names
  {
    id: 5,
    email: "user5@example.com",
    password: "password5",
    name: "Alice Smith",
    shippingAddress: "123234 Main St",
    userType: "Seller",
    admin: "Yes",
  },
  // ...
];

const products = [
  {
    id: 1,
    name: "T-Shirt",
    price: 20.0,
    description: "A comfortable cotton T-Shirt",
    imageUrl:
      "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1687842433_3385347.jpg?format=webp&w=480&dpr=1.0",
    category: "Clothing",
    stock: 100,
  },
  // Add 9 more products with unique names, descriptions, and imageUrls
  {
    id: 2,
    name: "Coffee Mug",
    price: 15.0,
    description: "A ceramic mug for your morning coffee",
    imageUrl:
      "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1707314527_4431294.jpg?format=webp&w=480&dpr=1.0",
    category: "Kitchen",
    stock: 50,
  },
  // ...
];

const orders = [
  {
    userId: 1,
    productId: 1,
    quantity: 2,
    dateTime: new Date(),
    status: "Processing",
  },
  // Add 9 more orders with different userIds, productIds, quantities, and statuses
  {
    userId: 2,
    productId: 2,
    quantity: 1,
    dateTime: new Date(Date.now() - 1000 * 60 * 60 * 24),
    status: "Shipped",
  }, // Simulate an order from a day ago
  // ...
];

async function main() {
  console.log("Seeding data...");

  for (const user of users) {
    await prisma.user.createMany({ data: user, skipDuplicates: true });
  }

  for (const product of products) {
    await prisma.product.createMany({ data: product, skipDuplicates: true });
  }

  for (const order of orders) {
    await prisma.order.create({ data: order });
  }

  console.log("Seeding completed.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
