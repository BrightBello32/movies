import { about } from "./about.js"

$.get("/assets/scripts/movies.json", null, null, "json").done(function (movies) {
    // console.log(movies);

    let header = $(`
    <header>
    <label for="movies">Movies</label>

    </header>

    `)

    let content = $(`
    <div>
        <div class="inp">
        <input type="search">
        <span class="search"><i class="fas fa-search"></i></span>
       </div>
       <div class="images">
       </div>
    </div>
        
    `)
    movies.forEach((el, i) => {
        let images = $(`
        
        <div class="img">
            <img src="${el.img}"> 
            <div class ="actions">
                <p class="title">${el.title}</p>
                <span class="release">${el.ReleaseDate}</span>
            </div>
            <input type="text" value="${el.Author}" hidden class="author">
            <input type="text" value="${el.Ratings}" hidden class="ratings">
            <input type="text" value="${el.duration}" hidden class="duration">
        <div>
    
    
        `);
        $(content).find(".images").append(images)
    });

    $("body").prepend(header)
    $("section").append(content)



    $("input").on('input', function () {
        let value = $(this).val()

        let allMovies = [...$(".title")];
        let filteredMovie = allMovies.filter((movie) => {
            return $(movie).text().toLowerCase().includes(value.toLowerCase())

        })
        allMovies.forEach(el => {
            let parent = $(el).parents(".img")
            if (filteredMovie.includes(el)) {
                parent.show()
            } else {
                parent.hide()
            }
        });
    })

    $(".img").each((i, el) => {
        $(el).click(function () {
            let image = $(this).find("img").attr("src")
            let title = $(this).find(".title").text()
            let release = $(this).find(".release").text()
            let author = $(this).find(".author").val()
            let ratings = $(this).find(".ratings").val()
            let duration = $(this).find(".duration").val()
            about(image, title, release, author, ratings, duration)
            
            $(".arrow").click(function(){
                $("section").show(500)
                $("header").show()
                $(".arrow").hide()
                $(".abt-sec").hide()
            })
        })

    });


})



