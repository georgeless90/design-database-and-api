import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Event extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id:number

    @Field()
    @Column()
    name: string

    @Field()
    @Column()
    location: string

    @Field()
    @Column()
    date: String

}