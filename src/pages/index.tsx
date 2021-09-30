import styles from "./index.module.css";
import { Lenke } from "../components/Lenke";

const Startside = () => (
  <div>
    <h1 className={styles.tittel}>Driftsportal</h1>
    <ul className={styles.lenkeliste}>
      <Lenke tittel="Verktøy" lenke="#">
        Her kan du finne no info
      </Lenke>
      <Lenke tittel="Verktøy" lenke="#">
        Her kan du finne no info
      </Lenke>
      <Lenke
        tittel="Om koronautbruddet og en overksrift som bli lang"
        lenke="#"
      >
        En tekst som beskriver verktøy med ganske langt navn ved å bruke ganske
        mange ord.
      </Lenke>
    </ul>
  </div>
);

export default Startside;
