module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fdb64c818d76b8ab0b33d03d71f282bd'),
  },
});
