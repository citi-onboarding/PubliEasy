import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Metric {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    metric: string

    @Column()
    metricDescription: string

    @Column()
    metric2: string

    @Column()
    metricDescription2: string

    @Column()
    metric3: string

    @Column()
    metricDescription3: string

}
