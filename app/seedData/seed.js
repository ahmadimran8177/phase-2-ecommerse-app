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
    id: 1,
    email: "user1@example.com",
    password: "password1",
    name: "John Doe",
    shippingAddress: "123 Main St",
  },
  // Add 9 more users with unique emails and names
  {
    id: 2,
    email: "user10@example.com",
    password: "password10",
    name: "Alice Smith",
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
