const get_Employee = async (req, res, next) => {
    // #swagger.tags = ['Employee']
    /* #swagger.responses[200] = {
                description: 'Employee Data',
                schema: {  $ref: '#/definitions/EmployeeDataArray' }
        } 
    */
    return next();
}
const get_Employee_EmployeeId = async (req, res, next) => {
    // #swagger.tags = ['Employee']
    /* #swagger.responses[200] = {
                description: 'Employee Data',
                schema: { $ref: '#/definitions/EmployeeData' }
        } 
    */
    return next();
}

const post_Employee = async (req, res, next) => {
    // #swagger.tags = ['Employee']
    /*  #swagger.parameters['body'] = {
              in: 'body',
              schema: { $ref: '#/definitions/EmployeeData' }
      }
  */
    return next();
}

const patch_Employee_EmployeeId = async (req, res, next) => {
    // #swagger.tags = ['Employee']
    /*  #swagger.parameters['body'] = {
                in: 'body',
                schema: { $ref: '#/definitions/EmployeeData' }
        }
*/

    return next();
};

const delete_Employee_EmployeeId = async (req, res, next) => {
    // #swagger.tags = ['Employee']

    return next();
};







export default {
    get_Employee_EmployeeId,
    get_Employee,
    post_Employee,
    patch_Employee_EmployeeId,
    delete_Employee_EmployeeId,
}