import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Fighter } from "../entity/Fighter";


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
        const newF = Fighter.create({ name, lastName, age, gender, nacionality, team, weightClass })
        return await newF.save()
    }

    @Mutation(() => Boolean)
    async updateFighter(
        @Arg('id') id: number,
        @Arg('name') name: string,
        @Arg('lastName') lastName: string,
        @Arg('age') age: number,
        @Arg('gender') gender: string,
        @Arg('nacionality') nacionality: string,
        @Arg('team') team: string,
        @Arg('weightClass') weightClass: string,
        @Arg('wins') wins: number,
        @Arg('losses') losses: number,
        @Arg('knockouts') knockouts: number,
        @Arg('submissions') submissions: number
    ) {
        let fields = {
            name, lastName, age, gender, nacionality, team, weightClass, wins, losses, knockouts, submissions 
        }

        await Fighter.update({id}, fields )

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