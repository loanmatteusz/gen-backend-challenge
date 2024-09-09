import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MusicService } from './music.service';
import { PostMusicDTO } from './dtos/post-music.dto';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { UseGuards } from '@nestjs/common';
import { GqlJWTGuard } from 'src/auth/auth.guard';
import { MusicResponseDTO } from './dtos/music-response.dto';
import { UpdateMusicDTO } from './dtos/update-music.dto';

@UseGuards(GqlJWTGuard)
@Resolver()
export class MusicResolver {
    public constructor(
        private service: MusicService,
    ) {}

    @Query(() => [MusicResponseDTO])
    async listAllMusic(
        @CurrentUser() user: any,
    ) {
        return this.service.listAllMusic(user.id);
    }

    @Mutation(() => MusicResponseDTO)
    async postMusic(
        @CurrentUser() user: any,
        @Args("input") input: PostMusicDTO,
    ) {
        return this.service.postMusic(user.id, input);
    }

    @Mutation(() => MusicResponseDTO)
    async updateMusic(
        @CurrentUser() user: any,
        @Args("input") input: UpdateMusicDTO,
    ) {
        return this.service.updateMusic(user.id, input);
    }

    @Mutation(() => Boolean)
    async deleteMusic(
        @CurrentUser() user: any,
        @Args("musicId") musicId: string,
    ) {
        await this.service.deleteMusic(musicId, user.id);
        return true;
    }
}
