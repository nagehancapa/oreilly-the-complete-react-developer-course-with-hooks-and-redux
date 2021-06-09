var nameVar = "Nagehan";
var nameVar = "Ada";
console.log("nameVar", nameVar);

let nameLet = "Birol";
nameLet = "Capa";
console.log("nameLet", nameLet);

const nameConst = "Frank";
console.log("nameConst", nameConst);

function getPetName() {
  var petName = "Hal";
  return petName;
}

const petName = getPetName();
console.log(petName);

const fullName = "Nagehan Capa";
if (fullName) {
  const firstName = fullName.split(" ")[0];
  console.log(firstName);
}
