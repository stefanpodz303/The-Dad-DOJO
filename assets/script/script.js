var recipe = document.getElementById("BBQ-content");
var recipeIndex = 0;
var nextBtn = document.getElementById("next-btn-meat");

var dropdown = document.querySelector(".dropdown");
dropdown.addEventListener("click", function (event) {
    event.preventDefault();
    dropdown.classList.toggle("is-active");
});

// Joke Section .
$(document).on("click", "#joke-btn", function () {
    $("#joke-modal").addClass("is-active");
    var val = "joke";
    $("#joke-content").empty();

    fetch(`https://icanhazdadjoke.com/`, {
        headers: {
            Accept: "application/json",
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            var joke = data.joke;
            //   joke = $("<p>")
            $("#joke-content").text(joke);

            //   $("#joke-content").append(joke)
        })
        .catch((err) => {
            console.error(err);
        });
});

$(document).on("click", "#next-btn-joke", function () {
    $("#joke-modal").addClass("is-active");
    var val = "joke";
    $("#joke-content").empty();

    fetch(`https://icanhazdadjoke.com/`, {
        headers: {
            Accept: "application/json",
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            var joke = data.joke;
            $("#joke-content").text(joke);
        })
        .catch((err) => {
            console.error(err);
        });
});

$(document).on("click", "#cancel-joke-modal", function () {
    $("#joke-modal").removeClass("is-active");
});

$(document).on("click", "#cancel-bbq-modal", function () {
    $("#BBQ-modal").removeClass("is-active");
});

//Meat Section !
function getBBQ() {
    $("#BBQ-modal").addClass("is-active");
    var val = "barbeque";

    $("#BBQ-content").empty();

    fetch(
        `https://api.edamam.com/search?q=${val}&app_id=89aa779a&app_key=3d2b1c5b688e900929dbd8f03617b2cf`,
        {
            headers: {
                Accept: "application/json",
            },
        }
    )
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            console.log(data.hits[recipeIndex].recipe.url);
            var imageBBQ = $("<img />").attr({
                src: data.hits[recipeIndex].recipe.image,
                width: 200,
                height: 200,
            });
            var bbqUrl = $("<a/>");
            bbqUrl.text("Click here for Recipe");
            bbqUrl.attr("href", data.hits[recipeIndex].recipe.shareAs);
            bbqUrl.attr("target", "_blank");
            console.log(bbqUrl.attr("href"));

            // 'width': 200,
            // 'height': 200,
            // })
            var bbqName = data.hits[recipeIndex].recipe.label;
            
            // var bbqUrl = data.hits[0].recipe.shareAs;
            var bbqNameArea = $("<div>");
            var bbqLabel = $("<h2>");
            bbqLabel.text(bbqName);
            bbqNameArea.append(bbqLabel);
            var bbqWrap = $("<div>");

            $("#BBQ-content").append(bbqNameArea);
            

            bbqWrap.append(bbqUrl);

            $("#BBQ-content").append(bbqWrap);
            bbqNameArea.append(imageBBQ);

            //  = `${data.hits[0].recipe.image[0]}`;
            // recipe.textContent = data.hits[0].recipe.image[0];
           
            // imageBBQ.insertAfter(bbqLink);
            // recipe.textContent = `${data.hits[0].recipe.ingredients}`
        })
        .catch((err) => {
            console.error(err);
        });
}


$(document).on("click", "#meat-btn", function () {
    getBBQ()
})
$(document).on("click", "#cancel-meat-modal", function () {
    // $("#BBQ-modal").attr("is-active");
    $("#BBQ-modal").removeClass("is-active")

})

function getNextRecipe() {
    recipeIndex++;
    console.log(recipeIndex);
    getBBQ();
}

nextBtn.onclick = getNextRecipe


