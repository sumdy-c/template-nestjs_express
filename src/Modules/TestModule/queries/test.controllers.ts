import { HttpService } from '@nestjs/axios';
import { Controller } from '@nestjs/common';

/**
 * Тестовый контроллер
 */
@Controller('test')
export class TestController {
  constructor(private readonly httpService: HttpService) {}
}
