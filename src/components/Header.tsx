import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/Header.module.css";
import Image from "next/image";

export default function Header() {
  const { route } = useRouter();
  return (
    <header className={styles.header}>
      <Link className={styles.home} href="/">
        <Image
          src="./next.svg"
          alt="Home"
          width={100}
          height={20}
        />
      </Link>
      <nav className={styles.nav}>
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
