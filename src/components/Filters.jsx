export default function Filters({
  filters,
  setFilters,
  setAreFiltersApplied,
  areFiltersApplied,
}) {
  function removeFilterValue(filterType, value) {
    setFilters((prevFilters) => {
      const newFilters = [...prevFilters];
      if (
        filters[0].role === "" &&
        filters[0].level === "" &&
        filters[0].languages.length === 0 &&
        filters[0].tools.length === 0
      ) {
        setAreFiltersApplied(false);
      }

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
    <div className="bg-mobile-bg bg-desaturated-dark-cyan  h-[156px] bg-no-repeat xs:bg-desktop-bg xs:bg-cover px-2 flex items-end">
      <div
        className={`text-lg p-3 bg-white  max-w-[18rem] xs:max-w-[22rem] mx-auto xs:container sm:max-w-[46rem] rounded-lg text-center shadow-lg translate-y-1/2  items-center justify-between gap-4 ${
          areFiltersApplied ? "flex" : "hidden"
        }`}
      >
        {filters.map((filter) => {
          return (
            <ul className="flex gap-2 flex-wrap" key={crypto.randomUUID()}>
              <li className="flex justify-between text-sm items-center gap-2 bg-light-grayish-cyan-filter text-desaturated-dark-cyan font-bold leading-none">
                {filter.role && <p className="p-2">{filter.role}</p>}
                {filter.role ? (
                  <span
                    className="text-light-grayish-cyan-bg bg-desaturated-dark-cyan h-full text-3xl font-normal flex items-center justify-center w-6 leading-[0] pt-2 hover:bg-very-dark-grayish-cyan cursor-pointer"
                    onClick={() => removeFilterValue("role", null)}
                  >
                    &times;
                  </span>
                ) : null}
              </li>
              <li className="flex justify-between text-sm items-center gap-2 bg-light-grayish-cyan-filter text-desaturated-dark-cyan font-bold leading-none">
                {filter.level && <p className="p-2">{filter.level}</p>}
                {filter.level ? (
                  <span
                    className="text-light-grayish-cyan-bg bg-desaturated-dark-cyan h-full text-3xl font-normal flex items-center justify-center w-6 leading-[0] pt-2 hover:bg-very-dark-grayish-cyan cursor-pointer"
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
                    className="flex justify-between text-sm items-center gap-2 bg-light-grayish-cyan-filter text-desaturated-dark-cyan font-bold leading-none"
                  >
                    <p className="p-2">{tool}</p>
                    {tool ? (
                      <span
                        className="text-light-grayish-cyan-bg bg-desaturated-dark-cyan h-full text-3xl font-normal flex items-center justify-center w-6 leading-[0] pt-2 hover:bg-very-dark-grayish-cyan cursor-pointer"
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
                    className="flex justify-between text-sm items-center gap-2 bg-light-grayish-cyan-filter text-desaturated-dark-cyan font-bold leading-none"
                  >
                    <p className="p-2">{language}</p>
                    {language ? (
                      <span
                        className="text-light-grayish-cyan-bg bg-desaturated-dark-cyan h-full text-3xl font-normal flex items-center justify-center w-6 leading-[0] pt-2 hover:bg-very-dark-grayish-cyan cursor-pointer"
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
          className="text-md hover:cursor-pointer hover:text-desaturated-dark-cyan hover:underline text-sm font-bold text-very-dark-grayish-cyan "
          onClick={clearFilters}
        >
          Clear
        </button>
      </div>
    </div>
  );
}
