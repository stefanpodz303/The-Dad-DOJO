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

    $(document).on("click","#meat-btn", function(){
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








