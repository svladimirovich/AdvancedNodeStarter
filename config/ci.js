module.exports = {
    googleClientID:
      '964808011168-29vqsooppd769hk90kjbjm5gld0glssb.apps.googleusercontent.com',
    googleClientSecret: 'KnH-rZC23z4fr2CN4ISK4srN',
    mongoURI: 'mongodb://127.0.0.1:27017/blog_ci',
    cookieKey: '123123123',
    redisHost: "127.0.0.1:6379",
    tests: {
      puppeteerOptions: {
        headless: false,
        args: ["--no-sandbox"]
      },
      targetHost: "http://localhost:3000"
    }
  };
  