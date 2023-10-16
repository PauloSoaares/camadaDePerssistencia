import { AppError } from "../../../../../errors/AppError";
import { prisma } from "../../../../../prisma/client";
import { CreateMovieRentDTO } from "../../../dtos/CreatMovieRentDTO";

export class CreateMovieRentUseCase {
    async execute({ movieId, userId }: CreateMovieRentDTO): Promise<void> {

        // Verificando se o filme existe 
        const movieExists = await prisma.movie.findUnique({
            where: {
                id: movieId
            }
        });
        // Acusando erro
        if (!movieExists) {
            throw new AppError("Esse filme não existe!");
        }

        //verificando se o filme já nao foi alugado
        const movieAlredyRented = await prisma.movieRent.findFirst({
            where: {
                movieId
            }
        });

        if(movieAlredyRented) {
            throw new AppError("Esse filme ja foi alugado");
        }

        // Verificando se usuario existe 
        const userExists = await prisma.user.findUnique({
            where: {
                id: userId,
            },
        });

        if (!userExists) {
            throw new AppError("Esse usuario n existe!");
        }

        //Criando locação
        await prisma.movieRent.create({
            data: {
                movieId,
                userId
            }
        });
    }
}