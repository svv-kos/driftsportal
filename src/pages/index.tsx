import styles from "./index.module.css";
import { Lenke } from "../components/Lenke";

const Startside = () => (
  <div>
    <h1 className={styles.tittel}>Driftsportal</h1>
    <ul className={styles.lenkeliste}>
      <Lenke tittel="Elrapp" lenke="http://elrapp.nois.no/byggherre/logon.aspx">
        Verktøy for elektronisk rapportering og oppfølging av driftsarbeid
      </Lenke>
      <Lenke tittel="Vegbilder" lenke="https://vegbilder.atlas.vegvesen.no">
        Kartbasert verktøy som viser bilder fra vegnettet
      </Lenke>
      <Lenke tittel="Vegvær" lenke="https://www.vegvesen.no/vegvar/kart">
        Verktøy for å se hvordan været er på vegnettet
      </Lenke>
      <Lenke tittel="Halo" lenke="https://halo.met.no/">
        Verktøy for å se hvordan været er i lufta
      </Lenke>
      <Lenke
        tittel="Vegkart"
        lenke="https://vegkart.atlas.vegvesen.no/#kartlag:geodata/@600000,7225000,4/splash:changelog"
      >
        Informasjon om veger og vegobjekter fra NVDB (Norges vegdatabank) vist på kart
      </Lenke>
      <Lenke tittel="Synergi" lenke="http://synergi.vegvesen.no:8107/synergi">
        Verktøy for innmelding og saksbehandling av uønskede hendelser (HMS)
      </Lenke>
      <Lenke tittel="MIME" lenke="https://sakarkiv.vegvesen.no/">
        Vegvesenet sitt arkivsystem
      </Lenke>
    </ul>
  </div>
);

export default Startside;
