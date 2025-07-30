const get_CompanyLogo = async (req, res, next) => {
    // #swagger.tags = ['CompanyLogo']
    /* #swagger.responses[200] = {
                description: 'CompanyLogo Data',
                schema: {  $ref: '#/definitions/CompanyLogoDataArray' }
        } 
    */
    return next();
}
const get_CompanyLogo_CompanyLogoId = async (req, res, next) => {
    // #swagger.tags = ['CompanyLogo']
    /* #swagger.responses[200] = {
                description: 'CompanyLogo Data',
                schema: { $ref: '#/definitions/CompanyLogoData' }
        } 
    */
    return next();
}

const post_CompanyLogo = async (req, res, next) => {
    // #swagger.tags = ['CompanyLogo']
    /*  #swagger.parameters['body'] = {
              in: 'body',
              schema: { $ref: '#/definitions/CompanyLogoData' }
      }
  */
    return next();
}

const patch_CompanyLogo_CompanyLogoId = async (req, res, next) => {
    // #swagger.tags = ['CompanyLogo']
    /*  #swagger.parameters['body'] = {
                in: 'body',
                schema: { $ref: '#/definitions/CompanyLogoData' }
        }
*/

    return next();
};

const delete_CompanyLogo_CompanyLogoId = async (req, res, next) => {
    // #swagger.tags = ['CompanyLogo']

    return next();
};







export default {
    get_CompanyLogo_CompanyLogoId,
    get_CompanyLogo,
    post_CompanyLogo,
    patch_CompanyLogo_CompanyLogoId,
    delete_CompanyLogo_CompanyLogoId,
}