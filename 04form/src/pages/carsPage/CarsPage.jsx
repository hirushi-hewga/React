import axios from "axios"
import CarCard from "../cards/CarCard";
import Grid from "@mui/material/Grid2";
import { useEffect, useState } from "react";
import { Box, Pagination } from "@mui/material";
import {useSelector} from "react-redux";
import useAction from "../../hooks/useAction";

const CarsPage = () => {
    const [pagination, setPagination] = useState({
        pageNumber: 1,
        pageSize: 10,
        totalCount: 0,
        totalPages: 1,
        hasPreviousPage: false,
        hasNextPage: false
    })
    const [cars, setCars] = useState([])

    useEffect(() => {
        fetchCars()
            .catch(error => console.log(error))
    }, [pagination.pageNumber])

    const fetchCars = async () => {
        const apiUrl = `https://localhost:7112/api/car/list?page=${pagination.pageNumber}&pageSize=${pagination.pageSize}`
        const response = await axios.get(apiUrl)
        if (response.status === 200) {
            const data = response.data
            setCars(data.payload.cars)
            setPagination({...pagination,
                                    pageNumber: data.payload.pageNumber,
                                    pageSize: data.payload.pageSize,
                                    totalCount: data.payload.totalCount,
                                    totalPages: data.payload.totalPages,
                                    hasPreviousPage: data.payload.hasPreviousPage,
                                    hasNextPage: data.payload.hasNextPage})
        }
    }

    const changePageHandler = (event, value) => {
        setPagination({...pagination, pageNumber: value})
    }

    return (
        <>
            <Grid container spacing={2}>
                {cars.map(car => (
                    <Grid key={car.id} size={4}>
                        <CarCard car={car}/>
                    </Grid>
                ))}
            </Grid>

            <Box display="flex" mt={3} justifyContent="center">
                <Pagination count={pagination.totalPages} onChange={changePageHandler} page={pagination.pageNumber} variant="outlined" color="primary" />
            </Box>
        </>
    )
}

export default CarsPage;