const SideMenu = () => {
  return (
    <>
      <button
        type="button"
        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        data-hs-overlay="#hs-overlay-right"
       
      >
        Toggle right offcanvas
      </button>

      <div
        id="hs-overlay-right"
        className="hs-overlay [--body-scroll:true] hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0 transition-all duration-300 transform h-full max-w-xs w-full z-[80] bg-white border-s dark:bg-gray-800 dark:border-gray-700"
        tabindex="-1"
      >
        <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
          <h3 className="font-bold text-gray-800 dark:text-white">
            Offcanvas title
          </h3>
          <button
            type="button"
            className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            data-hs-overlay="#hs-overlay-right"
          >
            <span className="sr-only">Close modal</span>
            <svg
              className="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
        <div className="p-4">
          <p className="text-gray-800 dark:text-gray-400">
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </p>
        </div>
      </div>
    </>
  );
};

export default SideMenu;

