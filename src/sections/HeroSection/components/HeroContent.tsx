export const HeroContent = () => {
  return (
    <div className="box-border caret-transparent max-w-screen-xl mx-auto px-4 py-16 md:px-8 md:py-24">
      <div className="items-center box-border caret-transparent gap-x-8 flex flex-col gap-y-8 md:gap-x-16 md:flex-row md:gap-y-16">
        <div className="box-border caret-transparent w-full md:w-6/12">
          <h1 className="text-gray-900 text-4xl font-bold box-border caret-transparent leading-[45px] mb-6 md:text-6xl md:leading-[60px]">
            <span className="relative text-4xl box-border caret-transparent inline-block leading-[45px] md:text-6xl md:leading-[60px]">
              Payments infrastructure
              <div className="absolute text-4xl bg-[linear-gradient(to_right,rgba(4,68,132,0.2),rgba(106,188,212,0.2))] box-border caret-transparent h-3 leading-[45px] -z-10 -bottom-2 inset-x-0 md:text-6xl md:leading-[60px]"></div>
            </span>
            for{" "}
            <span className="text-sky-800 text-4xl box-border caret-transparent leading-[45px] md:text-6xl md:leading-[60px]">
              businesses in Sri Lanka
            </span>
          </h1>
          <p className="text-gray-600 text-lg box-border caret-transparent leading-7 mb-8 md:text-xl">
            MyFlexiPOS provides a complete point-of-sale system to help Sri
            Lankan businesses process payments, manage inventory, and grow their
            revenue.
          </p>
          <div className="box-border caret-transparent gap-x-4 flex flex-wrap gap-y-4 mb-8">
            <button className="text-white text-sm font-medium items-center bg-sky-800 bg-[linear-gradient(to_right,rgb(4,68,132),rgba(4,68,132,0.9))] caret-transparent gap-x-2 flex h-11 justify-center leading-5 gap-y-2 text-center text-nowrap px-6 py-3 rounded-full hover:bg-sky-800/90 hover:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px]">
              Request Demo{" "}
              <img
                src="https://c.animaapp.com/mk1flv6rHV7KCD/assets/icon-2.svg"
                alt="Icon"
                className="box-border caret-transparent shrink-0 h-4 pointer-events-none text-nowrap w-4 ml-2"
              />
            </button>
            <button className="text-gray-800 text-sm font-medium items-center bg-white caret-transparent gap-x-2 flex h-11 justify-center leading-5 gap-y-2 text-center text-nowrap border border-gray-300 px-6 py-3 rounded-full border-solid hover:text-slate-900 hover:bg-gray-50 hover:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px]">
              Contact Sales
            </button>
          </div>
          <div className="text-gray-500 text-sm box-border caret-transparent gap-x-6 flex flex-wrap leading-5 gap-y-6">
            <div className="items-center box-border caret-transparent flex">
              <img
                src="https://c.animaapp.com/mk1flv6rHV7KCD/assets/icon-3.svg"
                alt="Icon"
                className="text-sky-800 box-border caret-transparent h-[18px] w-[18px] mr-2"
              />
              <span className="box-border caret-transparent block">
                Trusted by 10K customers
              </span>
            </div>
            <div className="items-center box-border caret-transparent flex">
              <img
                src="https://c.animaapp.com/mk1flv6rHV7KCD/assets/icon-3.svg"
                alt="Icon"
                className="text-sky-800 box-border caret-transparent h-[18px] w-[18px] mr-2"
              />
              <span className="box-border caret-transparent block">
                No credit card required
              </span>
            </div>
            <div className="items-center box-border caret-transparent flex">
              <img
                src="https://c.animaapp.com/mk1flv6rHV7KCD/assets/icon-3.svg"
                alt="Icon"
                className="text-sky-800 box-border caret-transparent h-[18px] w-[18px] mr-2"
              />
              <span className="box-border caret-transparent block">
                24/7 Support
              </span>
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent w-full md:w-6/12">
          <div className="relative box-border caret-transparent">
            <img
              src="https://c.animaapp.com/mk1flv6rHV7KCD/assets/hero-image.svg"
              alt="POS System Dashboard"
              className="box-border caret-transparent w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
