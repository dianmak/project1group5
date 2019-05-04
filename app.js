
$(".dropdown-item").click(function () {
    state = $(this).text();
    query = "https://cors-anywhere.herokuapp.com/https://api.usa.gov/crime/fbi/sapi/api/data/nibrs/robbery/offense/states/" + state + "/count?api_key=CMQzjoaW3P43pwPkMnWzLcqwhlVQXZcJeo8rrktf";
    console.log(query);

    $.ajax({
        url: query,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        $(".robbery").html(
            "<h2> Robbery </h2> <h3> Incident Count " + response.results[response.results.length - 1].incident_count + "</h3>"
            + "<h3> Offense Count " + response.results[response.results.length - 1].offense_count + "</h3>" +
            "<h3> Year " + response.results[response.results.length - 1].data_year + "</h3>");
    })

    $.ajax({
        url: "https://api.usa.gov/crime/fbi/sapi/api/data/nibrs/rape/offense/states/MA/count?api_key=CMQzjoaW3P43pwPkMnWzLcqwhlVQXZcJeo8rrktf",
        method: "GET"
    }).then(function (response) {

        console.log(response);
        // console.log(url);
        // console.log(response);
        console.log(response.results.length)

        $(".rape").html(
            "<h3>" + response.results[response.results.length - 1].incident_count + "</h3>"
        );

        $(".offense_count").text("<h3>" + response.results[response.results.length - 1].offense_count + "</h3>");
        $(".data_year").text("<h3>" + response.results[response.results.length - 1].data_year + "</h3>");
    });
});

