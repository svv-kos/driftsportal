import styles from "./Lenke.module.css";

interface LenkeProps {
  tittel: string;
  lenke: string;
  children: string;
}

export const Lenke = ({ tittel, lenke, children }: LenkeProps) => (
  <li className={styles.lenke}>
    <a href={lenke} className={styles.link}>
      {tittel}
    </a>
    <p className={styles.tekst}>{children}</p>
  </li>
);
