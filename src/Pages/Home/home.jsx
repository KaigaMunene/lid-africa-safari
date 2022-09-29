import { AboutUsComponent } from "../../Components/AboutUsComponent";
import Carousel from "../../Components/CarouselComponent";
import Navbar from "../../Components/Navbar";

const home = () => {
  return (
    <div>
      <section>
        <Navbar />
        <Carousel />
      </section>
      <section>
        <AboutUsComponent />
      </section>
    </div>
  );
};

export default home;
