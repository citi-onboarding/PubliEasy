import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Services {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    image: string

    @Column()
    name: string

    @Column()
    description: string

}

// CREAT TABLE services
// ALTER TABLE services INSERT COLUMN image
// ALTER TABLE services INSERT COLUMN name
// ALTER TABLE services INSERT COLUMN description