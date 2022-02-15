import styles from "./Startside.module.css";
import { Panel } from "../components/panel/Panel";

export const Startside = () => (
  <main>
    <aside className={styles.informasjonspanel}>
      <Panel tittel="Vi har flyttet">
        <div className={styles.panelinnhold}>
          <section>
            <p>
              Vegdriftsportalen har ny url:{" "}
              <a href="https://driftsportal.atlas.vegvesen.no/">
                driftsportal.atlas.vegvesen.no
              </a>
              .
            </p>
            <p>Videre oppdateringer vil skje her, så bokmerk gjerne denne.</p>
            <p>
              Denne vil også snart kunne legges til på "Min side" under{" "}
              <a href="https://intranett.vegvesen.no/systemsider/rediger-mitt-arbeid//MyWork/">
                "Mine programmer og tjenester"
              </a>{" "}
              på intranett.
            </p>
          </section>
        </div>
      </Panel>
    </aside>
  </main>
);
