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
      } md:mt-20 max-w-xs xs:max-w-sm mx-auto px-4 xs:container sm:max-w-3xl flex flex-col gap-10 pb-14`}
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
          )
      )}
    </div>
  );
}
