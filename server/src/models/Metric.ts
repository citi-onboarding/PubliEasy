import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Metric {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    metric: number

    @Column()
    metricDescription: string

}