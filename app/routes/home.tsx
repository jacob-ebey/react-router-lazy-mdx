import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main>
      <ul>
        {Array(6000)
          .fill(null)
          .map((_, i) => (
            <li key={i}>
              <Link to={`/post/${i}`}>Post {i}</Link>
            </li>
          ))}
      </ul>
    </main>
  );
}
