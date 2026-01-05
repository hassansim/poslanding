export const TestimonialsContent = () => {
  return (
    <div className="box-border caret-transparent max-w-screen-xl mx-auto px-4 py-16 md:px-8 md:py-24">
      <div className="box-border caret-transparent text-center mb-16">
        <p className="text-sky-800 text-sm font-medium bg-sky-800/10 box-border caret-transparent inline-block leading-5 mb-4 px-3 py-1 rounded-full">
          Client Testimonials
        </p>
        <h2 className="text-gray-900 text-3xl font-bold box-border caret-transparent leading-9 mb-4 md:text-4xl md:leading-10">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 text-lg box-border caret-transparent leading-7 max-w-screen-md mb-12 mx-auto">
          Hear from our satisfied customers who have transformed their
          businesses with MyFlexiPOS.
        </p>
      </div>
      <div className="box-border caret-transparent gap-x-8 grid grid-cols-[repeat(1,minmax(0px,1fr))] max-w-6xl gap-y-8 mb-10 mx-auto md:grid-cols-[repeat(2,minmax(0px,1fr))]">
        <div className="bg-transparent shadow-none box-content caret-black h-auto min-h-0 min-w-0 rounded-none md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] md:box-border md:caret-transparent md:h-full md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:border md:border-slate-200 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-2xl md:border-solid"></div>
        <div className="bg-transparent shadow-none box-content caret-black h-auto min-h-0 min-w-0 rounded-none md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] md:box-border md:caret-transparent md:h-full md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:border md:border-slate-200 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-2xl md:border-solid"></div>
      </div>
      <div className="items-center box-border caret-transparent flex justify-center mt-8">
        <button
          aria-label="Previous testimonials"
          className="text-gray-600 bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] caret-transparent block text-center border border-gray-200 p-2 rounded-full border-solid hover:text-white hover:bg-sky-800"
        >
          <img
            src="https://c.animaapp.com/mk1flv6rHV7KCD/assets/icon-25.svg"
            alt="Icon"
            className="box-border caret-transparent h-5 w-5"
          />
        </button>
        <div className="box-border caret-transparent flex ml-4">
          <button
            aria-label="Go to testimonial group 1"
            className="bg-gray-300 caret-transparent block h-2.5 text-center w-2.5 p-0 rounded-full md:bg-sky-800 md:w-8"
          ></button>
          <button
            aria-label="Go to testimonial group 2"
            className="bg-sky-800 caret-transparent block h-2.5 text-center w-8 ml-2 p-0 rounded-full md:bg-gray-300 md:w-2.5"
          ></button>
          <button
            aria-label="Go to testimonial group 3"
            className="bg-gray-300 caret-transparent block h-2.5 text-center w-2.5 ml-2 p-0 rounded-full"
          ></button>
        </div>
        <button
          aria-label="Next testimonials"
          className="text-gray-600 bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] caret-transparent block text-center border border-gray-200 ml-4 p-2 rounded-full border-solid hover:text-white hover:bg-sky-800"
        >
          <img
            src="https://c.animaapp.com/mk1flv6rHV7KCD/assets/icon-26.svg"
            alt="Icon"
            className="box-border caret-transparent h-5 w-5"
          />
        </button>
      </div>
    </div>
  );
};
