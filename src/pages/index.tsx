import { Inter } from "next/font/google";
import Post from "@/components/Post";
import data from "../data.json";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} px-2 py-4`}>
      {data.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </main>
  );
}
