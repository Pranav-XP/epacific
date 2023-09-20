const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Computer Science" },
        { name: "Business" },
        { name: "Law" },
        { name: "Engineering" },
        { name: "Environmental Science" },
        { name: "Economics" },
        { name: "Accounting" },
      ],
    });

    console.log("Success");
  } catch (error) {
    console.log("Error seeding database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();
