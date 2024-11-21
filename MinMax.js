

let arr=[5,6,-7,8,9,10];
let min=arr[0];
let max=arr[0];
for(let i=0;i<arr.length;i++)
{
  min=Math.min(min,arr[i]);
  max=Math.max(max,arr[i]);
  
}
console.log("Minimum",min);
  console.log("Maximum",max);