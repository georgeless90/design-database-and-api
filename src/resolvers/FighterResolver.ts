import {
    Resolver, Query, Mutation, Arg, InputType, Field, Int
} from "type-graphql";
import { Fighter } from "../entity/Fighter";

@InputType()
class FighterUpdateInput {
    @Field(() => Int, { nullable: true })
    submissions: number

    @Field(() => Int, { nullable: true })
    knockouts: number

    @Field(() => Int, { nullable: true })
    losses: number

    @Field(() => Int, { nullable: true })
    wins: number

    @Field(() => String, { nullable: true })
    weightClass: string

    @Field(() => String, { nullable: true })
    team: string

    @Field(() => String, { nullable: true })
    nacionality: string

    @Field(() => String, { nullable: true })
    gender: string

    @Field(() => String, { nullable: true })
    age: number

    @Field(() => String, { nullable: true })
    lastName: string

    @Field(() => String, { nullable: true })
    name: string
}

@Resolver()
export class FighterResolver {

    @Mutation(() => Fighter)
    async createFighter(
        @Arg('name') name: string,
        @Arg('lastName') lastName: string,
        @Arg('age') age: number,
        @Arg('gender') gender: string,
        @Arg('nacionality') nacionality: string,
        @Arg('team') team: string,
        @Arg('weightClass') weightClass: string

    ) {
        const newFighter = Fighter.create({ name, lastName, age, gender, nacionality, team, weightClass })
        return await newFighter.save()
    }

    @Mutation(() => Boolean)
    async updateFighter(
        @Arg("id", () => Int) id: number,
        @Arg("fields", () => FighterUpdateInput) fields: FighterUpdateInput
    ) {
       
        await Fighter.update({ id }, fields)
        return true
    }

    @Mutation(() => Boolean)
    async deleteFighter(@Arg('id') id: number) {
        await Fighter.delete(id)
        return true
    }

    @Query(() => [Fighter])
    fighters() {
        return Fighter.find()
    }


}