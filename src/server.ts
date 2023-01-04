import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";
// import helmet from "helmet";
import routes from "./routes";

import dotenv from "dotenv";

dotenv.config();
const { PORT, SERVER_URL, CLIENT_URL, SECOND_CLIENT_URL, SECOND_SERVER_URL } =
    process.env;

const corsOptions: cors.CorsOptions = {
    origin: [
        SERVER_URL as string,
        CLIENT_URL as string,
        SECOND_CLIENT_URL as string,
        SECOND_SERVER_URL as string
    ],
    credentials: true
};

const app = express();

app.use(morgan("dev"));

app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors(corsOptions));

// app.use(helmet());

app.get("/", (_req: express.Request, res: express.Response): void => {
    res.status(200).send("todos goals api");
});

app.use("/api", routes);

app.listen(PORT, (): void => {
    console.log(`server started at: ${SERVER_URL}`);
    console.log(`server at port: ${PORT}`);
    console.log(`server wait for requests from: ${CLIENT_URL}`);
});

export default app;
