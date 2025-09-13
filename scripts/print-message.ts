import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { AppService } from 'src/app.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  const appService = app.get(AppService);

  const message = appService.getHello();

  console.log(`✅ Message from script: ${message}`);

  await app.close();
}

void bootstrap();
