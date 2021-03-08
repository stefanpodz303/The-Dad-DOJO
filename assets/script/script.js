// Dad joke modal and API call
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
    
// $(document).on("click","#mixology-Btn","#next-btn-mix", function(){
//     $("#Mixology-modal").addClass("is-active")
//     $("#Mixology-content").empty()
    
    
//             fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php", {
//                 "method": "GET",
//                  headers: {
//                  'Accept': 'application/json'
//         }
//     })
//     .then(response => {
//         console.log(response);
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//         var mixologyLine = $("<div>") 
//         mixologyLine.attr("id","mixology-span")
//         mixologyLine.css("color","rgb(0,0,0)")
//         mixologyLine.text(data.drinks[0])
//         mixologyLine.text()
//         $("#Mixology-content").append(mixologyLine)
//         $('#Mixology-content').append
                
//     })
//     $(document).on("click","#cancel-mixology-btn", function(){
//         // $("#BBQ-modal").attr("is-active");
//         $("#BBQ-modal").removeClass("is-active")
      
//     })
//     .catch(err => {
//         console.error(err);
//     });
// })
// $(document).on("click","#favorite-btn", function(){
//     $("#favorite-modal").addClass("is-active")
//     $("#favorite-content").getItem;
// })
$(document).on("click","#mixology-Btn", function(){
    getDrink();
})

$(document).on("click","#new-Drink-Btn", function(){
    getDrink();
})
    
    function getDrink(){
    $("#Mixology-modal").addClass("is-active")
   
var ingredientEntry = $('#ingredient-input').val();
    $("#Mixology-content").empty()
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php", {

        // fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingredientEntry, {
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
        var ingName5 = data.drinks[0].strIngredient5;
        var ingName6 = data.drinks[0].strIngredient6;

        var ingMeasure1 = data.drinks[0].strMeasure1;
        var ingMeasure2 = data.drinks[0].strMeasure2;
        var ingMeasure3 = data.drinks[0].strMeasure3;
        var ingMeasure4 = data.drinks[0].strMeasure4;
        var ingMeasure5 = data.drinks[0].strMeasure5;
        var ingMeasure6 = data.drinks[0].strMeasure6;

        var instructions = data.drinks[0].strInstructions;

        var image = $("<img />").attr ({
            'src': data.drinks[0].strDrinkThumb,
            'width': 200,
            'height': 200,
        })
        
        

        var drinkTitle = $("<h1>"); 
        var ingredientEl = $("<h3>");
        var ingList1 = $("<p>");
        var ingList2 = $("<p>");
        var ingList3 = $("<p>");
        var ingList4 = $("<p>");
        var ingList5 = $("<p>");
        var ingList6 = $("<p>");
        var instructionsEl = $("<h3>");
        var instructionData = $("<p>");
        

        ingredientEl.text("Ingredients");
        ingredientEl.attr("id", "ingHeader");

        instructionsEl.text("Instructions");
        instructionsEl.attr("id", "instructionsHeader")

        instructionData.text(instructions);
        instructionData.attr("id", "instructionData")
        
        drinkTitle.attr("id","mixology-span");
        drinkTitle.css("color","rgb(0,0,0)")
        drinkTitle.text(drinkName);
        
        ingList1.attr("class", "ingredients");
        ingList1.text(ingName1 +" -- " + ingMeasure1);
        ingList2.attr("class", "ingredients");
        ingList2.text(ingName2 +" -- " + ingMeasure2);
        ingList3.attr("class", "ingredients");
        ingList3.text(ingName3 +" -- " + ingMeasure3);
        ingList4.attr("class", "ingredients");
        ingList4.text(ingName4 +" -- " + ingMeasure4);
        ingList5.attr("class", "ingredients");
        ingList5.text(ingName5 +" -- " +ingMeasure5);
        ingList6.attr("class", "ingredients");
        ingList6.text(ingName6 +" -- " +ingMeasure6);

        $("#Mixology-content").append(drinkTitle);
        $(drinkTitle).append(ingredientEl);
        $(ingredientEl).append(ingList1);
        $(ingList1).append(ingList2);
        $(ingList2).append(ingList3);
        $(ingList3).append(ingList4);
        $(ingList4).append(ingList5);  
        $(ingList5).append(ingList6); 
        // $(ingList6).append(image);
        // $(image).append(instructionsEl);
        $(ingList6).append(instructionsEl); 
        $(instructionsEl).append(instructionData);
        // $(instructionData).append(image);
        $(image).insertAfter(instructionData);
    })
    .catch(err => {
        console.error(err);
    });
}

// $(document).on("click","#mixology-Btn", {
//     getDrink();
// }

$(document).on("click","#cancel-mixology-modal", function(){
    // $("#BBQ-modal").attr("is-active");
    $("#Mixology-modal").removeClass("is-active")
  
})

