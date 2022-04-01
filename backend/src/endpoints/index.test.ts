import request from 'supertest';
import mongoose from "mongoose";
import { server, app } from '../index';

afterAll(async () => {
  await mongoose.disconnect();
  await server.close()
});

test('Should return average and total from /emoticon-average', async () => {
  await request(app)
    .get('/emoticon-average')
    .expect(200)
    .expect(({ body }) => {
      expect(body).toMatchObject({ average: 5.098196392785571, total: 499 });
    });
});

test('Should return nps groups from /nps-groups', async () => {
  await request(app)
    .get('/nps-groups')
    .expect(200)
    .expect(({ body }) => {
      expect(body).toMatchObject({ promoters: 95, detractors: 320, passives: 86, total: 501 });
    });
});

test('Should return nps score from /nps-score', async () => {
  await request(app)
    .get('/nps-score')
    .expect(200)
    .expect(({ body }) => {
      expect(body).toMatchObject({ score: -45 });
    });
});


