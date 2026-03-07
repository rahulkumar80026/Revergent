const CompLogo = ({ className }) => (
  <a
    href="/"
    className={`flex-shrink-0 ${className}`}
    aria-label="Revergent Technologies"
  >
    <img
      src="/assets/company/logo.png"
      alt="Revergent Technologies Logo"
      // className="w-auto h-6 md:h-7 lg:h-14"
      loading="eager"
    />
  </a>
);
export default CompLogo;
