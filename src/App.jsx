import { useState } from "react";

const initialJobs = [
  {
    id: 1,
    company: "Photosnap",
    logo: "./images/photosnap.svg",
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 2,
    company: "Manage",
    logo: "./images/manage.svg",
    new: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"],
  },
  {
    id: 3,
    company: "Account",
    logo: "./images/account.svg",
    new: true,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
  {
    id: 4,
    company: "MyHome",
    logo: "./images/myhome.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: "./images/loop-studios.svg",
    new: false,
    featured: false,
    position: "Software Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["Ruby", "Sass"],
  },
  {
    id: 6,
    company: "FaceIt",
    logo: "./images/faceit.svg",
    new: false,
    featured: false,
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    languages: ["Ruby"],
    tools: ["RoR"],
  },
  {
    id: 7,
    company: "Shortly",
    logo: "./images/shortly.svg",
    new: false,
    featured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"],
  },
  {
    id: 8,
    company: "Insure",
    logo: "./images/insure.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["Vue", "Sass"],
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: "./images/eyecam-co.svg",
    new: false,
    featured: false,
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python"],
    tools: ["Django"],
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: "./images/the-air-filter-company.svg",
    new: false,
    featured: false,
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
];

function removeRepeatedElements(array) {
  const uniqueArray = [];

  for (const element of array) {
    if (!uniqueArray.includes(element)) {
      uniqueArray.push(element);
    }
  }

  return uniqueArray;
}

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
  return (
    <div className="w-full min-h-screen bg-light-grayish-cyan-bg">
      <Filters filters={filters} />
      <JobList jobs={jobs} setFilters={setFilters} />
    </div>
  );
}

function Filters({ filters }) {
  return (
    <div className="bg-mobile-bg bg-desaturated-dark-cyan  h-[156px] bg-no-repeat xs:bg-desktop-bg xs:bg-cover px-2 flex items-end">
      <div className="text-lg p-4 bg-white  max-w-[18rem] xs:max-w-[22rem] mx-auto xs:container sm:max-w-[46rem] rounded-lg text-center shadow-lg translate-y-1/2 flex items-center justify-between">
        <ul className="flex gap-2 flex-wrap">
          {filters.map((filter) => {
            return (
              <>
                <li className="flex justify-between text-sm items-center gap-2 bg-light-grayish-cyan-filter text-desaturated-dark-cyan font-bold leading-none">
                  <p className="p-2">{filter.role}</p>
                  {filter.role ? (
                    <span className="text-light-grayish-cyan-bg bg-desaturated-dark-cyan h-full text-3xl font-normal flex items-center justify-center w-6 leading-[0] pt-2 hover:bg-very-dark-grayish-cyan cursor-pointer">
                      &times;
                    </span>
                  ) : null}
                </li>
                <li className="flex justify-between text-sm items-center gap-2 bg-light-grayish-cyan-filter text-desaturated-dark-cyan font-bold leading-none">
                  <p className="p-2">{filter.level}</p>
                  {filter.level ? (
                    <span className="text-light-grayish-cyan-bg bg-desaturated-dark-cyan h-full text-3xl font-normal flex items-center justify-center w-6 leading-[0] pt-2 hover:bg-very-dark-grayish-cyan cursor-pointer">
                      &times;
                    </span>
                  ) : null}
                </li>
                {filter.tools.map((tool) => {
                  return (
                    <li className="flex justify-between text-sm items-center gap-2 bg-light-grayish-cyan-filter text-desaturated-dark-cyan font-bold leading-none">
                      <p className="p-2">{tool}</p>
                      {tool ? (
                        <span className="text-light-grayish-cyan-bg bg-desaturated-dark-cyan h-full text-3xl font-normal flex items-center justify-center w-6 leading-[0] pt-2 hover:bg-very-dark-grayish-cyan cursor-pointer">
                          &times;
                        </span>
                      ) : null}
                    </li>
                  );
                })}
                {filter.languages.map((language) => {
                  return (
                    <li className="flex justify-between text-sm items-center gap-2 bg-light-grayish-cyan-filter text-desaturated-dark-cyan font-bold leading-none">
                      <p className="p-2">{language}</p>
                      {language ? (
                        <span className="text-light-grayish-cyan-bg bg-desaturated-dark-cyan h-full text-3xl font-normal flex items-center justify-center w-6 leading-[0] pt-2 hover:bg-very-dark-grayish-cyan cursor-pointer">
                          &times;
                        </span>
                      ) : null}
                    </li>
                  );
                })}
              </>
            );
          })}
        </ul>
        <button className="text-md hover:cursor-pointer hover:text-desaturated-dark-cyan hover:underline text-sm">
          Clear
        </button>
      </div>
    </div>
  );
}

function JobList({ jobs, setFilters }) {
  return (
    <div className="mt-40 md:mt-20 max-w-xs xs:max-w-sm mx-auto px-4 xs:container sm:max-w-3xl flex flex-col gap-10">
      {jobs.map((job) => (
        <Job job={job} key={job.id} setFilters={setFilters} />
      ))}
    </div>
  );
}

function Job({ job, setFilters }) {
  return (
    <div
      className={`bg-white p-4 pl-6 rounded-lg border-l-[5px]  ${
        job.featured ? "border-l-desaturated-dark-cyan" : "border-l-transparent"
      }`}
    >
      <div className="md:flex md:justify-between md:items-center md:gap-4 md:mr-auto">
        <div className="flex flex-col gap-2  md:flex-row md:items-center">
          <img
            src={job.logo}
            alt={job.company}
            className="w-14 -mt-10 md:m-0"
          />
          <div>
            <div className="flex gap-3 items-center">
              <h3 className="text-md text-desaturated-dark-cyan">
                {job.company}
              </h3>
              {job.new && (
                <p className="uppercase p-2 pb-1 rounded-full bg-desaturated-dark-cyan text-light-grayish-cyan-bg leading-none text-sm">
                  New!
                </p>
              )}
              {job.featured && (
                <p className="uppercase p-2 pb-1 rounded-full bg-very-dark-grayish-cyan text-light-grayish-cyan-bg leading-none text-sm">
                  Featured
                </p>
              )}
            </div>
            <div>
              <h2 className="text-lg font-bold">{job.position}</h2>
              <p className="text-md font-normal mb-3 text-dark-grayish-cyan">
                {job.postedAt} &bull; {job.contract} &bull; {job.location}
              </p>
            </div>
          </div>
        </div>
        <hr className="w-full md:hidden" />
        <ul className="flex flex-wrap mt-4 gap-3 justify-self-end">
          <li
            className="p-2 leading-none bg-light-grayish-cyan-filter text-desaturated-dark-cyan font-medium"
            onClick={() => {
              setFilters((filters) => {
                return [{ ...filters[0], role: job.role }];
              });
            }}
          >
            {job.role}
          </li>
          <li
            className="p-2 leading-none bg-light-grayish-cyan-filter text-desaturated-dark-cyan font-medium"
            onClick={() => {
              setFilters((filters) => {
                return [{ ...filters[0], level: job.level }];
              });
            }}
          >
            {job.level}
          </li>
          {job.tools.map((tool) => (
            <li
              className="p-2 leading-none bg-light-grayish-cyan-filter text-desaturated-dark-cyan font-medium"
              onClick={() => {
                setFilters((filters) => {
                  return [
                    {
                      ...filters[0],
                      tools: [...new Set([...filters[0].tools, tool])],
                    },
                  ];
                });
              }}
            >
              {tool}
            </li>
          ))}
          {job.languages.map((language) => (
            <li
              className="p-2 leading-none bg-light-grayish-cyan-filter text-desaturated-dark-cyan font-medium"
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

export default App;
