
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
            "<h3> Incident Count" + response.results[response.results.length - 1].incident_count + "</h3>"
            + "<h3> Offense Count" + response.results[response.results.length - 1].offense_count + "</h3>" +
            "<h3> Year" + response.results[response.results.length - 1].data_year + "</h3>");
    })
});

