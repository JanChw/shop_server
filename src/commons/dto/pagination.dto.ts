export class PaginationDto {
  readonly skip: number
  readonly take: number
  readonly type: 'DESC' | 'ASC'
}
