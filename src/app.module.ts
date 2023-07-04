import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormModule } from './form/form.module';
import { Task } from './typeorm/entities/Task';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'task01',
    entities: [Task],
    synchronize: true
  }), FormModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
