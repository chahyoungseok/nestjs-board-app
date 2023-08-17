import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

/**
 * AppModule 이라는 Root Module이 있습니다.
 * 각각의 Module 안에는 Entity, Controller, Service, Repository, JWT 등 들이 들어있습니다.
 * 
 * 여기서 Module이란 @Module 데코레이터로 주석이 달린 클래스입니다.
 * 또한 각 응용 프로그램에는 하나이상의 모듈이 필요합니다.
 * 
 * App Module이 시작점이 됩니다.
 * 
 * Module은 기본적으로 Singleton 으로 동작합니다.
 * 
 * 개인적인 생각으론 도메인과 비슷한 개념이라고 생각됩니다.
 * 
 */

