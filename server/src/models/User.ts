import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    // firstName: string

    @Column()
    // lastName: string
    number: string;

    @Column()
    // age: number
    email: string;

    @Column()
    // age: number
    message: string;

}
