import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Item {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: String
    
    @Column()
    description: String

    @Column()
    category: String

    @Column()
    price: number
}