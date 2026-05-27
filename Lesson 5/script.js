const birthDate = new Date("2010-05-28");

const currentDate = new Date();


age = currentDate.getFullYear() - birthDate.getFullYear();

monthDiffer = currentDate.getMonth() - birthDate.getMonth();

if (monthDiffer < 0 || (monthDiffer === 0 && currentDate.getDate() < birthDate.getDate())){
    age--;
}




console.log(age)

if (age < 18){
    console.log('You are just '+ age+ " so you cant drive")
}