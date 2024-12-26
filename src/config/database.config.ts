export const databaseConfig = () => ({
    MONGO_URI: process.env.DATABASE_URI_LOCAL || 'mongodb://localhost:27017',
    MONGO_DB : process.env.DATABASE_DB_LOCAL || 'nest_tester/',
});