const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS

export default {
    porta: 5000,
    dbUri: `mongodb+srv://${dbUser}:${dbPass}@cluster0.skapd78.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
    env: "desenvolvimento"
}