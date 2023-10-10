import Link from "next/link";
import { Container } from "@mantine/core";

export default function Home() {
  return (
    <Container>
      <h1>Testing new app directory (NextJS) + tanstack + react query</h1>
      <p>by FF</p>
      <p>
        <Link href="/hydration-stream-suspense">
          (recommended method): React Query With Streamed Hydration --- Bad for
          SEO
        </Link>
      </p>
      <p>
        <Link href="/initial-data">
          Prefetching using initial data -- Good for SEO
        </Link>
      </p>
      <p>
        <Link href="/hydration">
          Prefetching Using Hydration --- Good for SEO
        </Link>
      </p>
    </Container>
  );
}
