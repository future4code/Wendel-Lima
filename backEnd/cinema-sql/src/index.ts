import knex from 'knex';
import dotenv from 'dotenv';
import express, { Response, Request } from 'express';
import { AddressInfo } from "net";

dotenv.config()

const app = express()

app.use(express.json());

const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port:3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${3003}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });
  app.get("/actor", async (req: Request, res: Response) => {
    try {
      const count = await countActors(req.query.gender as string);
      res.status(200).send({
        quantity: count,
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

  const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
      // Só colocamos esse "as count" para ficar mais fácil de pegar
      // o valor no resultado!
    const count = result[0][0].count;
    return count;
  };

// const countActors = async (gender: string): Promise<any> => {
//     const result = await connection.raw(`
//       SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
//     `);
//       // Só colocamos esse "as count" para ficar mais fácil de pegar
//       // o valor no resultado!
//     const count = result[0][0].count;
//     return count;
//   };