import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { ApolloError } from 'apollo-server-express';
import { AppModule } from './app.module';
import { STATUS_CODES } from 'http';
import { QueryFailedExceptionFilter } from './filter/query-exception.filter';
import { MyLogger } from './logger/logger.service';
import { GqlExceptionFilter } from './filter/gql-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'verbose'],
  });
  const configService = app.get(ConfigService);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: false,
      // class-validator error를 catch할 수 있음
      exceptionFactory: (error) => {
        throw new ApolloError(
          `${error.map((i) => Object.values(i.constraints)[0])}`,
          STATUS_CODES[400],
          {
            statusCode: 400,
          },
        );
      },
    }),
  );
  app.useGlobalFilters(
    new QueryFailedExceptionFilter(),
    new GqlExceptionFilter(),
  );
  app.useLogger(new MyLogger());
  const port = configService.get('PORT');
  await app.listen(port).then(async () => {
    console.log(`port: ${port} server start!!`);
  });
}
bootstrap();
