const get_Service = async (req, res, next) => {
    // #swagger.tags = ['Service']
    /* #swagger.responses[200] = {
                description: 'Service Data',
                schema: {  $ref: '#/definitions/ServiceDataArray' }
        } 
    */
    return next();
}
const get_Service_ServiceId = async (req, res, next) => {
    // #swagger.tags = ['Service']
    /* #swagger.responses[200] = {
                description: 'Service Data',
                schema: { $ref: '#/definitions/ServiceData' }
        } 
    */
    return next();
}

const post_Service = async (req, res, next) => {
    // #swagger.tags = ['Service']
    /*  #swagger.parameters['body'] = {
              in: 'body',
              schema: { $ref: '#/definitions/ServiceData' }
      }
  */
    return next();
}

const patch_Service_ServiceId = async (req, res, next) => {
    // #swagger.tags = ['Service']
    /*  #swagger.parameters['body'] = {
                in: 'body',
                schema: { $ref: '#/definitions/ServiceData' }
        }
*/

    return next();
};

const delete_Service_ServiceId = async (req, res, next) => {
    // #swagger.tags = ['Service']

    return next();
};







export default {
    get_Service_ServiceId,
    get_Service,
    post_Service,
    patch_Service_ServiceId,
    delete_Service_ServiceId,
}