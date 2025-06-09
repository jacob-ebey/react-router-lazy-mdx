import { use } from "react";
import type { Route } from "./+types/post";

const posts = import.meta.glob("../posts/*.mdx");

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const promises = new Map<
  string,
  Promise<{ default: React.ComponentType<{}> }>
>();

export default function Post({ params: { slug } }: Route.ComponentProps) {
  const modKey = `../posts/${slug}.mdx`;
  let modPromise = promises.get(modKey);
  if (!modPromise) {
    modPromise = posts[modKey]() as Promise<{
      default: React.ComponentType<{}>;
    }>;
    promises.set(modKey, modPromise);
  }

  const mod = use(modPromise);
  const Component = mod.default;

  return (
    <main className="[&>h1]:text-2xl container mx-auto">
      <Component />
    </main>
  );
}
