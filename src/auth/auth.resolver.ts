import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateUserDTO } from './dtos/create-user.dto';
import { AuthService } from './auth.service';
import { LoginDTO } from './dtos/login.dto';

@Resolver()
export class AuthResolver {
    public constructor(
        private service: AuthService,
    ) {}

    @Mutation(() => Boolean)
    async createUser(
        @Args("input") input: CreateUserDTO
    ) {
        return this.service.createUser(input);
    }

    @Mutation(() => String)
    async login(
        @Args("input") input: LoginDTO
    ) {
        return this.service.login(input);
    }
}
