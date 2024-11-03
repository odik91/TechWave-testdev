const { env } = process as { env: { [key: string]: string } };

export const {
  PORT,
  MONGO_URI,
  MAIL_USER,
  MAIL_PASSWORD,
  MAIL_HOST,
  MAIL_PORT,
  MAIL_DONT_REPLY,
  JWT_SECRET,
  JWT_REFRESH_SECRET,
  ACCESS_TOKEN_LIFE,
  REFRESH_TOKEN_LIFE,
  MAIL_TO,
} = env;
