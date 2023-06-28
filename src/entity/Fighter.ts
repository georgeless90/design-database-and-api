import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, BaseEntity, ManyToOne } from "typeorm";
import { Field, ObjectType } from "type-graphql";

import { Fight } from "./Fight";

@ObjectType()
@Entity()
export class Fighter extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id:number

    @Field()
    @Column()
    name: string

    @Field()
    @Column()
    lastName: string

    @Field()
    @Column()
    age: number

    @Field()
    @Column()
    gender: string 

    @Field()
    @Column()
    nacionality: string

    @Field()
    @Column()
    team: string 

    @Column()
    weightClass: string

    @Field()
    @UpdateDateColumn()
    updatedAt: Date

    @Field()
    @Column({ nullable: true })
    wins?: number

    @Field()
    @Column({ nullable: true })
    losses?: number 

    @Field()
    @Column({ nullable: true })
    knockouts?: number 

    @Field()
    @Column({ nullable: true })
    submissions?: number 

    @ManyToOne(() => Fight, (fight) => fight.fighters)
    fitght: Fight


    
}