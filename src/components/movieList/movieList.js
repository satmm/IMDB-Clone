import React , {useEffect, useState} from "react";
import Cards from "../card/card";
import "./movieList.css"
import {useParams} from "react-router-dom"


const MovieList =() => {
    const [movieList , setMovieList]=useState([])
    const {type} = useParams()
    useEffect(() => {
        getData()
    }, [])
    useEffect(() => {
        getData()
    }, [type])
   const getData=()=>{
        fetch(` https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=c1584a2f306e0dfd92ba77febb2d3540`)  
        .then(res=>res.json())
        .then(data=> setMovieList(data.results))
    }
    return(
        <div className="movie__list">
    <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
    <div className="list__cards">
        {
             movieList.map(movie => (
                <Cards movie ={movie}/>
                ))
           
        }
    </div>
        </div>
    )
}

export default MovieList