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
  const [Jobs, setJobs] = useState({});
  useEffect(() => {
    fetch("https://lego.abakus.no/api/v1/joblistings/").then(
      async (response) => {
        const result = await response.json();
        setJobs(result);
      }
    );
  }, []);
  return <div>{JSON.stringify(Jobs)}</div>;
};

export default TestAPI;
