const Button = ({ text }) => {
  return (
    <button className="px-3 py-1 rounded-md text-white bg-linear-to-r from-[#fb720994] via-[#ffe600d2] to-[#fb720994] [background-size:200%_auto] bg-[position:0%_center] hover:bg-[position:100%_center] transition-all duration-1000 ease-in-out">
      {text}
    </button>
  );
};

export default Button;
