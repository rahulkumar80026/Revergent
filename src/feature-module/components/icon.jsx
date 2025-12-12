const Icon = ({ path, className = "w-6 h-6", style = {}, children: IconComponent }) => (
  <div className={className} style={style}>
    {IconComponent ? (
      <IconComponent className="w-full h-full" />
    ) : (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={path} />
      </svg>
    )}
  </div>
);

export default Icon;