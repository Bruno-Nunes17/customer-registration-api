import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteCustomerService } from "../services/DeleteCustomerService";

class DeleteCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string };

    const deleteCustomer = new DeleteCustomerService();

    const customer = await deleteCustomer.execute({id});
    reply.send(customer);
  }
}

export { DeleteCustomerController };
