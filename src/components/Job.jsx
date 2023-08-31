export default function Job({ job, setFilters, setAreFiltersApplied }) {
  return (
    <div
      className={`bg-white p-4 pl-6 rounded-lg border-l-[5px] md:border-l-4 shadow-md md:shadow-lg  ${
        job?.featured
          ? "border-l-desaturated-dark-cyan"
          : "border-l-transparent"
      }`}
    >
      <div className="md:flex md:justify-between md:items-center md:gap-4 md:mr-auto">
        <div className="flex flex-col gap-2  md:flex-row md:items-center">
          <img
            src={job?.logo}
            alt={job?.company}
            className="w-14 -mt-10 md:m-0 md:mr-3 md:w-16"
          />
          <div>
            <div className="flex gap-3 items-center flex-wrap">
              <h3 className="text-md text-desaturated-dark-cyan">
                {job?.company}
              </h3>
              {job?.new && (
                <p className="uppercase p-2 pb-1 rounded-full bg-desaturated-dark-cyan text-light-grayish-cyan-bg leading-none text-sm md:text-xs md:py-1 md:px-2">
                  New!
                </p>
              )}
              {job?.featured && (
                <p className="uppercase p-2 pb-1 rounded-full bg-very-dark-grayish-cyan text-light-grayish-cyan-bg leading-none text-sm md:text-xs md:py-1 md:px-2">
                  Featured
                </p>
              )}
            </div>
            <div>
              <h2 className="text-lg font-bold hover:cursor-pointer hover:text-desaturated-dark-cyan md:mt-2 text-very-dark-grayish-cyan">
                {job?.position}
              </h2>
              <p className="text-md font-normal mb-3 text-dark-grayish-cyan">
                {job?.postedAt} &bull; {job?.contract} &bull; {job?.location}
              </p>
            </div>
          </div>
        </div>
        <hr className="w-full md:hidden bg-very-dark-grayish-cyan" />
        <ul className="flex flex-wrap mt-4 gap-3 items-start ml-auto">
          <li
            className="p-2 leading-none bg-light-grayish-cyan-filter text-desaturated-dark-cyan font-medium hover:bg-desaturated-dark-cyan hover:text-light-grayish-cyan-filter rounded-md transition-all cursor-pointer"
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
            className="p-2 leading-none bg-light-grayish-cyan-filter text-desaturated-dark-cyan font-medium hover:bg-desaturated-dark-cyan hover:text-light-grayish-cyan-filter rounded-md cursor-pointer transition-all"
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
              className="p-2 leading-none bg-light-grayish-cyan-filter text-desaturated-dark-cyan font-medium cursor-pointer hover:bg-desaturated-dark-cyan hover:text-light-grayish-cyan-filter rounded-md transition-all"
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
              className="p-2 leading-none bg-light-grayish-cyan-filter text-desaturated-dark-cyan font-medium hover:bg-desaturated-dark-cyan hover:text-light-grayish-cyan-filter rounded-md transition-all cursor-pointer"
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
