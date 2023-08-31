export default function Job({ job, setFilters, setAreFiltersApplied }) {
  return (
    <div
      className={`rounded-lg border-l-[5px] bg-white p-4 pl-6 shadow-md md:border-l-4 md:shadow-lg  ${
        job?.featured
          ? "border-l-desaturated-dark-cyan"
          : "border-l-transparent"
      }`}
    >
      <div className="md:mr-auto md:flex md:items-center md:justify-between md:gap-4">
        <div className="flex flex-col gap-2  md:flex-row md:items-center">
          <img
            src={job?.logo}
            alt={job?.company}
            className="-mt-10 w-14 md:m-0 md:mr-3 md:w-16"
          />
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-md text-desaturated-dark-cyan">
                {job?.company}
              </h3>
              {job?.new && (
                <p className="rounded-full bg-desaturated-dark-cyan p-2 pb-1 text-sm uppercase leading-none text-light-grayish-cyan-bg md:px-2 md:py-1 md:text-xs">
                  New!
                </p>
              )}
              {job?.featured && (
                <p className="rounded-full bg-very-dark-grayish-cyan p-2 pb-1 text-sm uppercase leading-none text-light-grayish-cyan-bg md:px-2 md:py-1 md:text-xs">
                  Featured
                </p>
              )}
            </div>
            <div>
              <h2 className="text-lg font-bold text-very-dark-grayish-cyan hover:cursor-pointer hover:text-desaturated-dark-cyan md:mt-2">
                {job?.position}
              </h2>
              <p className="text-md mb-3 font-normal text-dark-grayish-cyan">
                {job?.postedAt} &bull; {job?.contract} &bull; {job?.location}
              </p>
            </div>
          </div>
        </div>
        <hr className="w-full bg-very-dark-grayish-cyan md:hidden" />
        <ul className="ml-auto mt-4 flex flex-wrap items-start gap-3">
          <li
            className="cursor-pointer rounded-md bg-light-grayish-cyan-filter p-2 font-medium leading-none text-desaturated-dark-cyan transition-all hover:bg-desaturated-dark-cyan hover:text-light-grayish-cyan-filter"
            onClick={() => {
              setFilters((filters) => {
                return [{ ...filters[0], role: job.role }];
              });
              setAreFiltersApplied(true);
            }}
          >
            {job?.role}
          </li>
          <li
            className="cursor-pointer rounded-md bg-light-grayish-cyan-filter p-2 font-medium leading-none text-desaturated-dark-cyan transition-all hover:bg-desaturated-dark-cyan hover:text-light-grayish-cyan-filter"
            onClick={() => {
              setFilters((filters) => {
                return [{ ...filters[0], level: job.level }];
              });
              setAreFiltersApplied(true);
            }}
          >
            {job?.level}
          </li>
          {job?.tools.map((tool) => (
            <li
              key={crypto.randomUUID()}
              className="cursor-pointer rounded-md bg-light-grayish-cyan-filter p-2 font-medium leading-none text-desaturated-dark-cyan transition-all hover:bg-desaturated-dark-cyan hover:text-light-grayish-cyan-filter"
              onClick={() => {
                setFilters((filters) => {
                  return [
                    {
                      ...filters[0],
                      tools: [...new Set([...filters[0].tools, tool])],
                    },
                  ];
                });
                setAreFiltersApplied(true);
              }}
            >
              {tool}
            </li>
          ))}
          {job?.languages.map((language) => (
            <li
              key={crypto.randomUUID()}
              className="cursor-pointer rounded-md bg-light-grayish-cyan-filter p-2 font-medium leading-none text-desaturated-dark-cyan transition-all hover:bg-desaturated-dark-cyan hover:text-light-grayish-cyan-filter"
              onClick={() => {
                setFilters((filters) => {
                  return [
                    {
                      ...filters[0],
                      languages: [
                        ...new Set([...filters[0].languages, language]),
                      ],
                    },
                  ];
                });
                setAreFiltersApplied(true);
              }}
            >
              {language}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
