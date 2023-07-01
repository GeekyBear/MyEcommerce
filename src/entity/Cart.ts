import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Cart {
    @PrimaryGeneratedColumn()
    id: number

    @Column("simple-array")
    items: string[]

    @Column()
    name: String
}