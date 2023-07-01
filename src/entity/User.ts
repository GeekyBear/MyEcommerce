import { Entity, ObjectIdColumn, ObjectId, Column } from "typeorm"
import { Name } from "./Name"

@Entity()
export class User {

    @ObjectIdColumn()
    id: ObjectId

    @Column(()=>Name)
    name: Name

    @Column()
    email: string

    @Column()
    password: string

    @Column("simple-array")
    tokens: string[]
}
