//Create a complete fifth class students array and object data structure and find their result with gpa, grade, cgpa and final result

const students = [
  {
    name: "Mahdi Hassan",
    class: "Five",
    gender: "Male",
    age: 12,
    gpa: 5,
    grade: "A+",
    cgpa: 4.5,
  },
  {
    name: "Jahid Hassan",
    class: "Five",
    gender: "Male",
    age: 12,
    gpa: 5,
    grade: "A+",
    cgpa: 4.5,
  },
  {
    name: "Hasib",
    class: "Five",
    gender: "Male",
    age: 12,
    gpa: 4.6,
    grade: "A",
    cgpa: 4.2,
  },
  {
    name: "Mominul",
    class: "Five",
    gender: "Male",
    age: 12,
    gpa: 3.3,
    grade: "B",
    cgpa: 3.01,
  },
  {
    name: "Jahid Hassan",
    class: "Five",
    gender: "Male",
    age: 12,
    gpa: 3.6,
    grade: "B+",
    cgpa: 3.2,
  },
  {
    name: "Noumi",
    class: "Five",
    gender: "Male",
    age: 12,
    gpa: 3.6,
    grade: "B+",
    cgpa: 3.2,
  },
  {
    name: "Mahdi Hassan",
    class: "SSC",
    gender: "Male",
    age: 18,
    gpa: 5,
    grade: "A+",
    cgpa: 4.5,
  },
  {
    name: "Jahid Hassan",
    class: "SSC",
    gender: "Male",
    age: 18,
    gpa: 5,
    grade: "A+",
    cgpa: 4.5,
  },
  {
    name: "Hasib",
    class: "SSC",
    gender: "Male",
    age: 18,
    gpa: 4.6,
    grade: "A",
    cgpa: 4.2,
  },
  {
    name: "Mominul",
    class: "SSC",
    gender: "Male",
    age: 18,
    gpa: 3.3,
    grade: "B",
    cgpa: 3.01,
  },
  {
    name: "Jahid Hassan",
    class: "SSC",
    gender: "Male",
    age: 17,
    gpa: 3.6,
    grade: "B+",
    cgpa: 3.2,
  },
  {
    name: "Noumi",
    class: "SSC",
    gender: "Male",
    age: 17,
    gpa: 3.6,
    grade: "B+",
    cgpa: 3.2,
  },
];

let findResult = () => {
  students.map((data) => {
    console.log(
      `Name : ${data.name} | GPA : ${data.gpa} | CGPA : ${data.cgpa}`
    );
  });
};

findResult();
