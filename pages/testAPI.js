import React, { useEffect, useState } from "react";

const api = {
  deadline: "",
  fromYear: 1,
  toYear: 5,
  jobType: "",
  title: "",
  companyName: "",
  url: "",
  workplace: "",
  logo: "", // Kanskje?
};

const TestAPI = () => {
  function fetchAndParse(url, callback) {
    return fetch(url).then(async (response) => {
      const result = await response.json();
      return callback(result);
    });
  }

  function parseOnlineJobs(payload) {}

  const [Jobs, setJobs] = useState({});
  useEffect(() => {
    const jobList = [];
    // ....
    setJobs(jobList);
  }, []);
  return <div>{JSON.stringify(Jobs)}</div>;
};

export default TestAPI;
