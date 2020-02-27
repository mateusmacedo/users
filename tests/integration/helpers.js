import supertest from 'supertest';
import chai from 'chai';
import app from '../../src/app';

global.request = supertest(app);
global.supertest = supertest;
global.expect = chai.expect;
