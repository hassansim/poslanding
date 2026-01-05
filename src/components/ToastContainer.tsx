export const ToastContainer = () => {
  return (
    <div className="box-border caret-transparent">
      <div
        role="region"
        aria-label="Notifications (F8)"
        className="box-border caret-transparent pointer-events-none"
      >
        <ol className="fixed box-border caret-transparent flex flex-col-reverse list-none max-h-[1000px] max-w-none w-full z-[100] p-4 right-auto top-0 bottom-auto md:flex-col md:max-w-[420px] md:right-0 md:top-auto md:bottom-0"></ol>
      </div>
      <div className="box-border caret-transparent flex flex-col min-h-[1000px] overflow-hidden">
        <header className="fixed box-border caret-transparent w-full z-50 py-6 left-0 top-0">
          <div className="box-border caret-transparent max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="items-center box-border caret-transparent flex justify-between">
              <div className="items-center box-border caret-transparent flex">
                <a
                  href="/"
                  className="items-center box-border caret-transparent flex"
                >
                  <img
                    src="https://c.animaapp.com/mk1flv6rHV7KCD/assets/a2843b10-b345-45c2-b541-7ed9ea91643e.png"
                    alt="MyFlexiPOS Logo"
                    className="box-border caret-transparent h-10 max-w-full"
                  />
                </a>
              </div>
              <nav className="items-center box-border caret-transparent hidden min-h-0 min-w-0 md:flex md:min-h-[auto] md:min-w-[auto]">
                <a className="relative text-gray-700 box-border caret-transparent inline min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto] after:accent-auto after:bg-sky-800 after:box-border after:caret-transparent after:text-gray-700 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-0.5 after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:transform-none after:origin-[100%_100%] after:visible after:w-full after:border-separate after:left-0 after:bottom-0 after:font-inter after:md:scale-x-0 hover:text-sky-800">
                  Home
                </a>
                <a className="relative text-gray-700 box-border caret-transparent inline min-h-0 min-w-0 ml-8 md:block md:min-h-[auto] md:min-w-[auto] after:accent-auto after:bg-sky-800 after:box-border after:caret-transparent after:text-gray-700 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-0.5 after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:transform-none after:origin-[100%_100%] after:visible after:w-full after:border-separate after:left-0 after:bottom-0 after:font-inter after:md:scale-x-0 hover:text-sky-800">
                  Features
                </a>
                <a className="relative text-gray-700 box-border caret-transparent inline min-h-0 min-w-0 ml-8 md:block md:min-h-[auto] md:min-w-[auto] after:accent-auto after:bg-sky-800 after:box-border after:caret-transparent after:text-gray-700 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-0.5 after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:transform-none after:origin-[100%_100%] after:visible after:w-full after:border-separate after:left-0 after:bottom-0 after:font-inter after:md:scale-x-0 hover:text-sky-800">
                  Pricing
                </a>
                <a className="relative text-gray-700 box-border caret-transparent inline min-h-0 min-w-0 ml-8 md:block md:min-h-[auto] md:min-w-[auto] after:accent-auto after:bg-sky-800 after:box-border after:caret-transparent after:text-gray-700 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-0.5 after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:transform-none after:origin-[100%_100%] after:visible after:w-full after:border-separate after:left-0 after:bottom-0 after:font-inter after:md:scale-x-0 hover:text-sky-800">
                  POS Equipment
                </a>
                <a className="relative text-gray-700 box-border caret-transparent inline min-h-0 min-w-0 ml-8 md:block md:min-h-[auto] md:min-w-[auto] after:accent-auto after:bg-sky-800 after:box-border after:caret-transparent after:text-gray-700 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-0.5 after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:transform-none after:origin-[100%_100%] after:visible after:w-full after:border-separate after:left-0 after:bottom-0 after:font-inter after:md:scale-x-0 hover:text-sky-800">
                  Testimonials
                </a>
                <a
                  href="/faq"
                  className="relative text-gray-700 box-border caret-transparent inline min-h-0 min-w-0 ml-8 md:block md:min-h-[auto] md:min-w-[auto] after:accent-auto after:bg-sky-800 after:box-border after:caret-transparent after:text-gray-700 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-0.5 after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:transform-none after:origin-[100%_100%] after:visible after:w-full after:border-separate after:left-0 after:bottom-0 after:font-inter after:md:scale-x-0 hover:text-sky-800"
                >
                  FAQ
                </a>
                <a className="relative text-gray-700 box-border caret-transparent inline min-h-0 min-w-0 ml-8 md:block md:min-h-[auto] md:min-w-[auto] after:accent-auto after:bg-sky-800 after:box-border after:caret-transparent after:text-gray-700 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-0.5 after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:transform-none after:origin-[100%_100%] after:visible after:w-full after:border-separate after:left-0 after:bottom-0 after:font-inter after:md:scale-x-0 hover:text-sky-800">
                  Contact
                </a>
              </nav>
              <div className="items-center box-border caret-transparent hidden min-h-0 min-w-0 md:flex md:min-h-[auto] md:min-w-[auto]">
                <button className="text-white bg-sky-800 caret-transparent inline-block min-h-0 min-w-0 text-center px-5 py-2 rounded-full md:block md:min-h-[auto] md:min-w-[auto]">
                  Sign Up
                </button>
              </div>
              <button
                aria-label="Toggle menu"
                className="bg-transparent caret-transparent block min-h-[auto] min-w-[auto] text-center p-0 md:hidden md:min-h-0 md:min-w-0"
              >
                <img
                  src="https://c.animaapp.com/mk1flv6rHV7KCD/assets/icon-1.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-6 w-6"
                />
              </button>
            </div>
