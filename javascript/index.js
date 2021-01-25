function get_random_dog_image()
{
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert("API failed"));
}

function displayResults(responseJson)
{
    var image = responseJson.message;
    console.log(typeof(image));
    document.getElementById("myImg").src = image;
}

function get_image()
{
  get_random_dog_image();

}
