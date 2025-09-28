declare module "next-auth" {
  interface Session {
    accessToken?: string;
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      username?: string | null;
      id?: number;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    username?: string;
    email: string;
    id?: number;
  }
}
