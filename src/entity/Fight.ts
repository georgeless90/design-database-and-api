import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, OneToMany } from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { Event } from "./Event";
import { Fighter } from "./Fighter";

@ObjectType()
@Entity()
export class Fight extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id:number

    @Field()
    @Column()
    title: string

    @Field()
    @Column()
    date: string
    

    @OneToMany(() => Fighter, (fighter) => fighter.fitght) 
    fighters: Fighter[]

    @ManyToOne(() => Event, (event) => event.fights)
    event: Event


}