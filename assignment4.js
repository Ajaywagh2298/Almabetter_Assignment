const prompt = require('prompt-sync')();
// Javascript Objects and JSON

/*
TODO: User Full Name
Given an object user . Return the full name of the user.
Example 1:
Input:
{ "name":{ "firstName":"Almabetter", "lastName":"Courses" } }
Output:
Almabetter Courses
 */

const user = {
    name: {
        firstName: "Almabetter",
        lastName: "Courses"
    }
};

function getFullName(user) {
    return user.name.firstName + " " + user.name.lastName;
}

console.log(getFullName(user));

/*
TODO: Nested Objects using map()
Given an array user having multiple object . Return full name as Name along with the subject marks as Marks for each students as an array of objects.User and subject name will be passed as argument and subject name will be taken as input.
user = [ { "firstName":"Raghu", "lastName":"Anand", "marks":{ "Maths":98, "Science":64, "Hindi":90 } }, { "firstName":"Ram", "lastName":"Singh", "marks":{ "Maths":99, "Science":72, "Hindi":94 } }, { "firstName":"Shayam", "lastName":"Sharma", "marks":{ "Maths":80, "Science":80, "Hindi":70 } } ]
Example 1:
Input:
Maths
Output:
[ { Name: 'Raghu Anand', Marks: 98 }, { Name: 'Ram Singh', Marks: 99 }, { Name: 'Shayam Sharma', Marks: 80 } ]
 */

const users = [
    {
        firstName: "Raghu",
        lastName: "Anand",
        marks: {
            Maths: 98,
            Science: 64,
            Hindi: 90
        }
    },
    {
        firstName: "Ram",
        lastName: "Singh",
        marks: {
            Maths: 99,
            Science: 72,
            Hindi: 94
        }
    },
    {
        firstName: "Shayam",
        lastName: "Sharma",
        marks: {
            Maths: 80,
            Science: 80,
            Hindi: 70
        }
    }];

function getMarks(user, subject) {
    return users.map((item) => {
        return {
            Name: item.firstName + " " + item.lastName,
            Marks: item.marks[subject]
        }
    });
}

const subject = prompt("Enter subject name: ");
console.log(getMarks(users, subject));

/*
Destructuring Syntax
Hard
Given an object below. Return the full name of user as Name along with maximum marks in subjects as Max marks and find total marks then divide it by given numbers. Input will be the number and passed as argument along with object.
let users2 = [ { "firstName": "Raghu", "lastName": "Anand", "subjects": [ { "name":"Maths","marks":94}, { "name":"Science","marks":67}, { "name":"Hindi","marks":64} ] }, { "firstName": "Ram", "lastName": "Singh", "subjects": [ { "name":"Maths","marks":84}, { "name":"Science","marks":84}, { "name":"Hindi","marks":91} ] } ]
Example 1:
Input:
2
Output:
[ { Name: 'Raghu Anand', 'Total Marks': 112.5, 'Max marks': 94 }, { Name: 'Ram Singh', 'Total Marks': 129.5, 'Max marks': 91 } ]
 */

const users2 = [{
    "firstName": "Raghu",
    "lastName": "Anand",
    "subjects": [{"name": "Maths", "marks": 94}, {"name": "Science", "marks": 67}, {"name": "Hindi", "marks": 64}]
}, {
    "firstName": "Ram",
    "lastName": "Singh",
    "subjects": [{"name": "Maths", "marks": 84}, {"name": "Science", "marks": 84}, {"name": "Hindi", "marks": 91}]
}]

function getMarks2(user, number) {
    return users2.map((item) => {
        const {firstName, lastName, subjects} = item;
        const maxMarks = Math.max(...subjects.map((item) => item.marks));
        const totalMarks = subjects.reduce((acc, item) => acc + item.marks, 0);
        return {
            Name: firstName + " " + lastName,
            'Total Marks': totalMarks / number,
            'Max marks': maxMarks
        }
    });
}

const number = prompt("Enter number: ");
console.log(getMarks2(users2, number));
