import { Module } from '@nestjs/common';
import { TestController } from './queries/test.controllers';
import { HttpModule } from '@nestjs/axios';

/**
 * Модуль для проксирования запросов
 */
@Module({
  imports: [HttpModule],
  controllers: [TestController],
})
export class TestModule {}
