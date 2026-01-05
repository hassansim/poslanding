export const ContactContent = () => {
  return (
    <div className="box-border caret-transparent max-w-screen-xl mx-auto px-4 py-16 md:px-8 md:py-24">
      <div className="box-border caret-transparent text-center mb-16">
        <p className="text-sky-800 text-sm font-medium bg-sky-800/10 box-border caret-transparent inline-block leading-5 mb-4 px-3 py-1 rounded-full">
          Get In Touch
        </p>
        <h2 className="text-gray-900 text-3xl font-bold box-border caret-transparent leading-9 mb-4 md:text-4xl md:leading-10">
          Contact Us for More Information
        </h2>
        <p className="text-gray-600 text-lg box-border caret-transparent leading-7 max-w-screen-md mb-12 mx-auto">
          Have questions about MyFlexiPOS? Our team is here to help you find the
          perfect solution for your business.
        </p>
      </div>
      <div className="box-border caret-transparent gap-x-10 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-10 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
        <div className="box-border caret-transparent col-end-auto col-start-auto md:col-end-[span_2] md:col-start-[span_2]">
          <div className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border caret-transparent p-8 rounded-2xl">
            <h3 className="text-gray-900 text-2xl font-bold box-border caret-transparent leading-8 mb-6">
              Send us a message
            </h3>
            <form className="box-border caret-transparent">
              <div className="box-border caret-transparent gap-x-6 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-6 mb-6 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
                <div className="box-border caret-transparent">
                  <label className="text-gray-700 font-medium box-border caret-transparent block mb-2">
                    Full Name{" "}
                    <span className="text-red-500 box-border caret-transparent">
                      *
                    </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    value=""
                    className="box-border caret-transparent w-full border border-gray-300 px-4 py-3 rounded-xl border-solid"
                  />
                </div>
                <div className="box-border caret-transparent">
                  <label className="text-gray-700 font-medium box-border caret-transparent block mb-2">
                    Email Address{" "}
                    <span className="text-red-500 box-border caret-transparent">
                      *
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value=""
                    className="box-border caret-transparent w-full border border-gray-300 px-4 py-3 rounded-xl border-solid"
                  />
                </div>
              </div>
              <div className="box-border caret-transparent gap-x-6 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-6 mb-6 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
                <div className="box-border caret-transparent">
                  <label className="text-gray-700 font-medium box-border caret-transparent block mb-2">
                    Mobile Number{" "}
                    <span className="text-red-500 box-border caret-transparent">
                      *
                    </span>
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Your phone number"
                    value=""
                    className="box-border caret-transparent w-full border border-gray-300 px-4 py-3 rounded-xl border-solid"
