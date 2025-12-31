import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials) {
        console.log('AUTHORIZE CREDENTIALS:', credentials);

        const res = await fetch('https://dummyjson.com/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            username: credentials?.username,
            password: credentials?.password,
          }),
        });

        const user = await res.json();
        console.log('DUMMYJSON RESPONSE:', user);

        // FIX: check accessToken, not token
        if (res.ok && user.accessToken) {
          return {
            id: String(user.id),        // REQUIRED by NextAuth
            name: user.username,
            email: user.email ?? null,
            accessToken: user.accessToken,
          };
        }

        return null;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // FIX: read accessToken correctly
        token.accessToken = (user as any).accessToken;
      }
      return token;
    },

    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      return session;
    },
  },

  pages: {
    signIn: '/admin/login',
  },
});

export { handler as GET, handler as POST };
