import { Startside } from "../containers/Startside";
import Script from "next/script";

const Hjem = () => (
  <>
    <Script src="../utils/hotjar.js" />
    <Startside />
  </>
);

export default Hjem;
