import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
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
    </div>
  );
}
