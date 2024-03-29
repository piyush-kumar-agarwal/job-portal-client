import React, { useState } from "react";
import "./createjob.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchNewJob } from "../../Redux/Slices/Jobs/newJob";
const CreateJob = () => {
  const { isLoading, data } = useSelector((state) => state.newJob);
  const dispatch = useDispatch();
  const [jobData, setJobData] = useState({
    jobTitle: "",
    jobLocation: "",
    jobDes: "",
    skill: "",
    salary: "",
    jobType: "",
    noOfVaccancies: "",
  });
  const valueHandler = (e) => {
    const { name, value } = e.target;
    setJobData((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const fetchCreateJob = async () => {
      await dispatch(fetchNewJob(jobData));

      if (!isLoading && data) {
  
        alert(data?.message);
      }
    };
    fetchCreateJob();
  };
  return (
    <div className="createJob">
      {isLoading ? (
        "Loading"
      ) : (
        <form onSubmit={(e) => submitHandler(e)}>
          <div className="box">
            <label>Job Title</label>
            <input
              type="text"
              placeholder="Web Developer"
              className="int-5"
              name="jobTitle"
              onChange={(e) => valueHandler(e)}
              required
            />
          </div>
          <div className="box">
            <label>Salary</label>
            <input
              type="text"
              placeholder="eg. 50k (in dollar)"
              className="int-5"
              name="salary"
              onChange={(e) => valueHandler(e)}
              required
            />
          </div>
          <div className="box">
            <label>Job Type</label>
            <input
              type="text"
              placeholder="eg Full Time  Internship .."
              onChange={(e) => valueHandler(e)}
              name="jobType"
              required
            />
          </div>
          <div className="box">
            <label>No of Vaccancies</label>
            <input
              type="text"
              placeholder="16"
              onChange={(e) => valueHandler(e)}
              name="noOfVaccancies"
              required
            />
          </div>
          <div className="box">
            <label>Location</label>
            <input
              type="text"
              placeholder="eg . India 
          "
              name="jobLocation"
              onChange={(e) => valueHandler(e)}
              required
            />
          </div>

          <div className="box">
            <label>Skills Required</label>
            <input
              type="text"
              placeholder="eg. HTML CSS  Javascript ..."
              className="int-full"
              onChange={(e) => valueHandler(e)}
              name="skill"
              required
            />
          </div>
          <div className="box">
            <label>Job Description</label>
            <textarea
              placeholder="Frontend Developer ..... "
              className="job_dec"
              name="jobDes"
              onChange={(e) => valueHandler(e)}
              required
            ></textarea>
          </div>

          <button type="submit">Post Job</button>
        </form>
      )}
    </div>
  );
};

export default CreateJob;
