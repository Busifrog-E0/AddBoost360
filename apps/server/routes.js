import { Router } from 'express';

const router = Router();

// import testRoutes from "./test-routes.js";
// IMPORT ROUTES HERE
import serviceRoutes from "./features/service/services-routes.js";

// USE ROUTES HERE
router.use("/api", serviceRoutes);



export default router;