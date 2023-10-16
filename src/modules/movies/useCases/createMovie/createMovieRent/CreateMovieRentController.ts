import { Request, Response } from "express";
import { CreateMovieRentUseCase } from "./CreateMovieRenteUseCase";


export class CreateMovieRentController {
    async handle(req: Request, res: Response) {
        const { movieId, userId } = req.body

        const createMovieRentUseCase = new CreateMovieRentUseCase();

        const result = await createMovieRentUseCase.execute({ movieId, userId });

        return res.status(201).send();
    }

}