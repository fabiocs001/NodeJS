import express, { NextFunction, Request, Response } from "express";
import statusRoute from "./routes/status.route";
import usersRoute from "./routes/users.route";
import errorHandler from "./middlewares/error-handler.middleware";
import authorizationRoute from "./routes/authorization.route";
import basicAuthenticationMiddleware from "./middlewares/basic-authentication.middleware";

const app = express();

//Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded( { extended: true } ));

//configurações de rotas
app.use(basicAuthenticationMiddleware);
app.use(usersRoute);
app.use(statusRoute);
app.use(authorizationRoute)

// Configuração dos Handlers de rrro
app.use(errorHandler);

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ foo: 'Sucesso Total! Vocês são demais!!!'});
});

app.listen(3000, () =>{
    console.log('Aplicativo executando na porta 3000');
});