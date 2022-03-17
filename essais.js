

// appel de la fonction Ajax




// appel de la requête Ajax
$.ajax({
    method: 'GET',
    url: "http://www.omdbapi.com/?apikey=bb94b8f2",
}).done(function (data) {
    
});



success: function (data) { //données qui sont récupérées 


    // création des cartes de résultats
    var movies = data.Search;
    var page = Math.round(data.totalResults / data.Search.length) + 1;
    console.log(page);
    for (i = 0; i < movies.length; i++) {
        output += `
        <div class="col-md-3">
                 <p><strong>${movies[i].Title}</strong></p>
                 <img " class="card-img-top"src="${movies[i].Poster}"/>
                 <h3">${movies[i].Year}</h3><br>
                 <h3">${movies[i].Type}</h3><br>                 
         </div> `
    };


    // pagination
    pagination = '<ul class="pagination">'
    for (let i = 0; i < page; i++) {
        pagination += '<li class="page-item"><a class="page-link" href="' + i + '">' + i + '</a></li>'
    };
    pagination += '</ul>';
    $("#result").html(output).append(pagination);




    var links = document.querySelectorAll('.pagination a')
    for (let i = 0; i < links.length; i++) {
        var link = links[i]
        link.addEventListener('click', function (e) {
            e.preventDefault()
            var nbPage = this.getAttribute('href')
            url = "http://www.omdbapi.com/?apikey=bb94b8f2" + "&s=" + search + "&y=" + annee + "&type=" + type + "&page=" + nbPage

            console.log(nbPage);
            console.log(url)
        })

    }
}