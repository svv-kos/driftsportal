import { ReactNode } from "react";
import styles from "./Panel.module.css";

interface PanelProps {
  tittel: string;
  children: ReactNode;
}

export const Panel = ({ tittel, children }: PanelProps) => (
  <article className={styles.panel}>
    <div className={styles.header_wrapper}>
      <h1 className={styles.header}>{tittel}</h1>
    </div>
    <section className={styles.content_wrapper}>{children}</section>
  </article>
);
