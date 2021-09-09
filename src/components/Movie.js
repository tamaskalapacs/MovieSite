import React from 'react'

const isTrending = (rank) =>{
    if(rank)
        return "rank"
    else
        return "noRank"
}

const setRatingClass = (rating) =>{
    if(rating >= 8)
        return 'green'
    else if( rating >= 5)
        return 'orange'
    else if(rating)
        return 'red'
    else
        return 'none'


}

const Movie = ({image, rank, imDbRating, crew, title, description}) => (

<div className = "movie">

    <div className = "imgContainer">
        <img src={image} alt = {title}/>
        <div className = {isTrending(rank)}>{rank}</div>
    </div>

    <div className = "movieInfo">
        <h3>{title}</h3>
        <span className = {`tag ${setRatingClass(imDbRating)}`}>{imDbRating}</span>

         
    </div>

    <div className="movieHover">
        <h1>{title}</h1>  
        <p>{description}</p>
        <p>{crew}</p>
    </div>

</div>)

export default Movie
