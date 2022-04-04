import React, { useEffect, useState } from "react";

const TestAPI = () => {
  const [Jobs, setJobs] = useState([]);
  useEffect(() => {
    const cachedJobs = localStorage.getItem("jobListings");
    const jobListingCacheDate = localStorage.getItem("jobListingCacheDate");
    if (
      !!cachedJobs &&
      cachedJobs.length > 0 &&
      parseInt(jobListingCacheDate) > Date.now() - 3600 * 24
    ) {
      setJobs(JSON.parse(localStorage.getItem("jobListings")));
    } else {
      localStorage.removeItem("jobListings");
      // setJobs(jobsArray);
      localStorage.setItem("jobListings", JSON.stringify(jobsArray));
      localStorage.setItem("jobListingCacheDate", Date.now());
    }
  }, []);

  return <div>{JSON.stringify(Jobs)}</div>;
};

export default TestAPI;
