const get_Form = async (req, res, next) => {
    // #swagger.tags = ['Form']
    /* #swagger.responses[200] = {
                description: 'Form Data',
                schema: {  $ref: '#/definitions/FormDataArray' }
        } 
    */
    return next();
}
const get_Form_FormId = async (req, res, next) => {
    // #swagger.tags = ['Form']
    /* #swagger.responses[200] = {
                description: 'Form Data',
                schema: { $ref: '#/definitions/FormData' }
        } 
    */
    return next();
}

const post_Form = async (req, res, next) => {
    // #swagger.tags = ['Form']
    /*  #swagger.parameters['body'] = {
              in: 'body',
              schema: { $ref: '#/definitions/FormData' }
      }
  */
    return next();
}

const patch_Form_FormId = async (req, res, next) => {
    // #swagger.tags = ['Form']
    /*  #swagger.parameters['body'] = {
                in: 'body',
                schema: { $ref: '#/definitions/FormData' }
        }
*/

    return next();
};

const delete_Form_FormId = async (req, res, next) => {
    // #swagger.tags = ['Form']

    return next();
};







export default {
    get_Form_FormId,
    get_Form,
    post_Form,
    patch_Form_FormId,
    delete_Form_FormId,
}