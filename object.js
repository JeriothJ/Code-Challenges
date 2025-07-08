const students = [
  {
    name: "Aryan Verma",
    age: 15,
    marks: { math: 78, science: 82, english: 74, social: 88, hindi: 80 }
  },
  {
    name: "Isha Reddy",
    age: 14,
    marks: { math: 91, science: 89, english: 86, social: 92, hindi: 94 }
  },
  {
    name: "Raghav Joshi",
    age: 16,
    marks: { math: 65, science: 70, english: 73, social: 68, hindi: 72 }
  },
  {
    name: "Kavya Nair",
    age: 15,
    marks: { math: 88, science: 85, english: 90, social: 87, hindi: 89 }
  },
  {
    name: "Arjun Mehta",
    age: 14,
    marks: { math: 94, science: 96, english: 88, social: 90, hindi: 91 }
  },
  {
    name: "Neha Sharma",
    age: 15,
    marks: { math: 72, science: 68, english: 75, social: 70, hindi: 74 }
  },
  {
    name: "Tanmay Gupta",
    age: 16,
    marks: { math: 79, science: 82, english: 77, social: 80, hindi: 76 }
  },
  {
    name: "Meera Iyer",
    age: 14,
    marks: { math: 90, science: 87, english: 85, social: 88, hindi: 92 }
  },
  {
    name: "Soham Patil",
    age: 15,
    marks: { math: 83, science: 86, english: 81, social: 85, hindi: 84 }
  },
  {
    name: "Diya Kapoor",
    age: 16,
    marks: { math: 76, science: 79, english: 80, social: 78, hindi: 77 }
  }
];


// Adding new Element

students["Class"]='X';
console.log(students)


// Calculating total marks

const totalMarksList = students.map(student => {
  return Object.values(student.marks).reduce((sum, mark) => sum + mark, 0)
})
console.log(totalMarksList);


// Calculating students scored above 480 marks

const pupil = [
  {
    name: "Aryan Verma",
    age: 15,
    marks: 492
  },
  {
    name: "Isha Reddy",
    age: 14,
    marks: 452
  },
  {
    name: "Raghav Joshi",
    age: 16,
    marks: 348
  },
  {
    name: "Kavya Nair",
    age: 15,
    marks: 499
  },
  {
    name: "Arjun Mehta",
    age: 14,
    marks: 459
  },
  {
    name: "Neha Sharma",
    age: 15,
    marks: 359
  },
  {
    name: "Tanmay Gupta",
    age: 16,
    marks: 494
  },
  {
    name: "Meera Iyer",
    age: 14,
    marks: 342
  },
  {
    name: "Soham Patil",
    age: 15,
    marks: 319
  },
  {
    name: "Diya Kapoor",
    age: 16,
    marks: 390
  }
]

let toppers=pupil.filter(n=>{return n.marks>480})
console.log(toppers)


// Calculating students scored below 350

let average=pupil.filter(m=>(m.marks<350))
console.log(average)


// Overall count above 480 and below 350

let count=pupil.reduce((previous,current)=>{
    if(current.marks>480){
        previous.top++
    }
    else if(current.marks<350){
        previous.below++
    }
    return previous
 },{top:0,below:0})
console.log("Student scored above 480: "+count.top)
console.log("Student scored below 350: "+count.below)

// Deleting an element from each array

pupil.forEach(pupil=>(delete pupil.age))
console.log(pupil)