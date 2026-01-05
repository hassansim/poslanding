export const FooterGrid = () => {
  return (
    <div className="box-border caret-transparent gap-x-10 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-10 md:grid-cols-[repeat(4,minmax(0px,1fr))]">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent">
          <img
            src="https://c.animaapp.com/mk1flv6rHV7KCD/assets/a2843b10-b345-45c2-b541-7ed9ea91643e.png"
            alt="MyFlexiPOS Logo"
            className="box-border caret-transparent h-12 max-w-full mb-4"
          />
          <p className="text-gray-400 text-sm box-border caret-transparent leading-[22.75px]">
            Revolutionize your business with our smart, flexible, and reliable
            point of sale solution designed for modern businesses.
          </p>
        </div>
        <div className="box-border caret-transparent flex mt-6">
          <a
            href="https://facebook.com/myflexiposlk"
            aria-label="Facebook"
            className="text-gray-400 box-border caret-transparent block hover:text-white"
          >
            <img
              src="https://c.animaapp.com/mk1flv6rHV7KCD/assets/icon-34.svg"
              alt="Icon"
              className="box-border caret-transparent h-5 w-5"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/flexiata/"
            aria-label="LinkedIn"
            className="text-gray-400 box-border caret-transparent block ml-4 hover:text-white"
          >
            <img
              src="https://c.animaapp.com/mk1flv6rHV7KCD/assets/icon-35.svg"
              alt="Icon"
              className="box-border caret-transparent h-5 w-5"
            />
          </a>
          <a
            href="https://www.instagram.com/myflexipos/"
            aria-label="Instagram"
            className="text-gray-400 box-border caret-transparent block ml-4 hover:text-white"
          >
            <img
              src="https://c.animaapp.com/mk1flv6rHV7KCD/assets/icon-36.svg"
              alt="Icon"
              className="box-border caret-transparent h-5 w-5"
            />
          </a>
        </div>
      </div>
      <div className="box-border caret-transparent">
        <h3 className="text-lg font-semibold box-border caret-transparent leading-7 mb-4">
          Quick Links
        </h3>
        <ul className="box-border caret-transparent list-none pl-0">
          <li className="box-border caret-transparent">
            <button className="text-gray-400 bg-transparent caret-transparent text-center p-0 hover:text-white">
              Home
            </button>
          </li>
          <li className="box-border caret-transparent mt-3">
            <button className="text-gray-400 bg-transparent caret-transparent text-center p-0 hover:text-white">
              Features
            </button>
          </li>
          <li className="box-border caret-transparent mt-3">
            <button className="text-gray-400 bg-transparent caret-transparent text-center p-0 hover:text-white">
              Pricing
            </button>
          </li>
          <li className="box-border caret-transparent mt-3">
            <button className="text-gray-400 bg-transparent caret-transparent text-center p-0 hover:text-white">
              POS Equipment
            </button>
          </li>
          <li className="box-border caret-transparent mt-3">
            <button className="text-gray-400 bg-transparent caret-transparent text-center p-0 hover:text-white">
              Testimonials
            </button>
          </li>
          <li className="box-border caret-transparent mt-3">
            <button className="text-gray-400 bg-transparent caret-transparent text-center p-0 hover:text-white">
              Contact
            </button>
          </li>
        </ul>
      </div>
      <div className="box-border caret-transparent">
        <h3 className="text-lg font-semibold box-border caret-transparent leading-7 mb-4">
          Support
        </h3>
        <ul className="box-border caret-transparent list-none pl-0">
          <li className="box-border caret-transparent">
            <button className="text-gray-400 bg-transparent caret-transparent text-center p-0 hover:text-white">
              Help Center
            </button>
          </li>
          <li className="box-border caret-transparent mt-3">
            <button className="text-gray-400 bg-transparent caret-transparent text-center p-0 hover:text-white">
              Documentation
            </button>
          </li>
          <li className="box-border caret-transparent mt-3">
            <button className="text-gray-400 bg-transparent caret-transparent text-center p-0 hover:text-white">
              API Reference
            </button>
          </li>
        </ul>
      </div>
      <div className="box-border caret-transparent">
        <h3 className="text-lg font-semibold box-border caret-transparent leading-7 mb-4">
          Company
        </h3>
        <ul className="box-border caret-transparent list-none pl-0">
          <li className="box-border caret-transparent">
            <button className="text-gray-400 bg-transparent caret-transparent text-center p-0 hover:text-white">
              About Us
            </button>
          </li>
          <li className="box-border caret-transparent mt-3">
            <button className="text-gray-400 bg-transparent caret-transparent text-center p-0 hover:text-white">
              Blog
            </button>
          </li>
          <li className="box-border caret-transparent mt-3">
            <button className="text-gray-400 bg-transparent caret-transparent text-center p-0 hover:text-white">
              Careers
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
