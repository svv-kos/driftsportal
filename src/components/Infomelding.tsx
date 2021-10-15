import styles from "./Infomelding.module.css";

interface InfomeldingProps {
  children: string | Object;
}

export const Infomelding = ({ children }: InfomeldingProps) => (
  <div className={styles.infomelding}>
    <img
      src="https://www.vegvesen.no/UI/icons/CMS/message-standard.svg"
      alt="informasjonsikon"
    />
    <p className={styles.tekst}>{children}</p>
  </div>
);
