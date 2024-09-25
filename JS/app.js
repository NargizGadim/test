let scotland = {
    countryName: "Scotland",
    capitalCity: "Edinburgh",
    population: 5000000,
    budget: 819000000000,
    borderCountries: ["England"],
    getGDP: function () {
        this.countryGDP = (this.population + 0.5 * this.population) / this.budget;
        console.log(`Sərhəd ölkələrindən biri ${scotland.borderCountries}, paytaxtı ${scotland.capitalCity}, əhalisi ${scotland.population}, GDP-si ${scotland.countryGDP} olan${scotland.countryName} inkişaf etməkdədir.`);
    }
};

let azerbaijan = {
    countryName: "Azerbaijan",
    capitalCity: "Baku",
    population: 10000000,
    budget: 330000000000,
    borderCountries: ["Russia", "Georgia", "Armenia", "Turkey", "Iran"],
    getGDP: function () {
        this.countryGDP = (this.population + 0.5 * this.population) / this.budget;
        console.log(`Sərhəd ölkələrindən biri ${azerbaijan.borderCountries[0]}, paytaxtı ${azerbaijan.capitalCity}, əhalisi ${azerbaijan.population}, GDP-si ${azerbaijan.countryGDP} olan ${azerbaijan.countryName} inkişaf etməkdədir.`);
    }
};

scotland.getGDP();
azerbaijan.getGDP();


