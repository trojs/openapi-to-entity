import test from 'node:test'
import assert from 'node:assert'
import convertOpenapiToEntity from '../index.js'

test('convertOpenapiToEntity', async (t) => {
  await t.test('Test if we can convert openapi to an entity', async () => {
    const openapiSchema = {
      properties: {
        id: {
          type: 'number',
          example: 42
        },
        sku: {
          type: 'string',
          example: 'GZ-1'
        },
        date: {
          type: 'object',
          example: {
            date: '2023-02-01',
            date_qualification: 'M'
          }
        }
      }
    }

    const result = convertOpenapiToEntity({ openapiSchema })
    const expectedResult = {
      id: {
        type: 'int'
      },
      sku: {
        type: 'varchar'
      },
      date: {
        type: 'json'
      }
    }

    assert.deepEqual(result, expectedResult)
  })
})
