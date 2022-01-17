import { useContext, useState } from "react"
import { AuthContext } from "../contexts/AuthContext";

export const Login = () =>{
    const [form, setForm] = useState("");
    const {handleToken} = useContext(AuthContext);

    const handleChange = ({target:{name, value}}) =>{
        setForm({
            ...form,
            [name]: value
        })
    }
    return <div>
        <input type="text" onChange={handleChange} name="email" placeholder="Enter Email"/>
        <input type="text" onChange={handleChange} name="password" placeholder="Enter Password"/>
        <button onClick={() =>{
            handleToken("322fkjs")
        }}>Sign In</button>
    </div>
}