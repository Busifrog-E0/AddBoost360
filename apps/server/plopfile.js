
export default function (plop) {
    const basePath = 'features/{{camelCase entity}}s';
    const joiTypes = ['string', 'number', 'boolean', 'array','object'];
    plop.setHelper('eq', function (a, b) {
        return a === b;
    });
    plop.setHelper('wrapBraces', function (value) {
        return `{${value}}`;
    });
    plop.setHelper('typeData', function (type) {
        switch (type) {
            case 'string':
                return '"example"';
            case 'number':
                return 5;
            case 'boolean':
                return true;
            case 'array':
                return '[]';
            case 'object':
                return '{}';
            default:
                return 'null';
        }
    });



    // Controller
    plop.setGenerator("generate", {
        description: "Generate full CRUD module for an entity",
        prompts: async (inquirer) => {
            const prompts = [];

            // Entity name
            const { entity } = await inquirer.prompt({
                type: "input",
                name: "entity",
                message: "Entity name (e.g., Employee):"
            });

            const fields = [];

            let addMore = true;
            while (addMore) {
                const { fieldName, fieldType } = await inquirer.prompt([
                    {
                        type: "input",
                        name: "fieldName",
                        message: "Field name:"
                    },
                    {
                        type: "list",
                        name: "fieldType",
                        message: "Select Joi type:",
                        choices: joiTypes
                    }
                ]);

                fields.push({ name: fieldName, type: fieldType });

                const { continueAdding } = await inquirer.prompt({
                    type: "confirm",
                    name: "continueAdding",
                    message: "Add another field?",
                    default: true
                });

                addMore = continueAdding;
            }

            return { entity, fields };
        },
        actions: [
            {
                type: "add",
                path: `${basePath}/{{camelCase entity}}s-controller.js`,
                templateFile: "common/plop-templates/controller.hbs"
            },
            {
                type: "add",
                path: `${basePath}/{{camelCase entity}}s-databaseController.js`,
                templateFile: "common/plop-templates/databaseController.hbs"
            },
            {
                type: "add",
                path: `${basePath}/{{camelCase entity}}s-validations.js`,
                templateFile: "common/plop-templates/validation.hbs"
            },
            {
                type: "add",
                path: `${basePath}/{{camelCase entity}}s-routes.js`,
                templateFile: "common/plop-templates/route.hbs"
            },
            {
                type: "add",
                path: "../../packages/validations/{{camelCase entity}}s-schema.js",
                templateFile: "common/plop-templates/schema.hbs"
            },
            {
                type: "append",
                path: "routes.js",
                pattern: /(\/\/\s*IMPORT ROUTES HERE)/gi,

                template: "import {{camelCase entity}}Routes from \"./features/{{camelCase entity}}/{{camelCase entity}}s-routes.js\";"
            },
            {
                type: "append",
                path: "routes.js",
                pattern: /(\/\/\s*USE ROUTES HERE)/gi,
                template: "router.use(\"/api\", {{camelCase entity}}Routes);"
            },
            {
                type: "append",
                path: "../../packages/validations/index.js",
                pattern: /(\/\/\s*EXPORTS\s*HERE)/gi,
                template: "export { {{pascalCase entity}}Schema } from './{{camelCase entity}}s-schema.js';"
            },
            {
                type: "append",
                path: "../../packages/validations/index.d.ts",
                pattern: /(\/\/\s*EXPORTS\s*HERE)/gi,
                template: [
                    "\/\/ {{pascalCase entity}}-related Schema",
                    "export const  {{pascalCase entity}}Schema  : Joi.ObjectSchema;",
                    ""
                ].join("\n")
            },
            {
                type: "add",
                path: `${basePath}/{{camelCase entity}}s-swaggerDocs.js`,
                templateFile: "common/plop-templates/swagger.hbs"
            },
            {
                type: "add",
                path: `${basePath}/{{camelCase entity}}Definitions.js`,
                templateFile: "common/plop-templates/definitions.hbs"
            },
            {
                type: "append",
                path: "swagger.js",
                pattern: /(\/\/\s*IMPORT DEFINITIONS HERE)/gi,
                template: "import {{camelCase entity}}Definitions from \"./features/{{camelCase entity}}/{{camelCase entity}}Definitions.js\";"
            },
            {
                type: "append",
                path: "swagger.js",
                pattern: /(\/\/\s*USE DEFINITIONS HERE)/gi,
                template: "        ...{{camelCase entity}}Definitions,"
            },
        ]
    });
}
