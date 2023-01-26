import Seo from "@/components/Seo";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Seo title="Home" />
      <h1>게임을 선택하세요</h1>
      <article className={styles.container}>
        <Link href="/idioms">사자성어</Link>
        <Link href="/words">영단어</Link>
      </article>
    </>
  );
}
