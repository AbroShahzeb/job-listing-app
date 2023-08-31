import Job from "./Job";

export default function JobList({
  jobs,
  setFilters,
  setAreFiltersApplied,
  areFiltersApplied,
}) {
  return (
    <div
      className={`${
        areFiltersApplied ? "mt-28" : "mt-12"
      } mx-auto flex max-w-xs flex-col gap-10 px-4 pb-14 xs:container xs:max-w-sm sm:max-w-3xl md:mt-20`}
    >
      {jobs?.map(
        (job) =>
          job && (
            <Job
              job={job}
              key={job?.id}
              setFilters={setFilters}
              setAreFiltersApplied={setAreFiltersApplied}
            />
          ),
      )}
    </div>
  );
}
