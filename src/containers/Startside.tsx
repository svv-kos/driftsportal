import styles from "./Startside.module.css";
import { Lenke } from "../components/lenke/Lenke";
import { Panel } from "../components/panel/Panel";
import { Strek } from "../components/strek/Strek";

export const Startside = () => (
  <main>
    <h1 className={styles.tittel}>Driftsportal</h1>
    <div className={styles.innhold}>
      <ul className={styles.lenkeliste}>
        <Lenke
          tittel="Elrapp"
          lenke="http://elrapp.nois.no/byggherre/logon.aspx"
        >
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
        <Lenke tittel="ISY PØ" lenke="https://svv.isypo.net/">
          System for økonomistyring i vegprosjekt
        </Lenke>
      </ul>
      <aside className={styles.informasjonspanel}>
        <Panel tittel="Litt om KOS (kontraktsoppfølging)">
          <div className={styles.panelinnhold}>
            <section className={styles.paneltekst}>
              <p>
                Vi er et team som skal utvikle verktøy for kontraktsoppfølging
                for å gjøre arbeidshverdagen til byggherrene i SVV enklere. For
                å få til det trenger vi å samle inn innsikt om hvordan hverdagen
                til byggherrer ser ut, og en av de mulighetene vi ser på er det
                å <b>samle arbeidsverktøyene til byggherrer på ett sted</b>. Vi
                hører gjerne tankene deres om hva som skal til for at et slikt
                verktøy kan være nyttig for dere!
              </p>
              <p>
                Send oss gjerne tilbakemelding om dette er nyttig (eller ikke!),
                vi tar imot ris, ros og ønsker på{" "}
                <a href="mailto:kos@vegvesen.no">kos@vegvesen.no</a>.
              </p>
              <p>
                Basert på tilbakemeldingene dere gir oss så vil siden forandre
                seg kontinuerlig:)
              </p>
              <Strek />
              <p>
                Hilsen Nina (utvikler), Kamilla (designer), Siri (designer) og
                Martin (utvikler)
              </p>
            </section>
            <img
              className={styles.panelbilde}
              src="https://github.com/svv-kos/driftsportal/blob/main/src/public/teamkos.jpg?raw=true"
              alt="Team-Kos i trappa på Brynseng"
              width="100%"
            />
          </div>
        </Panel>
      </aside>
    </div>
  </main>
);
