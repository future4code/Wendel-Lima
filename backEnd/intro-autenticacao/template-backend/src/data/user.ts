import { db } from './dataSetup';

const usersTable = "User"

export const createUser = async(
    id: string,
    email: string,
    password: string
):Promise<void> => {
    await db()
    .insert({
        id,
        email,
        password        
    })
    .into(usersTable)
};