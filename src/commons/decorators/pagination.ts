import { createParamDecorator } from '@nestjs/common'

export const Pagination = createParamDecorator((_, req) => {
  const { page, pageSize, type } = req.query
  const _page = Number(page || process.env.PAGE)
  const _pageSize = Number(pageSize || process.env.PAGESIZE)
  const _type = type > 0 ? 'DESC' : 'ASC'
  return {
    skip: (_page - 1) * _pageSize,
    take: _pageSize,
    type: _type
  }
})
