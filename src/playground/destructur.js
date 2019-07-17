const person = {
    name: 'Oscar',
    age: 29,
    location: {
        city: 'Mexico',
        temp:18
    }
};

//object destructuring, age se renombró, el valor de name es default por si no existe en el objeto
const { name = 'cosa', age: edad, location: direccion = "lugar"  } = person;

// const name = person.name;
// const age = person.age;

console.log(`${name} is ${edad}`);
console.log(`It's ${direccion.city}`);

//array destructuring
const numArray = ['1', '2', '3', '4'];

//const [ num1, num2, num3, num4 ] = numArray;


//si solo quieres ciertos valores del array y no todos, pones un coma y se salta el valor del array 
const [ , num2, , num4 ] = numArray;

console.log(`numeros ${num2} y ${num4}`);