import { Box, CircularProgress, LinearProgress, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import axios from "axios"

const ManufacturesPage = () => {
    const [manufactures, setManufactures] = useState(null);
    const [loading, setLoading] = useState(true)

    const apiImagesUrl = "https://localhost:7112/images"

    const fetchManufactures = async () => {
        setLoading(true)
        const responce = await axios.get("https://localhost:7112/api/manufacture/list")
        if (responce.status === 200) {
            const data = responce.data
            const list = data.payload
            setManufactures(list)
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchManufactures()
            .catch(error => console.error(error))
    }, [])

    return (
        <>
            {
                loading ? <LinearProgress/>
                    : manufactures.map(item => (
                        <Box key={item.id}>
                            <Box>
                                <img width="400px" alt={item.name} src={`${apiImagesUrl}${item.image}`}/>
                            </Box>
                            <Box>
                                <Typography variant="h2">{item.name}</Typography>
                                <Typography variant="h4">Засновник: {item.founder}</Typography>
                                <Typography variant="h4">Директор: {item.director}</Typography>
                                <Typography variant="p">{item.description}</Typography>
                            </Box>
                        </Box>
                    ))
            }
        </>
    )
}

export default ManufacturesPage;