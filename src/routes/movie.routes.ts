import { Router } from "express";
import { CreateMovieController } from "../modules/movies/useCases/createMovie/CreateMovieController";
import { CreateMovieRentController } from "../modules/movies/useCases/createMovie/createMovieRent/CreateMovieRentController";
import { GetMoviesByReleaseDateCrontroller } from "../modules/movies/useCases/getMoviesByReleaseDate/GetMoviesByReleaseDateController";


const createMovieController = new CreateMovieController();
const getMoviesByReleaseDateCrontroller = new GetMoviesByReleaseDateCrontroller();
const createMovieRentController = new CreateMovieRentController();

const movieRoutes = Router();

movieRoutes.post("/", createMovieController.handle);
movieRoutes.get("/release", getMoviesByReleaseDateCrontroller.handle);
movieRoutes.post("/rent", createMovieRentController.handle)

export { movieRoutes };