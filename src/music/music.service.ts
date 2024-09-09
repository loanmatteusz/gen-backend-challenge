import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PostMusicDTO } from './dtos/post-music.dto';
import { UpdateMusicDTO } from './dtos/update-music.dto';

@Injectable()
export class MusicService {
    public constructor(
        private prisma: PrismaClient,
    ) {}

    public async listAllMusic(userId: string) {
        return this.prisma.music.findMany({ where: { user_id: userId } });
    }

    public async postMusic(user_id: string, postMusicDto: PostMusicDTO) {
        return this.prisma.music.create({ data: { ...postMusicDto, user_id } });
    }

    public async updateMusic(user_id: string, {id, ...updateMusicDto}: UpdateMusicDTO) {
        return this.prisma.music.update({ where: { id, user_id }, data: { ...updateMusicDto } });
    }

    public async deleteMusic(id: string, user_id: string) {
        await this.prisma.music.delete({ where: { id, user_id } });
    }
}
