import axios from "axios"
import CarCard from "../cards/CarCard";
import Grid from "@mui/material/Grid2";
import { useEffect, useState } from "react";
import { Box, Pagination } from "@mui/material";

const CarsPage = () => {
    const [paged, setPaged] = useState([]);

    const apiUrl = "https://localhost:7112/api/car/paged"

    const fetchCars = async () => {
        const response = await axios.get(apiUrl)
        if (response.status === 200) {
            const data = response.data
            setPaged(data.payload)
        }
    }

    useEffect(() => {
        fetchCars()
            .catch(error => console.error(error))
    }, [])

    return (
        <>
            <Grid container spacing={2}>
                {paged.items.map(car => (
                    <Grid key={car.id} size={4}>
                        <CarCard car={car}/>
                    </Grid>
                ))}
            </Grid>
            <Box>
                <Pagination count={paged.totalPages} page={paged.pageNumber} boundaryCount={2} />
            </Box>
        </>
    )
}

export default CarsPage;