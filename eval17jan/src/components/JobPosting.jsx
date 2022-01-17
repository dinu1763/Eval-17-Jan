import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addJob, addJobError, addJobLoading, addJobSuccess, getJobError, getJobLoading, getJobSuccess } from "../store/actions";

export const JobPosting = () => {
    const [text, setText] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [salary, setSalary] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [jobType, setJobType] = useState('');

    const { loading, jobs, error } = useSelector(state => ({ loading: state.loading, jobs: state.jobs, error: state.error }));
    const dispatch = useDispatch();
    useEffect(() => {
        getJob()
    }, [])


    async function getJob() {
        try {
            dispatch(getJobLoading())
            const data = await fetch("http://localhost:3001/jobs").then((d) => d.json())
            dispatch(getJobSuccess(data));
        } catch (err) {
            dispatch(getJobError(err))
        }
    }



    const addJob = () => {

        const payload = {
            companyName: companyName,
            jobTitle: jobTitle,
            salary: salary,
            jobDescription: jobDescription,
            jobType: jobType,

        }
        dispatch(addJobLoading());
        fetch("http://localhost:3001/jobs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        }).then((d) => d.json()).then((res) => {
            //success
            dispatch(addJobSuccess(res));
            getJob()
        }).catch((err) => {
            //error
            dispatch(addJobError(err));
        });
    }
    return loading ? <div>Loading...</div> : error ? <div>Something Went Wrong</div> : (<div style={{ alignItems: "center", margin: "100px" }}>
        <input style={{ padding: "20px" }} type="text" placeholder="Company Name" onChange={e => setCompanyName(e.target.value)} />
        <input style={{ padding: "20px" }} type="text" placeholder="Job Title" onChange={e => setJobTitle(e.target.value)} />
        <input style={{ padding: "20px" }} type="text" placeholder="Salary" onChange={e => setSalary(e.target.value)} />
        <input style={{ padding: "20px" }} type="text" placeholder="Job Description" onChange={e => setJobDescription(e.target.value)} />
        <input style={{ padding: "20px" }} type="text" placeholder="Job Type" onChange={e => setJobType(e.target.value)} />

        <button onClick={() => {
            addJob()
        }} style={{ padding: "20px" }}>Post a Job</button>
        {jobs.map((e, i) => <div key={i} >
            <ul style={{ listStyle: 'none' }}>
                <li>Company Name : {e.companyName}</li>
                <li>Job Title : {e.jobTitle}</li>
                <li>Salary : {e.salary}/-</li>
                <li>Job Description : {e.jobDescription}</li>
                <li>Job Type : {e.jobType}</li>
            </ul>

            <hr />

        </div>)}
    </div>)
}



