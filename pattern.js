let emp_data = [
  
	{name: "Nrupul", age: 32,PhoneNumber:12345,BordMarks:32},
	{name: "Prateek" , age: 30,PhoneNumber:54321,BordMarks:40},
	{name: "Aman" , age: 26,PhoneNumber:12356,BordMarks:50},
	{name: "Albert" , age: 28,PhoneNumber:12875,BordMarks:20},
	{name: "Yogesh" , age: 44,PhoneNumber:21345,BordMarks:60},

];

for (let i = 0; i <= emp_data.length - 1; i++) {

  if (emp_data[i]["BordMarks"]>=40) {
    console.log(emp_data[i]["name"] +" is Eligible");
  }
  else {
    console.log(emp_data[i]["name"] +" not Eligible");
    
  }

}