import { createParamDecorator } from '@nestjs/common'

export const Pagination = createParamDecorator((_, req) => {
  const { currentPage, pageSize, type } = req.query
  const _currentPage = Number(currentPage || process.env.CURRENT_PAGE)
  const _pageSize = Number(pageSize || process.env.PAGE_SIZE)
  const _type = type > 0 ? 'DESC' : 'ASC'
  return {
    skip: (_currentPage - 1) * _pageSize,
    take: _pageSize,
    type: _type
  }
})
