

const post_files_admin = (req, res, next) => {
    // #swagger.tags = ['Files']
    /* #swagger.parameters['body'] = {
                in: 'body',
                schema: { "FileName": "input.pdf","FileData":[123,456] }
       }
    */
    /* #swagger.responses[200] = {
                     description: 'Files Response',
                     schema: { "FileUrl":"https://saltmango.blr1.cdn.digitaloceanspaces.com/Employers/idName/input.pdf" }
             } 
     */

    return next();
}

export default {
    post_files_admin,
}