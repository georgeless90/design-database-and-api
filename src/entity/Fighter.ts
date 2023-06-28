import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity } from "typeorm";
import { Field, ObjectType } from "type-graphql";

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

    
}