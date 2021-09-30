import styles from "./Lenke.module.css";

interface LenkeProps {
  tittel: string;
  lenke: string;
  children: string;
}

export const Lenke = ({ tittel, lenke, children }: LenkeProps) => (
  <li className={styles.lenke}>
    <a href={lenke} className={styles.link}>
      <div className={styles.tittel_wrapper}>
        <h2 className={styles.tittel}>{tittel}</h2>
      </div>
      <p className={styles.tekst}>{children}</p>
    </a>
  </li>
);
