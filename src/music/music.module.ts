import { Module } from '@nestjs/common';
import { MusicService } from './music.service';
import { MusicResolver } from './music.resolver';
import { PrismaClient } from '@prisma/client';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  providers: [
    MusicService,
    MusicResolver,
    PrismaClient,
  ],
  imports: [
    AuthModule,
  ]
})
export class MusicModule {}
