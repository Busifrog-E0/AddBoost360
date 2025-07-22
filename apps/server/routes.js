import { Router } from 'express';

const router = Router();

// import testRoutes from "./test-routes.js";
// IMPORT ROUTES HERE
import testimonialsRoutes from "./features/testimonialss/testimonialss-routes.js";
import companyLogoRoutes from "./features/companyLogos/companyLogos-routes.js";
import formRoutes from "./features/forms/forms-routes.js";
import organizationRoutes from "./features/organizations/organizations-routes.js";
import portfolioRoutes from "./features/portfolios/portfolios-routes.js";

import serviceRoutes from "./features/services/services-routes.js";
import fileRoutes from "./features/files/files-routes.js";
import adminRoutes from "./features/admins/admins-routes.js";


// USE ROUTES HERE
router.use("/api", testimonialsRoutes);
router.use("/api", companyLogoRoutes);
router.use("/api", formRoutes);
router.use("/api", organizationRoutes);
router.use("/api", portfolioRoutes);

router.use("/api", serviceRoutes);
router.use("/api", fileRoutes);
router.use("/api", adminRoutes);





export default router;