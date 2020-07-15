import dotenv from 'dotenv';
import express from 'express';
import { createUserEndpoint, getUserByIdEndpoint, updateUserEndpoint } from './endpoints/users';
import { createTaskEndpoint, getTaskByIdEndpoint } from './endpoints/tasks'

dotenv.config();

const app = express();

app.use(express.json());

app.post('/user', createUserEndpoint);
app.get('/user/:id', getUserByIdEndpoint);
app.put('/user/edit', updateUserEndpoint);

app.put('/task', createTaskEndpoint);
app.get('/task/:id', getTaskByIdEndpoint);


const server = app.listen('3000', () =>{
    if (server) {
        console.log('Server running on http://localhost:3000')
    } else {
        console.log('Failuure on running server')
    }
});

