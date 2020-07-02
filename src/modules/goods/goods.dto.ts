export class GoodsDto {
  readonly name: string
  readonly good_brief: string
  readonly good_desc: string
  readonly sort_order?: number
  readonly goods_number: number
  readonly sell_volume?: number
  readonly primary_pic_url: string
  readonly list_pic_url: string
  readonly is_delete?: boolean
  readonly is_new?: boolean
  readonly is_host?: boolean
}