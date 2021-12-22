import { rest, setupWorker } from 'msw';

const worker = setupWorker(
  rest.post('https://fyve-test.herokuapp.com/api/meeting', (req, res, ctx) => {
    return res();
  }),
);

worker.start();
