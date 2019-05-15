var oReqPeople = new XMLHttpRequest();

    oReqPeople.addEventListener("load", getPeopleData);
    oReqPeople.open("GET", "https://swapi.co/api/people/");
    oReqPeople.send();

function getPeopleData(){
    var data = JSON.parse(this.responseText);
for(var i = 0; i < 4; i++){
    var person = document.createElement("ul");
    person.innerHTML = data.results[i].name;

    peopleResult.appendChild(person);

    var height = document.createElement("li");
    height.innerHTML = data.results[i].height;

    peopleResult.appendChild(height);

    var mass = document.createElement("li");
    mass.innerHTML = data.results[i].mass;

    peopleResult.appendChild(mass);

    var birthYear = document.createElement("li");
    birthYear.innerHTML = data.results[i].birthYear;

    peopleResult.appendChild(birthYear);

    var gender = document.createElement("li");
    gender.innerHTML = data.results[i].gender;

    peopleResult.appendChild(gender);
}
    data.results[0].name;
}
var oReqPlanets = new XMLHttpRequest();

    oReqPlanets.addEventListener("load", getPlanetData);
    oReqPlanets.open("GET", "https://swapi.co/api/planets/1/");
    oReqPlanets.send();

function getPlanetData(){
    var data = JSON.parse(this.responseText);
for(var i = 0; i < 4; i++){
    var planet = document.createElement("ul");
    planet.innerHTML = data.results[i].name;

    planetResult.appendChild(planet);

    var rotation = document.createElement("li");
    rotation.innerHTML = data.results[i].rotation;

    planetResult.appendChild(name);

    var orbital = document.createElement("li");
    orbital.innerHTML = data.results[i].orbital;

    planetResult.appendChild(orbital);

    var diameter = document.createElement("li");
    diameter.innerHTML = data.results[i].diameter;

    planetResult.appendChild(diameter);

    var climate = document.createElement("li");
    climate.innerHTML = data.results[i].climate;

    peopleResult.appendChild(climate);
}
    data.results[0].name;
}