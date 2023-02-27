
    // Trae la información de randomuser
    const url =' https://randomuser.me/api/ ';
    fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateProfile)
    .catch(printError)  

    function handleErrors (res){
        if(!res.ok){
        throw error(res.status);
        }
        console.log(res);
        return res;
    }
    function parseJSON (res){
        return res.json();
    }
    function updateProfile (profile){
        document.getElementById('avatar').src = profile.results[0].picture.large;
        document.getElementById('fullname').innerHTML = profile.results[0].name.first +" "+profile.results[0].name.last; 
        document.getElementById('age').innerHTML = profile.results[0].dob.age; 
        document.getElementById('city').innerHTML = profile.results[0].location.state + ", " + profile.results[0].location.country;
        document.getElementById('cell').innerHTML = profile.results[0].cell;
        document.getElementById('fullname-bottom').innerHTML = profile.results[0].name.first +" "+profile.results[0].name.last;
        document.getElementById('address-bottom').innerHTML = profile.results[0].location.street.name + ", " + profile.results[0].location.street.number;
        document.getElementById('cell-bottom').innerHTML = profile.results[0].cell;
        document.getElementById('email-bottom').href= "mailto:" + profile.results[0].email;
        document.getElementById('email-bottom1').innerHTML= profile.results[0].email;
        return 1;
    }
    function printError (error){
        console.log(error);
    }