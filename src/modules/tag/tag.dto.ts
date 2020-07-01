import { Category } from "../category/category.entity"

export class TagDto {
  readonly name: string
  readonly category: Category
}