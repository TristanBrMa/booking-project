import PropTypes from "prop-types";

const Footer = ({ labyrintheToggle, mauvaisGoutToggle, zoomToggle }) => {
  return (
    <footer
      className={`" flex items-center justify-center text-primary w-full bg-secondary h-16 p-4 " ${
        labyrintheToggle && "animate-spin-slow"
      } ${
        mauvaisGoutToggle &&
        "bg-yellow-300 text-pink-200 rounded-full h-28 w-[56rem] "
      } ${zoomToggle && "text-custom h-fit"}`}
    >
      <aside>
        <p>Copyright © 2023 - All right reserved by What if ?</p>
      </aside>
    </footer>
  );
};

Footer.propTypes = {
  labyrintheToggle: PropTypes.bool.isRequired,
  mauvaisGoutToggle: PropTypes.bool.isRequired,
  zoomToggle: PropTypes.bool.isRequired,
};

export default Footer;
