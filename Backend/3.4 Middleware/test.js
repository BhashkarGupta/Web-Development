import { dirname } from "path";
import { fileURLToPath } from "url";

const variable1 = import.meta.url;
const variable2 = fileURLToPath(variable1);
const variable3 = dirname(fileURLToPath(import.meta.url));

console.log(variable1);
console.log(variable2);
console.log(variable3);


