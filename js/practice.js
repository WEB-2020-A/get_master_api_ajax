$(document).ready(() => {
    requestApi();
});

// request api function

var requestApi = () => {
    $.ajax({
        dataType: 'json',
        url: getUrl(),
        success: (data) => getRecipe(data),
        error: () => console.log("error"),
    });
}

// get url

var getUrl = () => {
    var url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    return url;
}

// getRecipe 

var getRecipe = (myData) =>{
    myData.recipes.forEach(element => {
        // get recipe : element.name...
        getIngredient(element.ingredients)
    });
}
// get ingredient 
var getIngredient = (ing) =>{
    ing.forEach(item =>{
        // console.log(item);
        computeHtml(item);
    });
}

// compute to html 

var computeHtml = (display) =>{
    var compute = "";
    compute +=`
    <tr>
        <td><img src ="${display.iconUrl}" style ="width: 100px"></td>
        <td>${display.name}</td>
        <td>${display.quantity}</td>
        <td>${display.unit[0]}</td>
        </tr>
    `;
    printOut(compute);
}

// print out

printOut = (out) =>{
    $("#ingredient").append(out);
}