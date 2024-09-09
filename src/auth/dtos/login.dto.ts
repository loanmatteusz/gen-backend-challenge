import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class LoginDTO {
    @Field(() => String)
    email: string;

    @Field(() => String)
    password: string;
}
