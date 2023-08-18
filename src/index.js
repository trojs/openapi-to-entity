/**
 * @param {object} params
 * @param {string} params.type
 * @returns {string}
 */
const findType = ({ type }) => {
  if (type === 'number') {
    return 'int'
  }

  if (type === 'object') {
    return 'json'
  }

  return 'varchar'
}

/**
 * @param {object} params
 * @param {object} params.openapiSchema
 * @returns {object}
 */
export default ({ openapiSchema }) => Object.fromEntries(
  Object.entries(openapiSchema.properties)
    .map(
      ([key, value]) => {
        const newValue = {
          type: findType({ type: value.type })
        }
        return [key, newValue]
      }
    )
)
