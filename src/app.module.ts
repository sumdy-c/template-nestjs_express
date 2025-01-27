import { Module } from '@nestjs/common';
import { TestModule } from './Modules/TestModule/Test.module';

@Module({
  imports: [TestModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
