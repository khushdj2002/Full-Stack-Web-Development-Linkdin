// console.log(process.pid);
// console.log(process.version.node);
// console.log(process.argv);


const grab = flag=>{
    let indexAfterFlag = process.argv.indexOf(flag)+1;
    return process.argv[indexAfterFlag];
}

const greet = grab("--greet");
const user = grab("--user");

console.log(`${greet} ${user}`);

// node globalProcess  --user ned  --greet "Hii"