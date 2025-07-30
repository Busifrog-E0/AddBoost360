const get_Portfolio = async (req, res, next) => {
    // #swagger.tags = ['Portfolio']
    /* #swagger.responses[200] = {
                description: 'Portfolio Data',
                schema: {  $ref: '#/definitions/PortfolioDataArray' }
        } 
    */
    return next();
}
const get_Portfolio_PortfolioId = async (req, res, next) => {
    // #swagger.tags = ['Portfolio']
    /* #swagger.responses[200] = {
                description: 'Portfolio Data',
                schema: { $ref: '#/definitions/PortfolioData' }
        } 
    */
    return next();
}

const post_Portfolio = async (req, res, next) => {
    // #swagger.tags = ['Portfolio']
    /*  #swagger.parameters['body'] = {
              in: 'body',
              schema: { $ref: '#/definitions/PortfolioData' }
      }
  */
    return next();
}

const patch_Portfolio_PortfolioId = async (req, res, next) => {
    // #swagger.tags = ['Portfolio']
    /*  #swagger.parameters['body'] = {
                in: 'body',
                schema: { $ref: '#/definitions/PortfolioData' }
        }
*/

    return next();
};

const delete_Portfolio_PortfolioId = async (req, res, next) => {
    // #swagger.tags = ['Portfolio']

    return next();
};







export default {
    get_Portfolio_PortfolioId,
    get_Portfolio,
    post_Portfolio,
    patch_Portfolio_PortfolioId,
    delete_Portfolio_PortfolioId,
}