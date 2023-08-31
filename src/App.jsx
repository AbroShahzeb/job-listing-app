import { useState, useEffect } from "react";
import Filters from "./components/Filters";
import JobList from "./components/JobList";
import initialJobs from "./data/data";

function App() {
  const [jobs, setJobs] = useState(initialJobs);
  const [filters, setFilters] = useState([
    {
      role: "",
      level: "",
      tools: [],
      languages: [],
    },
  ]);
  const [areFiltersApplied, setAreFiltersApplied] = useState(false);

  const applyFilters = () => {
    const filteredJobs = initialJobs.filter((job) => {
      const roleFilter = !filters[0].role || job.role === filters[0].role;
      const levelFilter = !filters[0].level || job.level === filters[0].level;
      const languageFilter =
        filters[0].languages.length === 0 ||
        filters[0].languages.every((lang) => job.languages.includes(lang));
      const toolsFilter =
        filters[0].tools.length === 0 ||
        filters[0].tools.every((tool) => job.tools.includes(tool));

      return roleFilter && levelFilter && languageFilter && toolsFilter;
    });

    setJobs(filteredJobs);
  };

  useEffect(
    function () {
      applyFilters();
    },
    [filters]
  );
  return (
    <div className="w-full min-h-screen bg-light-grayish-cyan-bg">
      <Filters
        filters={filters}
        setFilters={setFilters}
        areFiltersApplied={areFiltersApplied}
        setAreFiltersApplied={setAreFiltersApplied}
      />
      <JobList
        jobs={jobs}
        setFilters={setFilters}
        setAreFiltersApplied={setAreFiltersApplied}
        areFiltersApplied={areFiltersApplied}
      />
    </div>
  );
}

export default App;
