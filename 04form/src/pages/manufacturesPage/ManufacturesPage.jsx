import { CircularProgress } from "@mui/material"
import { useEffect, useState } from "react"
import axios from "axios"

const ManufacturesPage = () => {
    const [manufacture, setManufacture] = useState(null);

    const apiImagesUrl = "https://localhost:7112/images"

    const fetchManufacture = async () => {
        const responce = await axios.get("https://localhost:7112/api/manufacture?id=7d62a3d7-665d-4f7e-88c4-a45f8c57b16c")
        if (responce.status === 200) {
            const data = responce.data
            setManufacture(data)
        }
    }

    useEffect(() => {
        fetchManufacture()
    }, [])

    return (
        <>
            {
                manufacture != null ? (
                    <div>
                        <div>
                            <img src={`${apiImagesUrl}${manufacture?.image}`} alt=""/>
                        </div>
                        <h1>{manufacture.name}</h1>
                        <h2>{manufacture.founder}</h2>
                        <h2>{manufacture.director}</h2>
                        <h3>{manufacture.description}</h3>
                    </div>
                ) : <CircularProgress/>
            }
        </>
    )
}

export default ManufacturesPage;