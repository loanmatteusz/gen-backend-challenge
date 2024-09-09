import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class MusicResponseDTO {
    @Field(() => String)
    title: string;

    @Field(() => String, { nullable: true })
    link?: string;
    
    @Field(() => ID)
    id: string;

    @Field(() => String)
    user_id: string;
}
