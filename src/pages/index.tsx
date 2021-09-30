import styles from "./index.module.css";
import { Lenke } from "../components/Lenke";

const Startside = () => (
  <div>
    <h1 className={styles.tittel}>Driftsportal</h1>
    <ul className={styles.lenkeliste}>
      <Lenke tittel="Verktøy" lenke="http://localhost">
        Her kan du finne no info
      </Lenke>
      <Lenke tittel="Verktøy med et ganske langt navn" lenke="http://localhost">
        En tekst som beskriver verktøy med ganske langt navn ved å bruke ganske
        mange ord slik at man må tenke på wrapping.
      </Lenke>
    </ul>
  </div>
);

export default Startside;
