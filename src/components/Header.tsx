import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/Header.module.css";

export default function Header() {
  const { route } = useRouter();
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        {route !== "/" && (
          <>
            <Link href="/idioms">사자성어</Link>
            <Link href="/words">영단어</Link>
          </>
        )}
      </nav>
    </header>
  );
}
