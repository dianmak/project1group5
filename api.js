
$.ajax({
    url: "https://cors-anywhere.herokuapp.com/https://api.usa.gov/crime/fbi/sapi/api/data/nibrs/robbery/offense/states/MA/count?api_key=CMQzjoaW3P43pwPkMnWzLcqwhlVQXZcJeo8rrktf",
    method: "GET"
}).then(function (response) {
    console.log(response);


    // console.log(url);

    // console.log(response);
    console.log(response.results.length)

    $(".incident-count").html("<h3>" + response.results[response.results.length - 1].incident_count + "</h3>");

    $(".offense-count").html("<h3>" + response.results[response.results.length - 1].offense_count + "</h3>");
    $(".year").html("<h3>" + response.results[response.results.length - 1].data_year + "</h3>");

})

