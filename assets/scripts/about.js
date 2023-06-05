export function about(image, title, ReleaseDate, author, ratings, duration) {

    let moviePreview = $(`
    <section class="abt-sec">
    <div class="about-image">
     <div class="image">
        <img src="${image}" alt="">
     </div>
        <div class="details">
        <h3>Title: ${title}</h3>
        <h3>Release Date: ${ReleaseDate}</h3>
        <h3>Author: ${author}</h3>
        <h3 class="ratings">Ratings: </h3>
        <h3>Duration: ${duration}</h3>
        </div>
    </div>
    <section>
    `)

    let stars;
    console.log(ratings);
    $("section").hide(500)
    $("header").hide()
    $("body").prepend(moviePreview)
    $("body").prepend(`
    <span class="arrow"><i class="fas fa-arrow-left"></i></span>
    `)

    for (let i = 0; i < ratings; i++) {
        $(".ratings").append(`<i class='fas fa-star ico'></i>`)
    }
}