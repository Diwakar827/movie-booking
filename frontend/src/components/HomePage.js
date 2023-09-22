import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllMovies } from "../api-helpers/api-helpers";
import MovieItem from "./Movies/MovieItem";
import Carousel from "./Profiles/Carousel";


const HomePage = () => {

  const [movies, setMovies] = useState();
  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.movies))
      .catch((err) => console.log(err));
  }, []);


  return (
  


    <Box width={"100%"} height="100%" margin="auto" marginTop={2} bgcolor={"black"}>
      
    
    
     <Box margin={"auto"} width="80%" height={"50vh"} padding={7}>
     
     <Carousel ></Carousel>
      </Box>
  
    

      <Box padding={5} margin="auto">
        <Typography variant="h4" textAlign={"center"} color={"white"}>
          Latest Releases:
        </Typography>
      </Box>
  
      <Box margin={"auto"} marginTop={4} >
      <Box
        width={"100%"}
        margin="auto"
        marginTop={5}
        display={"flex"}
        justifyContent="flex-start"
        flexWrap={"wrap"}
      >
        {movies &&
          movies.map((movie, index) => (
            <MovieItem
              key={index}
              id={movie._id}
              posterUrl={movie.posterUrl}
              releaseDate={movie.releaseDate}
              title={movie.title}
            />
          ))}
      </Box>
    </Box>
    
      <Box display="flex" padding={5} margin="auto">
        <Button
          LinkComponent={Link}
          to="/movies"
          variant="outlined"
          sx={{ margin: "auto", color: "#2b2d42" }}
        >
          View All Movies
        </Button>
      </Box>
    </Box>


  );
};

export default HomePage;
