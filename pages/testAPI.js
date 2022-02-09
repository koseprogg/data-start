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
  async function fetchAndParse(url, callback) {
    return fetch(url).then(async (response) => {
      const result = await response.json();
      return callback(result);
    });
  }

  function parseOnlineJobs(payload) {}

  function parseAbakusJobs(payload) {
    return payload.results.map((listing) => ({
      deadline: listing.deadline,
      fromYear: listing.fromYear,
      toYear: listing.toYear,
      jobType: listing.jobType,
      title: listing.title,
      companyName: listing.company.name,
      url: "https://abakus.no/joblistings/" + listing.id + "/",
      workplace: listing.workplaces.map((workplace) => workplace.town).toString(),
    }));
  }
  function parseTihldeJobs(payload) {
    let jobTypeMap = { FULL_TIME: "full_time", PART_TIME: "part_time" };
    return payload.results.map((listing) => ({
      deadline: listing.deadline,
      fromYear: listing.class_start,
      toYear: listing.class_end,
      jobType: jobTypeMap[listing.jobType],
      title: listing.title,
      company: listing.company,
      url: "https://tihlde.org/karriere/" + listing.id + "/",
      workplace: listing.location,
    }));
  }
  const [Jobs, setJobs] = useState([]);
  useEffect(() => {
    setJobs([]);
    fetchAndParse("https://lego.abakus.no/api/v1/joblistings/", parseAbakusJobs).then((listings) => {
      setJobs([...Jobs, ...listings]);
    });
    fetchAndParse("https://api.tihlde.org/jobposts/", parseTihldeJobs).then((listings) => {
      setJobs([...Jobs, ...listings]);
    });
  }, []);
  return <div>{JSON.stringify(Jobs)}</div>;
};

export default TestAPI;
