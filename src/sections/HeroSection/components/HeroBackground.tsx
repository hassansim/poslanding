export const HeroBackground = () => {
  return (
    <div className="absolute box-border caret-transparent -z-10 overflow-hidden inset-0">
      <div className="absolute bg-[linear-gradient(to_right,rgb(239,246,255),rgb(255,255,255),rgb(239,246,255))] box-border caret-transparent inset-0"></div>
      <div className="absolute box-border caret-transparent h-[1000px] opacity-70 translate-x-[-50.0%] w-[1000px] rounded-full left-2/4 top-0"></div>
      <div className="absolute bg-sky-800/10 box-border caret-transparent blur-3xl h-96 w-96 rounded-full right-0 top-0"></div>
      <div className="absolute bg-blue-400/10 box-border caret-transparent blur-3xl h-96 w-96 rounded-full left-10 bottom-10"></div>
      <div className="absolute bg-[linear-gradient(to_right,rgba(4,68,132,0.1),rgba(106,188,212,0.1))] box-border caret-transparent blur-2xl h-64 w-64 rounded-full left-1/4 top-[33.3333%]"></div>
    </div>
  );
};
