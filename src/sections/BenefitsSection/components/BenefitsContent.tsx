export const BenefitsContent = () => {
  return (
    <div className="relative box-border caret-transparent max-w-screen-xl z-10 mx-auto px-4 py-16 md:px-8 md:py-24">
      <div className="box-border caret-transparent gap-x-8 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-8 mt-20 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
        <div className="items-center backdrop-blur-lg bg-white/30 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_30px_0px] box-border caret-transparent flex flex-col text-center border p-8 rounded-xl border-solid border-white/20">
          <div className="items-center bg-sky-800/10 box-border caret-transparent flex h-16 justify-center w-16 mb-6 rounded-full">
            <img
              src="https://c.animaapp.com/mk1flv6rHV7KCD/assets/icon-12.svg"
              alt="Icon"
              className="text-sky-800 box-border caret-transparent h-8 w-8"
            />
          </div>
          <h3 className="text-gray-900 text-xl font-semibold box-border caret-transparent leading-7 mb-3">
            Easy Installation
          </h3>
          <p className="text-gray-600 box-border caret-transparent">
            Quick and hassle-free setup process with guided onboarding by our
            technical team.
          </p>
        </div>
        <div className="items-center backdrop-blur-lg bg-white/30 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_30px_0px] box-border caret-transparent flex flex-col text-center border p-8 rounded-xl border-solid border-white/20">
          <div className="items-center bg-sky-800/10 box-border caret-transparent flex h-16 justify-center w-16 mb-6 rounded-full">
            <img
              src="https://c.animaapp.com/mk1flv6rHV7KCD/assets/icon-13.svg"
              alt="Icon"
              className="text-sky-800 box-border caret-transparent h-8 w-8"
            />
          </div>
          <h3 className="text-gray-900 text-xl font-semibold box-border caret-transparent leading-7 mb-3">
            Free Updates
          </h3>
          <p className="text-gray-600 box-border caret-transparent">
            Automatic software updates with new features and improvements at no
            additional cost.
          </p>
        </div>
        <div className="items-center backdrop-blur-lg bg-white/30 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_30px_0px] box-border caret-transparent flex flex-col text-center border p-8 rounded-xl border-solid border-white/20">
          <div className="items-center bg-sky-800/10 box-border caret-transparent flex h-16 justify-center w-16 mb-6 rounded-full">
            <img
              src="https://c.animaapp.com/mk1flv6rHV7KCD/assets/icon-14.svg"
              alt="Icon"
              className="text-sky-800 box-border caret-transparent h-8 w-8"
            />
          </div>
          <h3 className="text-gray-900 text-xl font-semibold box-border caret-transparent leading-7 mb-3">
            90-Day Guarantee
          </h3>
          <p className="text-gray-600 box-border caret-transparent">
            If you&#39;re not satisfied with our system within 90 days,
            we&#39;ll provide a full refund.
          </p>
        </div>
      </div>
    </div>
  );
};
