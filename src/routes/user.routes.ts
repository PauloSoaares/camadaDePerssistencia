import { Router } from "express";
import { CreateUserConttoller } from "../modules/users/useCases/createUser/CreateUserController";
import { GetAllUsersController } from "../modules/users/useCases/getAllUsers/GetAllUsersContoller";

const creatUserController = new CreateUserConttoller();
const getAllUsersController = new GetAllUsersController();

const userRoutes = Router();

userRoutes.post("/", creatUserController.handle);
userRoutes.get("/", getAllUsersController.handle)

export { userRoutes };