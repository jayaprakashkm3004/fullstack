const student = {
    name: "Priya",
    address: {
        city: "Chennai",
        state: "Tamil Nadu"
    }
};

console.log(student.name);

console.log(student.address.city);

//console.log(student.address.state);





const user = {

}; name: "Priya"

const {

name: studentName, city = "Chennai" } = user;

//console.log(studentName); console.log(city);


const first = [1,2,3];
const second = [4,5,6];

const combined = [...first, ...second];

console.log(combined);
const copy = [...combined];
//console.log(copy);


constuser  = {
    name: "Priya",
    address: { city: "Chennai" }
};
console.log(user.address?.city);
console.log(user.contact?.name);
//console.log(user.company?.name);    


const username = null;
const age = 0;
constcity = undefined ;

console.log(username || "Guest");
console.log(age || 18);
//console.log(city ?? "Chennai");






