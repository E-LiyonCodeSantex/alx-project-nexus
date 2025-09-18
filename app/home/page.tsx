import { useSession } from "next-auth/react";

export default function HomePage() {
  const { data: session } = useSession();
  if (!session) {
    return <p className="text-white">Please sign in to continue</p>;
  }
}
