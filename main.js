
document.getElementById('getData').addEventListener('click', getTheData)

const apiURL = 'https://www.themealdb.com/api/json/v1/1/random.php'

function getTheData() {
    console.log('This button was pressed.. here is your data')

    fetch(apiURL)
        .then(function (response) {
            // console.log(response.json());
            return (response.json());
        })
        .then(function(data){
            console.log(data);
            let receipe = data.meals[0].strIngredient1
            document.getElementById('myRecipe').innerHTML = receipe
            let foodImage = data.meals[0].strMealThumb
            document.getElementById('theImage').src = foodImage
        })
}