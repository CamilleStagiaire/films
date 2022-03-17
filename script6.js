var apikey = "bb94b8f2"
$("#movieForm").submit(function (e) {
    e.preventDefault();

    var search = $("#search").val();
    var annee = $("#annee").val();
    var type = $("#type").val();
    var href = ''
    let output = ''
    let pagination = ''

    var url = "http://www.omdbapi.com/?apikey=bb94b8f2" + "&s=" + search + "&y=" + annee + "&type=" + type + "&page=" + href


    // appel de la fonction afax
    $.ajax({
        method: 'GET',
        url: url,




        success: function (data) { //données qui sont récupérées 

            var movies = data.Search
            console.log(data);
            console.log(data.totalResults);

            var page = Math.round(data.totalResults / data.Search.length) + 1
            console.log(page);
            for (i = 0; i < movies.length; i++) {

                output += `
                <div class="col-md-3">
                         <p><strong>${movies[i].Title}</strong></p>
                         <img " class="card-img-top"src="${movies[i].Poster}"/>
                         <h3">${movies[i].Year}</h3><br>
                         <h3">${movies[i].Type}</h3><br>                 
                 </div>               
                `
            }

            pagination = '<ul class="pagination">'
            for (let i = 0; i < page; i++) {
                pagination += '<li class="page-item"><a class="page-link" href="' + i + '">' + i + '</a></li>'
            }
            pagination += '</ul>'


            $("#result").html(output).append(pagination)

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
    });
});

