import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import styles from "@/styles/Layout.module.css";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
