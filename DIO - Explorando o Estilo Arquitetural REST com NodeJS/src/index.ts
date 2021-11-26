import express, { NextFunction, Request, Response } from "express";
import statusRoute from "./routes/status.route";
import userRouter from "./routes/users.route";

const app = express();

//Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded( { extended: true } ));

//configurações de rotas
app.use(userRouter);
app.use(statusRoute);

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ foo: 'Sucesso Total! Vocês são demais!!!'});
});

app.listen(3000, () =>{
    console.log('Aplicativo executando na porta 3000');
});