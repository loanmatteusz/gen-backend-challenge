import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { compare, genSalt, hash } from 'bcryptjs';
import { CreateUserDTO } from './dtos/create-user.dto';
import { LoginDTO } from './dtos/login.dto';

@Injectable()
export class AuthService {
    public constructor(
        private prisma: PrismaClient,
        private jwtService: JwtService,
    ) {}

    public async createUser(createUserDto: CreateUserDTO) {
        const salt = await genSalt(8);
        const password_hashed = await hash(createUserDto.password, salt);
        await this.prisma.user.create({ data: {
            ...createUserDto,
            password: password_hashed,
        } });
        return true;
    }

    public async login(credentials: LoginDTO) {
        const user = await this.prisma.user.findFirst({ where: { email: credentials.email } });
        if (!user) throw new BadRequestException("Invalid Credentials!");
        if (!(await compare(credentials.password, user.password))) throw new BadRequestException("Invalid Credentials!");
        
        const token = this.jwtService.sign({
			id: user.id,
			email: user.email,
		});

		return token;
    }
}
