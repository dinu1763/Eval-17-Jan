import { Link } from "react-router-dom"

export const Navbar = () => {
    return (<div>
        <Link to="/" style={{ margin: "15px" }}>Jobs Homepage</Link>
        <Link to="/jobs" style={{ margin: "15px" }}>Jobs</Link>
        <Link to="/dashboard" style={{ margin: "15px" }}>Dashboard</Link>
        <Link to="/login" style={{ margin: "15px" }}>Login</Link>
    </div>)
}