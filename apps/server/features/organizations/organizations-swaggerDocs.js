const get_Organization = async (req, res, next) => {
    // #swagger.tags = ['Organization']
    /* #swagger.responses[200] = {
                description: 'Organization Data',
                schema: {  $ref: '#/definitions/OrganizationDataArray' }
        } 
    */
    return next();
}
const get_Organization_OrganizationId = async (req, res, next) => {
    // #swagger.tags = ['Organization']
    /* #swagger.responses[200] = {
                description: 'Organization Data',
                schema: { $ref: '#/definitions/OrganizationData' }
        } 
    */
    return next();
}

const post_Organization = async (req, res, next) => {
    // #swagger.tags = ['Organization']
    /*  #swagger.parameters['body'] = {
              in: 'body',
              schema: { $ref: '#/definitions/OrganizationData' }
      }
  */
    return next();
}

const patch_Organization_OrganizationId = async (req, res, next) => {
    // #swagger.tags = ['Organization']
    /*  #swagger.parameters['body'] = {
                in: 'body',
                schema: { $ref: '#/definitions/OrganizationData' }
        }
*/

    return next();
};

const delete_Organization_OrganizationId = async (req, res, next) => {
    // #swagger.tags = ['Organization']

    return next();
};







export default {
    get_Organization_OrganizationId,
    get_Organization,
    post_Organization,
    patch_Organization_OrganizationId,
    delete_Organization_OrganizationId,
}