import { createParamDecorator } from '@nestjs/common';

export const Schema = createParamDecorator((_, req) => {
  const { name, columns } = req.body
  console.log(req.body)

  let schema = {
    name,
    columns: {},
    indices: Object.create({}),
    uniques: Object.create({})
  }
  columns.forEach(column => {
    console.log(column)
    const { label, info, isIndex, isUnique } = column
    schema.columns[label] = { ...info }
    if (isIndex) {
      if (!schema.indices['name']) { schema.indices['name'] = `${name}_idx_${label}` }
      if (!schema.indices.columns) { schema.indices.columns = [] }
      schema.indices.columns.push(label)
    }

    if (isUnique) {
      if (!schema.uniques['name']) { schema.uniques['name'] = `${name}_unique_${label}}`} 
      if (!schema.uniques.columns) { schema.uniques.columns = [] }
      schema.uniques.columns.push(label)
    }
  })

  return schema
})
