import styles from "./Startside.module.css";
import { Lenke } from "../components/Lenke";
import { Infomelding } from "../components/Infomelding";

export const Startside = () => (
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
        Informasjon om veger og vegobjekter fra NVDB (Norges vegdatabank) vist
        på kart
      </Lenke>
      <Lenke tittel="Synergi" lenke="http://synergi.vegvesen.no:8107/synergi">
        Verktøy for innmelding og saksbehandling av uønskede hendelser (HMS)
      </Lenke>
      <Lenke tittel="MIME" lenke="https://sakarkiv.vegvesen.no/">
        Vegvesenet sitt arkivsystem
      </Lenke>
    </ul>
    <div className={styles.infoseksjon}>
      <Infomelding>
        Dette er en side under utvikling av KOS-teamet som arbeider med
        kontraktsoppfølging for byggherrer. Ta gjerne kontakt med oss på mail{" "}
        <a href="mailto:kos@vegvesen.no">kos@vegvesen.no</a> dersom du har
        innspill til denne siden eller tanker om arbeidet generelt.
      </Infomelding>
    </div>
  </div>
);
