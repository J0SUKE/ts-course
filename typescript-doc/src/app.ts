// desctructuring 

function sheer({name,age,email}:{name:string,age:number,email:string})
{
    console.log(`Hi I am ${name} of email : ${email} and i am ${age}`);
}

interface User
{
    name:string;
    age:number;
    email:string;
}

function Cheer2({name,age,email}:User) {
    console.log(`Hi I am ${name} of email : ${email} and i am ${age}`);   
}