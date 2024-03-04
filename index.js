
// ============================= Chapter-2 Variables for Strings ============================

// Q1-declare a variable called username;
let userName ;

// Q2-Declare a variable called myName & assign to it a string that represents your Full Name.
let myName = 'Muhammad Ali';

// Q3-
let message = 'Hello World'
alert(message);

// Q4-
let studentsName = 'John Doe';
let studentAge = '15 years Old';
let studentJob = 'Certified Mobile Application Development';
alert(studentsName);
alert(studentAge);
alert(studentJob);

// Q5-
let pizzaTriangle = `                                               PIZZA
                                               PIZZ
                                               PIZ
                                               PI
                                               P`
alert(pizzaTriangle);

// Q6-
let email = 'ali.civiltech@gmail.com';
let emailMessage = `My email address is ${email}`;
alert(emailMessage);

// Q7-
let book = '“A smarter way to learn JavaScript”.';
alert('I am trying to learn Javascript from the Book '+book);

// Q8-
document.write('<h1>Yah! I can write HTML content through Javascript.</h1>');

// Q9-
alert('“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”');


// ============================= Chapter-3 Variables for Numbers ============================
// Q1
let age =30;
alert('I am '+age+' years old.');

// Q2
let n = 14;
alert(`You have visited this webpage ${n} times.`);

// Q3
let myBirthYear = 1993;
let typeBirth = typeof myBirthYear;
document.write(`<h1>My Birth Year is ${myBirthYear}. \nData type of my declared variable is ${typeBirth}.</h1>`)

// Q4
let visitorName = 'John Doe';
let productTitle = 'T-shirt';
let quantity = '5';
let clothingStore = 'YZ-Shop';
document.write(`<b>${visitorName}</b> ordered <b>${quantity + productTitle}</b>(s) on <b>${clothingStore}</b>. `);
