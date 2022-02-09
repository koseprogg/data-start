import React, { useEffect, useState } from "react";

const testAPI = () => {
  const [Jobs, setJobs] = useState({});
  useEffect(() => {
    fetch("https://lego.abakus.no/api/v1/joblistings/").then(async (response) => {
      const result = await response.json()
      setJobs(result);
    });
  }, []);
  return <div>{JSON.stringify(Jobs)}</div>;
};

export default testAPI;
