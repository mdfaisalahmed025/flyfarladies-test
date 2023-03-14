import { userprofileModule } from './userprofile/userprofile.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Userprofile } from './userprofile/entities/userprofile.entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '',
    database: 'flyfar-ladies',
    synchronize: true,
    entities:[
      Userprofile
    ]
    }),
    userprofileModule
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
