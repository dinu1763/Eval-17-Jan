import { useDispatch, useSelector } from "react-redux"


export const Home = () => {
    const { loading, jobs, error } = useSelector(state => ({ loading: state.loading, jobs: state.jobs, error: state.error }));

    return <div><h1>Jobs Listing</h1>
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
    </div>
}