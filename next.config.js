require('dotenv').config()

const nextConfig = {
  env: {
    API_KEY: process.env.API_KEY,
    APP_ID: process.env.APP_ID,
    MESSAGING_SENDER_ID: process.env. MESSAGING_SENDER_ID,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    PROJECT_ID: process.env.PROJECT_ID,
    DATABASE_URL: process.env.DATABASE_URL,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN
  }
}

module.exports = nextConfig
