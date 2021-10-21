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
        Vi er et team som skal utvikle verktøy for kontraktsoppfølging for å
        gjøre arbeidshverdagen til byggherrene i SVV enklere. For å få til det
        trenger vi å samle inn innsikt om hvordan hverdagen til byggherrer ser
        ut, og en av de mulighetene vi ser på er det å samle arbeidsverktøyene
        til byggherrer på ett sted. Vi hører gjerne tankene deres om hva som
        skal til for at et slikt verktøy kan være nyttig for dere! Send oss
        gjerne tilbakemelding om dette er nyttig (eller ikke!), vi tar imot ris,
        ros og ønsker på <a href="mailto:kos@vegvesen.no">kos@vegvesen.no</a>.
        Basert på tilbakemeldingene dere gir oss så vil siden forandre seg
        kontinuerlig:)
        <br />
        <br />
        Hilsen Nina (utvikler), Kamilla (designer), Siri (designer) og Martin
        (utvikler)
      </Infomelding>
    </div>
  </div>
);
