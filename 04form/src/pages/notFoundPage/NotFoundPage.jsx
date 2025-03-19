import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { Button } from "@mui/material"

const NotFoundPage = () => {
    const navigate = useNavigate()

    return (
        <>
            <div style={{backgroundColor: "gray"}}>
                <h1 style={{}}>Not Found Page</h1>
            </div>
            <Button onClick={() => navigate(-1)} style={{border: "3px double black", color: "black"}}>Back</Button>
        </>
    )
}

export default NotFoundPage