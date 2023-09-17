const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.todo.create({
    data: {
      label: "Vacuum",
      dateAdded: "2023-08-01",
      dateEnd: "2023-09-20",
      isChecked: true,
    },
  });

  await prisma.todo.create({
    data: {
      dateAdded: "2023-08-08",
      dateEnd: "2023-09-31",
      label: "Mop the floor",
      isChecked: false,
    },
  });

  await prisma.todo.create({
    data: {
      dateAdded: "2023-08-10",
      dateEnd: "2023-09-23",
      label: "Dust shelves",
      isChecked: false,
    },
  });

  await prisma.todo.create({
    data: {
      dateAdded: "2023-08-01",
      dateEnd: "2023-09-22",
      label: "Do the dishes",
      isChecked: false,
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
