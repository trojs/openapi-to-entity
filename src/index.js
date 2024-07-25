/**
 * @typedef {import('openapi-types').OpenAPIV3.SchemaObject} SchemaObject
 * @typedef {import('openapi-types').OpenAPIV3.NonArraySchemaObjectType} NonArraySchemaObjectType
 */
/**
 * Find Type
 * @param {object} params
 * @param {NonArraySchemaObjectType} params.type
 * @returns {string}
 */
const findType = ({ type }) => {
    if (type === 'number') {
        return 'int';
    }

    if (type === 'object') {
        return 'json';
    }

    return 'varchar';
};

/**
 * OpenAPI to Entity
 * @param {object} params
 * @param {SchemaObject} params.openapiSchema
 * @returns {object}
 */
export default ({ openapiSchema }) =>
    Object.fromEntries(
        Object.entries(openapiSchema.properties).map(([key, value]) => {
            const newValue = {
                type: findType({ type: value.type }),
            };
            return [key, newValue];
        })
    );
