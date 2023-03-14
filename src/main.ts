/* eslint-disable @typescript-eslint/no-var-requires */
import { AppModule } from './app.module';
import * as express from 'express';
// eslint-disable-next-line @typescript-eslint/no-var-requires
import {
  ExpressAdapter,
  NestExpressApplication,
} from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core/nest-factory';

const server: express.Express = express();
export const createNestServer = async (expressInstance: express.Express) => {
  const adapter = new ExpressAdapter(expressInstance);
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    adapter,
    {},
  );
  app.enableCors();
  return app.init();
};
createNestServer(server)
  .then(() => console.log('Nest Ready'))
  .catch(() => console.error('Nest broken'));
// async function bootstrap() {
//   admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: "https://flyfar-ladies-b2c-30b6a-default-rtdb.asia-southeast1.firebasedatabase.app/"
//   });

//   const app = await NestFactory.create(AppModule,
//   new ExpressAdapter(server));
//   // eslint-disable-next-line @typescript-eslint/no-var-requires
//   await app.listen(3005);
// }
// bootstrap();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();




