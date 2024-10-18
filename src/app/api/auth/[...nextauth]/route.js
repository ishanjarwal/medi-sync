import prisma from '@/config/prismaClient';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';



export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.OAUTH_CLIENT_ID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                // Find the user by email
                const user = await prisma.user.findUnique({
                    where: { email: credentials.email },
                });

                if (!user || !user.hashedPassword) {
                    throw new Error('No user found with this email');
                }

                // Compare the password with the hashed password
                const isPasswordValid = await bcrypt.compare(
                    credentials.password,
                    user.hashedPassword
                );

                if (!isPasswordValid) {
                    throw new Error('Incorrect password');
                }

                return user;
            },
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            // For Google authentication
            if (account.provider === 'google') {
                const existingUser = await prisma.user.findUnique({
                    where: { email: user.email },
                });

                if (!existingUser) {
                    await prisma.user.create({
                        data: {
                            name: user.name,
                            email: user.email,
                            image: user.image,
                            // emailVerified: new Date(),
                            role: 'PATIENT', // Default role
                        },
                    });
                }
            }

            return true;
        },
        async session({ session, token, user }) {
            const dbUser = await prisma.user.findUnique({
                where: { email: session.user.email },
            });

            if (dbUser) {
                session.user.id = dbUser.id;
                session.user.role = dbUser.role;
            }

            return session;
        },
    },
    pages: {
        signIn: '/auth/signin', // Custom sign-in page
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
    },
    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };