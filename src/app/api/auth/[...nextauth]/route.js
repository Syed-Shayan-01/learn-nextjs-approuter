import connectDB from "@/db/connect"
import NextAuth from "next-auth"

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                await connectDB();
                const user = await Auth.findOne({ email: credentials.email });
                if (user && (await bcrypt.compare(credentials.password, user.password))) {
                    return user
                } else {
                    return null
                }
            }
        })
    ]
}

export default handler = NextAuth(authOptions);
export { handler as GET, handler as POST };