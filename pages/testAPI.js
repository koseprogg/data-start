import React, { useEffect, useState } from "react";

const TestAPI = () => {
  async function fetchAndParse(url, callback) {
    return fetch(url).then(async (response) => {
      const result = await response.json();
      return callback(result);
    });
  }

  function parseOnlineJobs(payload) {
    const result = payload.results;
    return result.map((listing) => ({
      deadline: listing.deadline ?? "Udefinert",
      fromYear: 0,
      toYear: 0,
      jobType: listing.employment.name,
      title: listing.title,
      companyName: listing.company.name,
      url: `https://online.ntnu.no/career/${listing.id}`,
      workplace: listing.location.map((location) => location.name).toString(),
    }));
  }

  function parseAbakusJobs(payload) {
    return payload.results.map((listing) => ({
      deadline: listing.deadline,
      fromYear: listing.fromYear,
      toYear: listing.toYear,
      jobType: listing.jobType,
      title: listing.title,
      companyName: listing.company.name,
      url: "https://abakus.no/joblistings/" + listing.id + "/",
      workplace: listing.workplaces
        .map((workplace) => workplace.town)
        .toString(),
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
    const fetchAbakus = fetchAndParse(
      "https://lego.abakus.no/api/v1/joblistings/",
      parseAbakusJobs
    );
    const fetchOnline = fetchAndParse(
      "https://old.online.ntnu.no/api/v1/career/",
      parseOnlineJobs
    );
    const fetchTihlde = fetchAndParse(
      "https://api.tihlde.org/jobposts/",
      parseTihldeJobs
    );

    Promise.all([fetchAbakus, fetchOnline, fetchTihlde]).then((arrays) => {
      setJobs(arrays.flat());
    });
  }, []);
  return <div>{JSON.stringify(Jobs)}</div>;
};

export default TestAPI;
