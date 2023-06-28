import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany } from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { Fight } from "./Fight";

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

    @OneToMany(() => Fight, (fight) => fight.event)
    fights: Fight[]

}