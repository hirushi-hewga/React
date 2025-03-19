import { Card, CardActions, CardContent, CardMedia, Button, Typography, Pagination, Box, ButtonGroup, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from "axios"
import { defaultNewsImageUrl } from '../../settings/urls';

const NewsPage = () => {
    const [news, setNews] = useState({ totalResults: 0, articles: [] })
    const [pagination, setPagination] = useState({ page: 1, total: 1 })
    const [searchParam, setSearchParam] = useState("news")

    const apiKey = "fdefd44336da416dbb261b21c19ad9b6"
    const lang = "uk"
    const pageSize = 20
    const url = `https://newsapi.org/v2/everything?apiKey=${apiKey}&q=${searchParam}&language=${lang}&pageSize=${pageSize}&page=${pagination.page}`
    
    const newRequest = async () => {
        //const responce = await axios.get(url)
        //setNews(responce.data)
        //setPagination({...pagination, total: Math.ceil(responce.data.totalResults / pageSize)})
    }

    const newsSearchHandler = () => {
        const searchValue = document.getElementById("news-search-field").value
        if (searchValue) {
            setSearchParam(searchValue)
        }
        document.getElementById("news-search-field").value = ""
    }

    const pageChangeHandler = (event, value) => {
        setPagination({...pagination, page: value})
    }

    useEffect(() => {
        newRequest()
    }, [pagination.page, searchParam])

    return (
        <>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div style={{width: "50%", display: "flex", margin: "10px 0"}}>
                    <TextField style={{width: "100%"}} id="news-search-field" label="Search" variant="outlined" />
                    <Button onClick={newsSearchHandler} style={{margin: "0 10px"}} variant='contained'>Search</Button>
                </div>
                <ButtonGroup variant="outlined" aria-label="Basic button group">
                    <Button onClick={() => {setSearchParam("Ukraine")}}>Ukraine</Button>
                    <Button onClick={() => {setSearchParam("economy")}}>Economy</Button>
                    <Button onClick={() => {setSearchParam("technology")}}>Technology</Button>
                    <Button onClick={() => {setSearchParam("sports")}}>Sports</Button>
                    <Button onClick={() => {setSearchParam("culture")}}>Culture</Button>
                    <Button onClick={() => {setSearchParam("health")}}>Health</Button>
                    <Button onClick={() => {setSearchParam("environment")}}>Environment</Button>
                </ButtonGroup>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "10px", marginTop: "10px"}}>
                {news.articles.map(article => (
                    <a key={article.publishedAt} href={article.url} style={{textDecoration: "none"}}>
                        <Card sx={{ maxWidth: 345, height: "100%" }}>
                            <CardMedia
                              sx={{ height: 140 }}
                              image={article.urlToImage}
                              title={article.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                  {article.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                  {article.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </a>
                ))}
            </div>
            <Box style={{ display: "flex"}}>
                <Pagination onChange={pageChangeHandler} sx={{m: "10px auto"}} count={pagination.total} />
            </Box>
        </>
    );
}

export default NewsPage