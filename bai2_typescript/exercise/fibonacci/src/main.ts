const count:number = 10;
let n1:number = 0;
let n2:number= 1;
let n3:number;
for (let i = 1; i <= count; i++) {
    console.log(n1);
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
}
