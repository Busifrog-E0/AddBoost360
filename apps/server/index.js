import ENV from "./Env.js";

import cors from "cors";
import express, { json, urlencoded } from 'express';
import { readFile } from 'fs/promises';


import db from './db.config.js';
const PORT = ENV.PORT;
// const PORT = 443;



const app = express();

import router from "./routes.js";

app.use(cors({ origin: true }));
app.use(express.json({ "limit": "20mb" }));

app.use(json());
app.use(urlencoded({
    extended: true
}));


import swaggerUi from 'swagger-ui-express';
const raw = await readFile('./swaggerOutput.json', 'utf-8');
const swaggerFile = JSON.parse(raw);
import { GenerateToken } from "./features/auth/auth-controller.js";
import errorHandler from "./common/middleware/errorHandling-middleware.js";
import { requestLogger } from "./common/middleware/common.js";
// import { ConnectSocket } from "./features/socket/index.js";
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(requestLogger)
app.use(router);

app.use(errorHandler);

const expressServer = app.listen(PORT, async (err) => {
    await db.init();
    // await FirstSetupAdminInfo();

    console.log(`Server is up at localhost ${PORT}`);
    const CurrentUser = {
        // Role: 'Admin',
        // UserId: "Admin",
        Role: 'User',
        UserId: "669a2369525967c06f6bfc0a",
        RegistrationStatus: "",
        Subscription: null
    }
    GenerateToken(CurrentUser);
});

// ConnectSocket(expressServer);





