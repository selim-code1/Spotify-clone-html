window.addEventListener("DOMContentLoaded", () =>{
    "use strict"
    const moviesForm = getElement("form")
    const templateMovies = getElement("template").content
    const heroInnerList = getElement(".hero-inner-list")
    let KINOLAR = movies.slice(50, 200)
    function handleRenderMovie(arr){
        if(arr?.length){
            heroInnerList.innerHTML = null
            arr.map(function(item){
                let cloneMovie = templateMovies.cloneNode(true)
                let movieImg = cloneMovie.querySelector(".movie-img")
                movieImg.src = item.bigPoster
                let movieName = cloneMovie.querySelector(".movie-name")
                movieName.textContent = item.title.split(" ").length > 3 ? item.title.split(" ").slice(0,3).join(" ") + "..." : item.title
                let movieYear = cloneMovie.querySelector(".movie-year")
                movieYear.textContent = item.year
                let movieTrailer = cloneMovie.querySelector(".movie-trailer")
                movieTrailer.href = item.trailer
                heroInnerList.appendChild(cloneMovie)
            })
        }
    }
    handleRenderMovie(KINOLAR)
    function handleSub(event){
        event.preventDefault()
        const data = new FormData(event.target)
        console.log(data.get("search-movie"))
        const rejex = new RegExp(data.get("search-movie"), "gi")
        let filter = KINOLAR.filter(item => item.title.match(rejex))
        handleRenderMovie(filter)
    }
    moviesForm.addEventListener("submit",handleSub)
    
})