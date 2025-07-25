import dataHandling from '../../functions.js'

/**
 * @typedef {object} AdminData
 * @property {string} Username
 * @property {string} Password
 */


/** @returns {Promise<AdminData>} */
const GetAuthAdmin = async () => dataHandling.Read('Admin', "653771a500e8c26ad56ce70d");//"6465dba3d6f853951537ff18");

const UpdateAdminInfo = async (data) => {
    return dataHandling.Update("Admin", data, "653771a500e8c26ad56ce70d");
}


const FirstSetupAdminInfo = async () => {
    const AdminData = await GetAdminInfo();
    if (AdminData === null) {
        return dataHandling.Create("Admin", { Username: "Username", Password: "Password", Banners: [] }, "653771a500e8c26ad56ce70d");
    }
}


/**
 * @typedef {object} AdminInfoData
 * @property {string} Username
 * @property {string} Password
 * @property {{"ImageUrl" : string, "Link" : string,Active : boolean}[]} Banners
 * @property {{Name : string, ImageUrl : string}[]} HomeIcons
 */

/** @returns {Promise<AdminInfoData>} */
const GetAdminInfo = async () => dataHandling.Read('Admin', "653771a500e8c26ad56ce70d");//"6465dba3d6f853951537ff18");


export {
    GetAuthAdmin, UpdateAdminInfo, GetAdminInfo, FirstSetupAdminInfo
}