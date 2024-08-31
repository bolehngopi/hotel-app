import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div
      className="
        border border-gray-300
        w-full
        md:w-auto
        py-2
        rounded-full
        shadow-sm
        hover:shadow-md
        dark:bg-white
        dark:text-black
        dark:hover:shadow-white
        transition
        cursor-pointer
      "
      aria-label="Search Component"
    >
      <div
        className="
          flex
          flex-row
          items-center
          justify-between
        "
      >
        <button
          className="
            text-sm 
            font-semibold 
            px-6
            bg-transparent
            focus:outline-none
          "
          aria-label="Location"
        >
          Location Label
        </button>

        <button
          className="
            hidden 
            sm:block 
            text-sm 
            font-semibold 
            px-6 
            border-x border-gray-300
            flex-1 
            text-center
            bg-transparent
            focus:outline-none
          "
          aria-label="Duration"
        >
          Duration Label
        </button>

        <div
          className="
            text-sm 
            pl-6 
            pr-2 
            text-gray-600 
            flex 
            flex-row 
            items-center 
            gap-3
          "
        >
          <button
            className="hidden sm:block bg-transparent focus:outline-none"
            aria-label="Guest"
          >
            Guest Label
          </button>
          <button
            className="
              p-2
              bg-black
              rounded-full
              text-white
              focus:outline-none
            "
            aria-label="Search"
          >
            <FaSearch size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
