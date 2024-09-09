import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { PrismaClient } from '@prisma/client';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { GqlJWTGuard } from './auth.guard';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: '12h',
      },
    }),
  ],
  providers: [
    AuthService,
    AuthResolver,
    GqlJWTGuard,
    PrismaClient,
  ],
  exports: [
    JwtModule,
  ]
})
export class AuthModule {}
