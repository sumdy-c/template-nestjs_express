import { ValidationError, ValidatorOptions } from 'class-validator';

/**
 * Настройка валидатора
 * https://docs.nestjs.com/techniques/validation
 */
export interface ValidationPipeOptions extends ValidatorOptions {
  transform?: boolean;
  disableErrorMessages?: boolean;
  exceptionFactory?: (errors: ValidationError[]) => any;
}

export const validationPipeOptions: ValidationPipeOptions = {
  enableDebugMessages: true,
  forbidNonWhitelisted: true,
  forbidUnknownValues: true,
  disableErrorMessages: false,
  stopAtFirstError: true,
};
