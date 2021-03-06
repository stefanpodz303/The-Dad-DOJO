// Dad joke modal and API call
$(document).ready(function(){
      $(document).on("click","#joke-button", function(){
        
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

    // recipe modal and API call
    $(document).on("click","#meat-btn", function(){
        // $("#BBQ-modal").attr("is-active");
        $("#BBQ-modal").addClass("is-active")
        var val = "chicken"
        $("#BBQ-content").empty()
        
     fetch(`https://api.edamam.com/search?q=${val}&app_id=89aa779a&app_key=3d2b1c5b688e900929dbd8f03617b2cf` , {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            return response.json();
        }).then((data) => {
            console.log(data);
            var meatLine = $("<div>") 
            meatLine.attr("id","meat-span")
            meatLine.css("color","rgb(0,0,0)")
            meatLine.text(data.joke)
            $("#BBQ-content").append(meatLine)
                    
            
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
    
$(document).on("click","#mixology-Btn", function(){
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
        var drinkName = data.drinks[0].strDrink;
        var ingName1 = data.drinks[0].strIngredient1;
        var ingName2 = data.drinks[0].strIngredient2;
        var ingName3 = data.drinks[0].strIngredient3;
        var ingName4 = data.drinks[0].strIngredient4;
        var ingMeasure1 = data.drinks[0].strMeasure1;
        var ingMeasure2 = data.drinks[0].strMeasure2;
        var ingMeasure3 = data.drinks[0].strMeasure3;
        var ingMeasure4 = data.drinks[0].strMeasure4;


        var drinkTitle = $("<h3>"); 
        var ingList1 = $("<p>");
        var ingList2 = $("<p>");
        var ingList3 = $("<p>");
        var ingList4 = $("<p>");
        
        drinkTitle.attr("id","mixology-span");
        drinkTitle.css("color","rgb(0,0,0)")
        drinkTitle.text(drinkName);
        
        ingList1.attr("class", "ingredients");
        ingList1.text(ingName1 + ingMeasure1);
        ingList2.attr("class", "ingredients");
        ingList2.text(ingName2 + ingMeasure2);
        ingList3.attr("class", "ingredients");
        ingList3.text(ingName3 + ingMeasure3);
        ingList4.attr("class", "ingredients");
        ingList4.text(ingName4 + ingMeasure4);
        
        $("#Mixology-content").append(drinkTitle);
        $(drinkTitle).append("Ingredients");
        $("Ingredients").append(ingList1);
        $(ingList1).append(ingList2);
        $(ingList2).append(ingList3);
        $(ingList3).append(ingList4);
                
    })
    .catch(err => {
        console.error(err);
    });
})

// $(document).on("click","#mixology-Btn", {
//     getDrink();
// }

$(document).on("click","#cancel-mixology-modal", function(){
    // $("#BBQ-modal").attr("is-active");
    $("#Mixology-modal").removeClass("is-active")
  
})
