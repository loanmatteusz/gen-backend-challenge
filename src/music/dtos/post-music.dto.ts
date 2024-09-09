import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class PostMusicDTO {
    @Field(() => String)
    title: string;

    @Field(() => String, { nullable: true })
    link?: string;
}
