import {
    Resolver, Query, Mutation, Arg, InputType, Field, Int
} from "type-graphql";
import { Ranking } from "../entity/Ranking";

@InputType()
class RankingUpdateInput {

    @Field(() => Number, { nullable: true })
    winnerFighter: number

    @Field(() => Number, { nullable: true })
    losserFighter: number
}

@Resolver()
export class RankingResolver {

    @Mutation(() => Ranking)
    async createRanking(
        @Arg('winnerFighter') winnerFighter: number,
        @Arg('losserFighter') losserFighter: number,
    ) {
        const newRanking = Ranking.create({ winnerFighter, losserFighter})
        return await newRanking.save()
    }

    @Mutation(() => Boolean)
    async updateRanking(
        @Arg("id", () => Int) id: number,
        @Arg("fields", () => RankingUpdateInput) fields: RankingUpdateInput
    ) {
       
        await Ranking.update({ id }, fields)
        return true
    }

    @Mutation(() => Boolean)
    async deleteRanking(@Arg('id') id: number) {
        await Ranking.delete(id)
        return true
    }

    @Query(() => [Ranking])
    Rankings() {
        return Ranking.find()
    }


}