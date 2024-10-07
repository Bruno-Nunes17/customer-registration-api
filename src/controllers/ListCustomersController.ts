import { FastifyRequest, FastifyReply } from "fastify";
import { ListCustomersService } from "../services/listCustomersService";

class ListCustomersController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listCustomers = new ListCustomersService();

    const customer = await listCustomers.execute();
    reply.send(customer);
  }
}

export { ListCustomersController };
