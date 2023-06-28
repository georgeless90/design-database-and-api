import {
    Resolver, Query, Mutation, Arg, InputType, Field, Int
} from "type-graphql";
import { Event } from "../entity/Event";

@InputType()
class EventUpdateInput {

    @Field(() => String, { nullable: true })
    name: string

    @Field(() => String, { nullable: true })
    location: string

    @Field(() => String, { nullable: true })
    date: String
}

@Resolver()
export class EventResolver {

    @Mutation(() => Event)
    async createEvent(
        @Arg('name') name: string,
        @Arg('location') location: string,
        @Arg('date') date: string,
    ) {
        const newEvent = Event.create({ name, location, date})
        return await newEvent.save()
    }

    @Mutation(() => Boolean)
    async updateEvent(
        @Arg("id", () => Int) id: number,
        @Arg("fields", () => EventUpdateInput) fields: EventUpdateInput
    ) {
       
        await Event.update({ id }, fields)
        return true
    }

    @Mutation(() => Boolean)
    async deleteEvent(@Arg('id') id: number) {
        await Event.delete(id)
        return true
    }

    @Query(() => [Event])
    events() {
        return Event.find()
    }


}