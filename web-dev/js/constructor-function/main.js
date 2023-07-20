/* 
- Names have to be capitalized in camelCase including the first word 
- Include number of inputs -> when creating new object
*/

function BellBoy(name, age, hasWorkPermit, languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
}

const ballBoy1 = new BellBoy("Timmy", 19, true, ["French", "English"]);

console.log("ballBoy1: ", ballBoy1);

function HouseKeeper(yearsOfExperience, name, cleaningReportoire) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningReportoire = cleaningReportoire;
};

const houseKeeper1 = new HouseKeeper(12, "Jane", ["bathroom", "lobby", "bedroom"]);

console.log("houseKeeper1: ", houseKeeper1);

