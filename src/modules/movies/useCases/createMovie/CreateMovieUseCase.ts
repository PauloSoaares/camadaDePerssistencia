import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateMovieDTO } from "../../dtos/CreatMovieDTO";
import { Movie } from "@prisma/client";

export class CreateMovieUseCase {
    async execute({ title, duration, release_date}: CreateMovieDTO): Promise<Movie> {
        // verificar se o filme exite
        const movieAlreadyExists = await prisma.movie.findUnique({
            where: {
                title
            }
        });

        if (movieAlreadyExists) { //erro caso o usuario exista 
            throw new AppError("Esse filme já exixte!")
        }

        // Cria filme
        const movie = await prisma.movie.create({
            data: {
                title,
                duration,
                release_date
            }
        });

        return movie;

    }
}