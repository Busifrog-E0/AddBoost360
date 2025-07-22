import ENV from "../../Env.js";


/**
 * @type {"Debug"|"Production"}
 */
// @ts-ignore
const ModeOfDevelopment = ENV.ModeOfDevelopment;

import e from 'express';

import { GetAdminInfo, GetAuthAdmin, UpdateAdminInfo } from './admins-databaseController.js';
import { GenerateToken } from '../auth/auth-controller.js';
/**
 * @typedef {import('./admins-databaseController.js').AdminData} AdminData 
 */

/**
 * @typedef {{"Token":string,"RefreshToken":string,"CurrentUser":{Role:string,UserId : string, RegistrationStatus : string, Subscription : null}}} TokenData
 */

/**
 * 
 * @param {e.Request} req 
 * @param {e.Response} res 
 */
const AuthAdmin = async (req, res) => {
    // #swagger.tags = ['Admin','Auth']
    const Username = req.body.Username.trim();
    const Password = req.body.Password.trim();

    let AdminData

    if (ModeOfDevelopment === "Debug") {
        AdminData = { "Username": "Username", "Password": "Password" };
    }
    else {
        AdminData = await GetAuthAdmin();
    }

    if (AdminData.Username !== Username || AdminData.Password !== Password) {
        /* #swagger.responses[400] = {
                description: 'Fail',
                schema: "Invalid Credentials"
            } 
        */
        return void res.status(400).json("Invalid Credentials");
    }

    const TokenData = await GenerateToken({ Role: "Admin", "UserId": "Admin" })
    TokenData.CurrentUser = {
        Role: "Admin",
        UserId: "Admin",
        RegistrationStatus: "",
        Subscription: null
    };
    /* #swagger.responses[200] = {
             description: 'Admin Login Data',
             schema: {$ref: '#/definitions/LoginData'}
     } 
    */
    return void res.json(TokenData);

}





export {
    AuthAdmin,
}