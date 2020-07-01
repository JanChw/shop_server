import { createParamDecorator } from '@nestjs/common'

export const Pagination = createParamDecorator((_, req) => {
  const { page, pageSize } = req.query
  const _page = Number(page || process.env.PAGE)
  const _pageSize = Number(pageSize || process.env.PAGESIZE)

  return {
    skip: (_page - 1) * _pageSize,
    take: _pageSize
  }
})
