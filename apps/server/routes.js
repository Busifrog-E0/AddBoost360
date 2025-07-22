import { Router } from 'express';

const router = Router();

// import testRoutes from "./test-routes.js";
// IMPORT ROUTES HERE

import serviceRoutes from "./features/services/services-routes.js";
import fileRoutes from "./features/files/files-routes.js";
import adminRoutes from "./features/admins/admins-routes.js";


// USE ROUTES HERE

router.use("/api", serviceRoutes);
router.use("/api", fileRoutes);
router.use("/api", adminRoutes);





export default router;