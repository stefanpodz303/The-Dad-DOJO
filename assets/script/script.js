$(document).ready(function(){
      $(document).on("click","#joke-button","#next-btn-meat", function(){
        
        $("#joke").empty()
                fetch("https://icanhazdadjoke.com/", {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            console.log(response);
            return response.json();
        }).then((data) => {
            var jokeLine = $("<div>") 
            jokeLine.attr("id","joke-span")
            jokeLine.css("color","rgb(255,255,255)")
            jokeLine.text(data.joke)
            $("#joke").append(jokeLine)
                    
            
        })
        .catch(err => {
            console.error(err);
        });
    })

    $(document).on("click","#meat-btn","#next-btn-meat", function(){
        // $("#BBQ-modal").attr("is-active");
        $("#BBQ-modal").addClass("is-active")

        $("#BBQ-content").empty()
        
                        fetch("https://icanhazdadjoke.com/", {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            console.log(response);
            return response.json();
        }).then((data) => {
            var meatLine = $("<div>") 
            meatLine.attr("id","meat-span")
            meatLine.css("color","rgb(0,0,0)")
            meatLine.text(data.joke)
            $("#BBQ-content").append(meatLine)
                    
            localStorage.setItem(meatLine,data.joke)

        })
        .catch(err => {
            console.error(err);
        });
    })

    $(document).on("click","#cancel-meat-modal", function(){
        // $("#BBQ-modal").attr("is-active");
        $("#BBQ-modal").removeClass("is-active")
      
    })
})

// mixology modal and API call
// function getDrink() {
    
$(document).on("click","#mixology-Btn","#next-btn-mix", function(){
    $("#Mixology-modal").addClass("is-active")
    $("#Mixology-content").empty()
    
    
                    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php", {
                        "method": "GET",
                    headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        console.log(response);
        return response.json();
    }).then((data) => {
        console.log(data);
        var mixologyLine = $("<div>") 
        mixologyLine.attr("id","mixology-span")
        mixologyLine.css("color","rgb(0,0,0)")
        mixologyLine.text(data.drinks[0])
        mixologyLine.text()
        $("#Mixology-content").append(mixologyLine)
        $('#Mixology-content').append
                
    })
    $(document).on("click","#cancel-mixology-btn", function(){
        // $("#BBQ-modal").attr("is-active");
        $("#BBQ-modal").removeClass("is-active")
      
    })
    .catch(err => {
        console.error(err);
    });
})
$(document).on("click","#favorite-btn", function(){
    $("#favorite-modal").addClass("is-active")
    $("#favorite-content").getItem;
})






























