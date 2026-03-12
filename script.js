```javascript
function addRecommendation() {

  const recommendationText = document.getElementById("new_recommendation").value.trim();

  // Prevent empty recommendations
  if (recommendationText === "") {
    alert("Please enter a recommendation before submitting.");
    return;
  }

  // Create recommendation box
  const newRecommendation = document.createElement("div");
  newRecommendation.className = "recommendation";

  newRecommendation.innerHTML =
    "<span>&#8220;</span>" + recommendationText + "<span>&#8221;</span>";

  // Add recommendation to the page
  document
    .getElementById("all_recommendations")
    .appendChild(newRecommendation);

  // Clear textarea
  document.getElementById("new_recommendation").value = "";

  // Show popup
  showPopup(true);
}

function showPopup(show) {

  const popup = document.getElementById("popup");

  if (show) {
    popup.style.visibility = "visible";
  } else {
    popup.style.visibility = "hidden";
  }

}
```
