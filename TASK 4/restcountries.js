var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload = function () {

    var data = JSON.parse(this.response);
    console.log(data);

    //1.Get all the countries from Asia continent /region using Filter function 
        const continent = data.filter ( (A) => (A.region === 'Asia'));
        console.log(continent);  



    //2.Get all the countries with population of less than 2 lacs using Filter function
        const population = data.filter ( (P) => (P.population < 200000 ));
        console.log(population);



    //3.Print the following details name, capital, flag using forEach function.
        data.forEach(demo)
        function demo(element){
        console.log("Name:"+element.name)
        console.log("Capital:"+ element.capital)
        console.log("flag:"+ element.flag)
        }



    //4.Print the total population of countries using reduce function
        let totalPopulation = data.reduce((acc,element) => {
        return acc + element.population;
        }, 0);
        console.log(totalPopulation);


        
    //5.Print the country which use US Dollars as currency
        const usd_curr = data.filter((item) => {
        let flag = false;
        item.currencies.forEach(element => {
            if(element.code==='USD'){
                flag = true;
            }
        })
        if(flag == true){
            return true
        }else{
            return false
        }
        });
        console.log(usd_curr);
        
}
