import { FaArrowUp } from "react-icons/fa";
import ScrollToTop from "react-scroll-to-top";

const ScrollTopButton = () => {
  return (
    <ScrollToTop
      smooth
      className="mi-boton-scroll"
      component={<FaArrowUp style={{ color: "var(--color-secondary)" }} />}
    />
  );
};

export default ScrollTopButton;
