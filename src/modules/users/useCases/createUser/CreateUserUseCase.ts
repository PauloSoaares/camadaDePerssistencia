import { User } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreatUserDTO";

export class CreateUserUseCase {
    async execute({ name, email}: CreateUserDTO): Promise <User> {
        // verificar se o usuario exite
        const userAlreadyExists = await prisma.user.findUnique({
            where: {
                email
            }
        });

        if (userAlreadyExists) { //erro caso o usuario exista 
            throw new AppError("Esse usuario já exixte!")
        }

        const user = await prisma.user.create({
            data: {
                name,
                email
            }
        });

        return user;

    }
}