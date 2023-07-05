import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormModule } from './form/form.module';
import { Task } from './typeorm/entities/Task';
import { ConfigModule } from '@nestjs/config/dist';
import { User } from './typeorm/entities/User';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule.forRoot(),TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    entities: [Task, User],
    synchronize: true
  }), FormModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
