import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToOne, JoinColumn } from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { Fight } from "./Fight";


@ObjectType()
@Entity()
export class Ranking extends BaseEntity {

    @Field()
    @PrimaryGeneratedColumn()
    id:number

    @Field()
    @Column()
    winnerFighter: number

    @Field()
    @Column()
    losserFighter: number

    @OneToOne(() => Fight)
    @JoinColumn()
    fight: Fight
}