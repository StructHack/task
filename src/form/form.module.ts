import { Module } from '@nestjs/common';
import { FormController } from './controller/form/form.controller';
import { FormService } from './services/form/form.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from 'src/typeorm/entities/Task';

@Module({
  imports:[TypeOrmModule.forFeature([Task])],
  controllers: [FormController],
  providers: [FormService]
})
export class FormModule {}
