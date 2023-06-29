import {
    Resolver, Query, Mutation, Arg, InputType, Field, Int
} from "type-graphql";
import { Fight } from "../entity/Fight";

@InputType()
class FightUpdateInput {

    @Field(() => String, { nullable: true })
    title: string

    @Field(() => String, { nullable: true })
    date: string

}

@Resolver()
export class FightResolver {

    @Mutation(() => Fight)
    async createFight(
        @Arg('title') title: string,
        @Arg('date') date: string,
    ) {
        const newFight = Fight.create({ title, date})
        return await newFight.save()
    }

    @Mutation(() => Boolean)
    async updateFight(
        @Arg("id", () => Int) id: number,
        @Arg("fields", () => FightUpdateInput) fields: FightUpdateInput
    ) {
       
        await Fight.update({ id }, fields)
        return true
    }

    @Mutation(() => Boolean)
    async deleteFight(@Arg('id') id: number) {
        await Fight.delete(id)
        return true
    }

    @Query(() => [Fight])
    Fights() {
        return Fight.find()
    }


}