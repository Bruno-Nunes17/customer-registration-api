import prismaClient from "../prisma";

interface createCustomerProps {
  name: string;
  email: string;
}

class CreateCustomerService {
  async execute({ name, email }: createCustomerProps) {
    if (!name || !email) {
      throw new Error("Prencha todos os campos!");
    }

    const customer = await prismaClient.customer.create({
      data: {
        name,
        email,
        status: true,
      },
    });

    return customer;
  }
}

export { CreateCustomerService };
