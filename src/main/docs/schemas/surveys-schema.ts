export const surveysSchema = {
  type: 'object',
  properties: {
    type: 'array',
    items: {
      $ref: '#/schemas/survey'
    }
  }
}
