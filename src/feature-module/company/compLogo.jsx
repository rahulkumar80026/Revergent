import logo_1 from "../../assets/img/comp/logo.png";

const CompLogo = ({ className }) => (
  <a href="/" className={`flex-shrink-0 ${className}`}>
    <img
      src={logo_1}
      alt="Evergent Logo"
      className="w-auto h-6 md:h-7 lg:h-12"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src =
          "https://placehold.co/150x30/15BDFF/021D59?text=Evergent+Logo";
      }}
    />
  </a>
);
export default CompLogo;
