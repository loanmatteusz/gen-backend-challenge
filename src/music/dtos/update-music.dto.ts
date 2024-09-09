import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateMusicDTO {
    @Field(() => String, { nullable: false })
    id: string;

    @Field(() => String, { nullable: true })
    title?: string;

    @Field(() => String, { nullable: true })
    link?: string;
}
