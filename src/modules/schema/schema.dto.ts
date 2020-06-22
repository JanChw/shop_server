import { ApiProperty } from "@nestjs/swagger";
import { SchemaItem } from "../../commons/interfaces/schema_item";

// todo SchemaDto数据类型约束
export class SchemaDto {
    @ApiProperty({
      description: '模型名称',
      type: String
    })
    name: string
    @ApiProperty({
      description: '模型字段',
      default: [
        {
          label: 'email',
          info: {
            type: 'string',
            length: 30,
            nullable: false
          },
          isUnique: true
        }
      ]
    })
    columns: SchemaItem[]
}



