import { db } from './dataSetup';
import moment from 'moment';
import { usersTable } from './users';

const tasksTable = "ToDoListTasks";

export const createTask = async (
    title: string,
    description: string,
    limitDate: moment.Moment,
    creatorUserId: string
):Promise<void> => {
    const id = new Date().getTime();
    await db().insert({
        id,
        title,
        description,
        limit_date: limitDate.format("YYYY-MM-DD"),
        create_user_id: creatorUserId
    }).into(tasksTable)
};

export const getTaskById = async (id: string):Promise<any> =>{
 const result = await db().raw(`
    SELECT
        t.id as taskId,
        t.title,
        t.description,
        t.limit_date as limitDate,
        t.status,
        u.id as creatorUserId,
        u.nickname as creatorUserNickname
        FROM ${tasksTable} t
        LEFT JOIN ${usersTable} u ON u.id = t.creator_user_id
        WHERE t.id = '${id}'
    `)
    return result[0][0]
};