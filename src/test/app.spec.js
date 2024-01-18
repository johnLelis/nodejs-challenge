const request = require('supertest');
const chai = require('chai');
const app = require('../app');
const UserSettings = require('../models/UserSettings'); // Adjust the path based on your project structure
const sinon = require('sinon');
const expect = chai.expect;

describe('User API Endpoints', () => {
  // Dummy user data for testing
  const dummyUser = {
    userId: 1,
    preferredTheme: 'light',
    resultsPerPage: 60,
    sendEmail: true,
  };

  beforeEach(() => {
    sinon.stub(UserSettings, 'findOne').resolves(dummyUser);
    sinon.stub(UserSettings, 'update').resolves([1, [dummyUser]]);
  });

  afterEach(() => {
    UserSettings.findOne.restore();
    UserSettings.update.restore();
  });

  // Test GET /user/:userId
  describe('GET /user/:userId', () => {
    it('should get user settings', done => {
      request(app)
        .get('/user/1/settings')
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.deep.equal(dummyUser);
          done();
        });
    });

    it('should handle errors when fetching user settings', done => {
      UserSettings.findOne.rejects(new Error('Database error'));

      request(app)
        .get('/user/1/settings')
        .expect(500)
        .end(err => {
          if (err) return done(err);
          done();
        });
    });
  });

  // Test PUT /user/:userId
  describe('PUT /user/:userId', () => {
    it('should update user settings', done => {
      const updatedUser = { ...dummyUser, resultsPerPage: 60 };

      request(app)
        .put('/user/1/settings')
        .send(updatedUser)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.deep.equal(updatedUser);
          done();
        });
    });

    it('should handle errors when updating user settings', done => {
      UserSettings.update.rejects(new Error('Database error'));

      request(app)
        .put('/user/1/settings')
        .send(dummyUser)
        .expect(500)
        .end(err => {
          if (err) return done(err);
          done();
        });
    });

    it('should handle invalid request body', done => {
      const invalidUser = { ...dummyUser, preferredTheme: 'invalidTheme' };

      request(app)
        .put('/user/1/settings')
        .send(invalidUser)
        .expect(400)
        .end(err => {
          if (err) return done(err);
          done();
        });
    });

    it('should handle user not found', done => {
      UserSettings.update.resolves([0, []]);

      request(app)
        .put('/user/1/settings')
        .send(dummyUser)
        .expect(404)
        .end(err => {
          if (err) return done(err);
          done();
        });
    });
  });
});

describe('Ping API Endpoint', () => {
  // Test GET /ping
  describe('GET /ping', () => {
    it('should get user settings', done => {
      request(app)
        .get('/ping')
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.have.property('timestamp');
          done();
        });
    });
  });
});
