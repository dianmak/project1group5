
$(".state").click(function () {
    state = $(this).text();
    var queryRobbery = "https://cors-anywhere.herokuapp.com/https://api.usa.gov/crime/fbi/sapi/api/data/nibrs/robbery/offense/states/" + state + "/count?api_key=CMQzjoaW3P43pwPkMnWzLcqwhlVQXZcJeo8rrktf";

    $.ajax({
        url: queryRobbery,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        $(".robbery").html(
            "<h2> Robbery </h2> <h3> Incident Count " + response.results[response.results.length - 1].incident_count + "</h3>"
            + "<h3> Offense Count " + response.results[response.results.length - 1].offense_count + "</h3>" +
            "<h3> Year " + response.results[response.results.length - 1].data_year + "</h3>");
    })

    var queryRape = "https://cors-anywhere.herokuapp.com/https://api.usa.gov/crime/fbi/sapi/api/data/nibrs/rape/offense/states/" + state + "/count?api_key=CMQzjoaW3P43pwPkMnWzLcqwhlVQXZcJeo8rrktf"

    $.ajax({
        url: queryRape,
        method: "GET"
    }).then(function (response) {

        console.log(response);
        // console.log(url);
        // console.log(response);
        console.log(response.results.length)

        $(".rape").html(
            "<h2> Rape </h2> <h3> Incident Count " + response.results[response.results.length - 1].incident_count + "</h3>"
            + "<h3> Offense Count " + response.results[response.results.length - 1].offense_count + "</h3>" +
            "<h3> Year " + response.results[response.results.length - 1].data_year + "</h3>");
    });
});

$("#submit").click(function () {

});

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://csa-proxy.herokuapp.com/flights/BOS/SDQ/2019-06-01",
    "method": "GET",
    "headers": {
        "Accept": "application/json",
        "Authorization": "Bearer ",
    }
}
$.ajax(settings).done(function (response) {
    console.log(response);
}).then(function (test) {
    console.log(test.ScheduleResource.Schedule[0]);

    $("#flightData").html(`
    <h3> Arrival Airport: ${test.ScheduleResource.Schedule[0].Flight.Arrival.AirportCode} </h3>
    <h3> Arrival Time: ${test.ScheduleResource.Schedule[0].Flight.Arrival.ScheduledTimeLocal.DateTime} </h3>
    <h3> Departure Airport: ${test.ScheduleResource.Schedule[0].Flight.Departure.AirportCode} </h3>
    <h3> Departure Time: ${test.ScheduleResource.Schedule[0].Flight.Departure.ScheduledTimeLocal.DateTime} </h3>
    `)
})


