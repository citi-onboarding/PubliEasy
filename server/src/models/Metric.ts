import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Metric {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    metric: string

    @Column()
    metricDescription: string

}

// @Entity()
// export class Metric {

//     @PrimaryGeneratedColumn()
//     id: number

//     @Column()
//     metric: string

//     @Column()
//     metricDescription: string

// }
// @Entity()
// export class Metric {

//     @PrimaryGeneratedColumn()
//     id: number

//     @Column()
//     metric: string

//     @Column()
//     metricDescription: string

// }
// @Entity()
// export class Metric {

//     @PrimaryGeneratedColumn()
//     id: number

//     @Column()
//     metric: string

//     @Column()
//     metricDescription: string

// }
// @Entity()
// export class Metric {

//     @PrimaryGeneratedColumn()
//     id: number

//     @Column()
//     metric: string

//     @Column()
//     metricDescription: string

// }
// @Entity()
// export class Metric {

//     @PrimaryGeneratedColumn()
//     id: number

//     @Column()
//     metric: string

//     @Column()
//     metricDescription: string

// }
// @Entity()
// export class Metric {

//     @PrimaryGeneratedColumn()
//     id: number

//     @Column()
//     metric: string

//     @Column()
//     metricDescription: string

// }