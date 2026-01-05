export const FooterBottom = () => {
  return (
    <div className="items-center box-border caret-transparent flex flex-col justify-between md:flex-row">
      <p className="text-gray-400 text-sm box-border caret-transparent leading-5 mb-4 md:mb-0">
        © 2026 MyFlexiPOS. All rights reserved.
      </p>
      <div className="box-border caret-transparent flex">
        <a
          href="/privacy-policy"
          className="text-gray-400 text-sm box-border caret-transparent block leading-5 hover:text-white"
        >
          Privacy Policy
        </a>
        <a
          href="/terms-of-service"
          className="text-gray-400 text-sm box-border caret-transparent block leading-5 ml-6 hover:text-white"
        >
          Terms of Service
        </a>
        <a
          href="/cookie-settings"
          className="text-gray-400 text-sm box-border caret-transparent block leading-5 ml-6 hover:text-white"
        >
          Cookie Settings
        </a>
        <a
          href="/faq"
          className="text-gray-400 text-sm box-border caret-transparent block leading-5 ml-6 hover:text-white"
        >
          FAQ
        </a>
      </div>
    </div>
  );
};
