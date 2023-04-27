import Card from "@/components/Card";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} px-2 py-4`}>
      <Card
        post={{
          author: "@cristinacb",
          date: "4 minutes ago",
          content: `Restaurants in Ldn\n
        Can you recommend me some restaurants?`,
          likes: 0,
          comments: 0,
          saved: 0,
        }}
      />
    </main>
  );
}
