import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import { trpcRouter } from './trpc';
import cors from 'cors';

const ideas = [
  { nick: 'nick-1', name: 'Idea 1', description: 'Description of idea 1' },
  { nick: 'nick-2', name: 'Idea 2', description: 'Description of idea 2' },
  { nick: 'nick-3', name: 'Idea 3', description: 'Description of idea 3' },
  { nick: 'nick-4', name: 'Idea 4', description: 'Description of idea 4' },
  { nick: 'nick-5', name: 'Idea 5', description: 'Description of idea 5' },
];

const expressApp = express();
expressApp.use(cors());
expressApp.get('/ping', (req, res) => {
  res.send('pong');
});

expressApp.use('/trpc', trpcExpress.createExpressMiddleware({ router: trpcRouter }));

expressApp.listen(3000, () => {
  console.info('Listening at http://localhost:3000');
});
