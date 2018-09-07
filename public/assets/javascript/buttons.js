$("#Submit").on("click", function() {
    console.log("stuff");
    event.preventDefault()
    var burgerObj = {
        burger_name: $("#input").val().trim(),
        devoured: 0
    }
    $.ajax({
        url: "/api/burger",
        method: "POST",
        data: burgerObj
    }).then(function(response) {
        console.log(response)
    }) 
})

$(".devoured").on("click", function() {
    event.preventDefault();
    var burgerUpdate = {
        devoured: 1
    }
    var burgerID = $(this).attr("dataid")
    $.ajax({
        url: '/api/burger/'+burgerID,
        method: 'POST',
        data: burgerUpdate
    }).then(function(response) {
        console.log(response)
    }) 
})
