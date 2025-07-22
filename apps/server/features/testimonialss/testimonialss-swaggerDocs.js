const get_Testimonials = async (req, res, next) => {
    // #swagger.tags = ['Testimonials']
    /* #swagger.responses[200] = {
                description: 'Testimonials Data',
                schema: {  $ref: '#/definitions/TestimonialsDataArray' }
        } 
    */
    return next();
}
const get_Testimonials_TestimonialsId = async (req, res, next) => {
    // #swagger.tags = ['Testimonials']
    /* #swagger.responses[200] = {
                description: 'Testimonials Data',
                schema: { $ref: '#/definitions/TestimonialsData' }
        } 
    */
    return next();
}

const post_Testimonials = async (req, res, next) => {
    // #swagger.tags = ['Testimonials']
    /*  #swagger.parameters['body'] = {
              in: 'body',
              schema: { $ref: '#/definitions/TestimonialsData' }
      }
  */
    return next();
}

const patch_Testimonials_TestimonialsId = async (req, res, next) => {
    // #swagger.tags = ['Testimonials']
    /*  #swagger.parameters['body'] = {
                in: 'body',
                schema: { $ref: '#/definitions/TestimonialsData' }
        }
*/

    return next();
};

const delete_Testimonials_TestimonialsId = async (req, res, next) => {
    // #swagger.tags = ['Testimonials']

    return next();
};







export default {
    get_Testimonials_TestimonialsId,
    get_Testimonials,
    post_Testimonials,
    patch_Testimonials_TestimonialsId,
    delete_Testimonials_TestimonialsId,
}