// mixology modal and API call
function getDrink() {

    $("#Mixology-modal").addClass("is-active");
    $("#Mixology-content").empty();
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
            // code to pull the values from the API call
            var drinkName = data.drinks[0].strDrink;

            var instructions = data.drinks[0].strInstructions;

            var image = $("<img />").attr({
                'src': data.drinks[0].strDrinkThumb,
                'width': 200,
                'height': 200,
            })
            // creating elements to display may data within the modal
            var drinkTitle = $("<h1>");
            var ingredientEl = $("<h3>");
            var instructionsEl = $("<h3>");
            var instructionData = $("<p>");

            //setting values of each element and assinging id or class
            ingredientEl.text("Ingredients");
            ingredientEl.attr("id", "ingHeader");

            instructionsEl.text("Instructions");
            instructionsEl.attr("id", "instructionsHeader")

            instructionData.text(instructions);
            instructionData.attr("id", "instructionData")

            drinkTitle.attr("id", "mixology-span");
            drinkTitle.css("color", "rgb(0,0,0)")
            drinkTitle.text(drinkName);


            $("#Mixology-content").append(drinkTitle);
            $("#Mixology-content").append(ingredientEl);

            for (var i = 1; i < 16; i++) {
                var ingName = data.drinks[0]["strIngredient" + i];
                var ingMeasure = data.drinks[0]["strMeasure" + i];
                if (ingName !== null) {
                    var ingList = $('<p>');
                    ingList.attr("class", "ingredients");
                    var ingText = ingName;
                    if (ingMeasure !== null) {
                        ingText = ingText + " " + ingMeasure;
                    }
                    ingList.text(ingText);
                    $("#Mixology-content").append(ingList);
                }
            }
            $("#Mixology-content").append(instructionsEl);
            $("#Mixology-content").append(instructionData);
            $("#Mixology-content").append(image);


        })
        .catch((err) => {
            console.error(err);
        });
}

$(document).on("click", "#mixology-Btn", function () {
    getDrink();
});
$(document).on("click", "#new-Drink-Btn", function () {
    getDrink();
});
$(document).on("click", "#favorite-btn", function () {
    $("#favorite-modal").addClass("is-active");
    $("#favorite-content").getItem;
});

$(document).on("click", "#cancel-mixology-modal", function () {
    $("#Mixology-modal").removeClass("is-active")
})

$(document).on("click", "#mixology-close-icon", function () {
    $("#Mixology-modal").removeClass("is-active")
})

// localStorage.setItem(meatLine,data.joke)
$(document).on("click", "#favorite-btn", function () {
    $("#favorite-modal").addClass("is-active")
    $("#favorite-content").getItem;
})

$(document).on("click", "#close", function () {
    $("#favorite-modal").removeClass("is-active");
});

function getNextRecipe() {
    recipeIndex++;
    console.log(recipeIndex);
    getBBQ();
}
nextBtn.onclick = getNextRecipe;
$(document).on("click", "#favorite-btn", function () {
    displaySavedData();
})

$(document).on("click", "#closeFav", function () {
    $("#favorite-modal").removeClass("is-active")

})
// code for local storage of each section

$(document).on("click", "#save-Drink-Btn", function () {
    let savedHtmlDrink = $("#Mixology-content").html();
    console.log(savedHtmlDrink);
    let localDrinkArr = JSON.parse(localStorage.getItem("Saved-Drink")) || [];
    localDrinkArr.push(savedHtmlDrink)
    localStorage.setItem("Saved-Drink", JSON.stringify(localDrinkArr));
    // displaySavedDrinks()
})

$(document).on("click", "#save-meat-btn", function () {
    let savedHtmlMeat = $("#BBQ-content").html();
    console.log(savedHtmlMeat);
    let localMeatArr = JSON.parse(localStorage.getItem("Saved-Meat")) || [];
    localMeatArr.push(savedHtmlMeat)
    localStorage.setItem("Saved-Meat", JSON.stringify(localMeatArr));
})

$(document).on("click", "#fav-joke-btn", function () {
    let savedHtmlJoke = $("#joke-content").html();
    console.log(savedHtmlJoke);
    let localJokeArr = JSON.parse(localStorage.getItem("Saved-Joke")) || [];
    localJokeArr.push(savedHtmlJoke)
    localStorage.setItem("Saved-Joke", JSON.stringify(localJokeArr));
})


//code to display data in the favorites modal
function displaySavedData() {
     $("#savedDrinks").html("");
    let localDrinkArr = JSON.parse(localStorage.getItem("Saved-Drink")) || [];
    localDrinkArr.forEach(val => {
       

        $("#savedDrinks").append(val)
    })
    $("#savedRecipes").html("");
    let localMeatArr = JSON.parse(localStorage.getItem("Saved-Meat")) || [];
    localMeatArr.forEach(val => {
        
        $("#savedRecipes").append(val)
    })
    $("#savedJokesDiv").html("");
    let localJokeArr = JSON.parse(localStorage.getItem("Saved-Joke")) || [];
    localJokeArr.forEach(val => {
        
        var pTag = $(`
            <p>${val}</p>
        `)

        $("#savedJokesDiv").append(pTag);
    })
}
