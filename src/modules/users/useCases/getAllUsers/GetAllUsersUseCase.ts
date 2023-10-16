import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetAllUsersUseCase {
    async excute(): Promise<User[]> {
        const users = await prisma.user.findMany({
            orderBy: {
                name: "asc"
            },
            include: {
                movie_rent: {
                    select: {
                        movie: {
                            select: {
                                title: true,
                                release_date: true
                            }
                        }
                    }
                }
            }
        });

        return users
    }
}