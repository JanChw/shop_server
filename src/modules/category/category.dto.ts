import { Tag } from "../tag/tag.entity"

export class CategoryDto {
  readonly name: string
  readonly banner_url?: string
  readonly wap_banner_url?: string
  readonly image_url: string
  readonly desc: string
  readonly is_show: boolean
  readonly tags: Tag[]
}