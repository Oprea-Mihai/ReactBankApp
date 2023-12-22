import styles from "./style";
import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from "./components";
import { Parallax } from "@react-spring/parallax";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <Parallax className=" bg-black">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}></div>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </Parallax>
  </div>
);

export default App;
