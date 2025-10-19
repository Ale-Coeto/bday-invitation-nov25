const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function createAdmin() {
  const email = process.argv[2];
  const password = process.argv[3];
  const name = process.argv[4] || "Admin";

  if (!email || !password) {
    console.log(
      "Usage: node scripts/create-admin.js <email> <password> [name]",
    );
    console.log(
      'Example: node scripts/create-admin.js admin@example.com mypassword "Admin User"',
    );
    process.exit(1);
  }

  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      console.log(`User with email ${email} already exists.`);
      process.exit(1);
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create the admin user
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        admin: true,
      },
    });

    console.log(`Admin user created successfully:`);
    console.log(`Email: ${user.email}`);
    console.log(`Name: ${user.name}`);
    console.log(`ID: ${user.id}`);
  } catch (error) {
    console.error("Error creating admin user:", error);
  } finally {
    await prisma.$disconnect();
  }
}

createAdmin();
