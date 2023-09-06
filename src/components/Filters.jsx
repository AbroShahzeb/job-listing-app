export default function Filters({
  filters,
  setFilters,
  setAreFiltersApplied,
  areFiltersApplied,
}) {
  function removeFilterValue(filterType, value) {
    setFilters((prevFilters) => {
      const newFilters = [...prevFilters];
<<<<<<< HEAD
=======
      
>>>>>>> e48d858c58630480539a4af33a2e2ddb2b1d7cde

      // Remove the specific value from the array in the newFilters object
      if (Array.isArray(newFilters[0][filterType])) {
        newFilters[0][filterType] = newFilters[0][filterType].filter(
          (item) => item !== value,
        );
      } else {
        newFilters[0][filterType] = "";
      }

      return newFilters;
    });
    if (
        filters[0].role === "" &&
        filters[0].level === "" &&
        filters[0].languages.length === 0 &&
        filters[0].tools.length === 0
      ) {
        setAreFiltersApplied(false);
      }
    
  }

  function clearFilters() {
    setFilters([
      {
        role: "",
        level: "",
        tools: [],
        languages: [],
      },
    ]);
    setAreFiltersApplied(false);
  }
  return (
    <div className="flex h-[156px]  items-end bg-desaturated-dark-cyan bg-mobile-bg bg-no-repeat px-2 xs:bg-desktop-bg xs:bg-cover">
      <div
        className={`mx-auto max-w-[18rem] translate-y-1/2  items-center justify-between gap-4 rounded-lg bg-white p-3 text-center text-lg shadow-lg  xs:container xs:max-w-[22rem] sm:max-w-[46rem] ${
          areFiltersApplied ? "flex" : "hidden"
        }`}
      >
        {filters.map((filter) => {
          return (
            <ul className="flex flex-wrap gap-2" key={crypto.randomUUID()}>
              <li className="flex items-center justify-between gap-2 bg-light-grayish-cyan-filter text-sm font-bold leading-none text-desaturated-dark-cyan">
                {filter.role && <p className="p-2">{filter.role}</p>}
                {filter.role ? (
                  <span
                    className="flex h-full w-6 cursor-pointer items-center justify-center bg-desaturated-dark-cyan pt-2 text-3xl font-normal leading-[0] text-light-grayish-cyan-bg hover:bg-very-dark-grayish-cyan"
                    onClick={() => removeFilterValue("role", null)}
                  >
                    &times;
                  </span>
                ) : null}
              </li>
              <li className="flex items-center justify-between gap-2 bg-light-grayish-cyan-filter text-sm font-bold leading-none text-desaturated-dark-cyan">
                {filter.level && <p className="p-2">{filter.level}</p>}
                {filter.level ? (
                  <span
                    className="flex h-full w-6 cursor-pointer items-center justify-center bg-desaturated-dark-cyan pt-2 text-3xl font-normal leading-[0] text-light-grayish-cyan-bg hover:bg-very-dark-grayish-cyan"
                    onClick={() => removeFilterValue("level", null)}
                  >
                    &times;
                  </span>
                ) : null}
              </li>
              {filter?.tools?.map((tool) => {
                return (
                  <li
                    key={crypto.randomUUID()}
                    className="flex items-center justify-between gap-2 bg-light-grayish-cyan-filter text-sm font-bold leading-none text-desaturated-dark-cyan"
                  >
                    <p className="p-2">{tool}</p>
                    {tool ? (
                      <span
                        className="flex h-full w-6 cursor-pointer items-center justify-center bg-desaturated-dark-cyan pt-2 text-3xl font-normal leading-[0] text-light-grayish-cyan-bg hover:bg-very-dark-grayish-cyan"
                        onClick={() => removeFilterValue("tools", tool)}
                      >
                        &times;
                      </span>
                    ) : null}
                  </li>
                );
              })}
              {filter?.languages?.map((language) => {
                return (
                  <li
                    key={crypto.randomUUID()}
                    className="flex items-center justify-between gap-2 bg-light-grayish-cyan-filter text-sm font-bold leading-none text-desaturated-dark-cyan"
                  >
                    <p className="p-2">{language}</p>
                    {language ? (
                      <span
                        className="flex h-full w-6 cursor-pointer items-center justify-center bg-desaturated-dark-cyan pt-2 text-3xl font-normal leading-[0] text-light-grayish-cyan-bg hover:bg-very-dark-grayish-cyan"
                        onClick={() => removeFilterValue("languages", language)}
                      >
                        &times;
                      </span>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          );
        })}
        <button
          className="text-md text-sm font-bold text-very-dark-grayish-cyan hover:cursor-pointer hover:text-desaturated-dark-cyan hover:underline "
          onClick={clearFilters}
        >
          Clear
        </button>
      </div>
    </div>
  );
}
