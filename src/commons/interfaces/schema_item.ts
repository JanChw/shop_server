import { SchemaItemInfo } from "./schema_item_info";

export interface SchemaItem {
  lable: string
  info: SchemaItemInfo
  isIndex?: boolean
  isUnique?: boolean
}