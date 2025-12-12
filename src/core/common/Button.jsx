const Button = ({ children }) => {
  return (
    <button
      className="
        inline-block
        font-agrandir
        font-normal
        text-[20px]
        leading-[26px]
        text-[#021D59]
        
        py-[11px]
        px-[27px]
        
        border border-[#021D59]
        rounded-[16px]
        bg-transparent

        transition duration-300
        hover:bg-[#021D59]
        hover:text-white
      "
    >
      {children}
    </button>
  );
};

export default Button;

// font-family: "Agrandir", sans-serif;
// font-style: normal;
// font-weight: 400;
// font-size: 20px;
// line-height: 26px;
// color: #021D59;
// padding: 11px 27px;
