import Seo from "@/components/Seo";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Seo title="Home" />
      <article className={styles.article}>
        <Link href="/idioms">사자성어</Link>
        <Link href="/words">영단어</Link>
      </article>
    </>
  );
}
