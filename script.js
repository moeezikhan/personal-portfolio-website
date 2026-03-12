function addRecommendation() {

    var recommendation = document.getElementById("new_recommendation").value;
  
    var newRecommendation = document.createElement("div");
    newRecommendation.className = "recommendation";
  
    newRecommendation.innerHTML = "<span>&#8220;</span>" + recommendation + "<span>&#8221;</span>";
  
    document.getElementById("all_recommendations").appendChild(newRecommendation);
  
    document.getElementById("new_recommendation").value = "";
  
    showPopup(true);   // this line shows the popup
  }

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}
