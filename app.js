// - Total Admnission fees
// - Find All Female Students
// - Find class wise student result
// - Location wise student result
// - find student between 10 - 25 age

const students = [
  {
    name: "Mahdi Hassan",
    class: "Five",
    gender: "Male",
    age: 12,
    location: "Narayanganj",
    fees: "500",
  },
  {
    name: "Jahid Hassan",
    class: "Five",
    gender: "Male",
    age: 11,
    location: "Mirpur",
    fees: "500",
  },
  {
    name: "Anika",
    class: "Five",
    gender: "Female",
    age: 10,
    location: "Banani",
    fees: "500",
  },
  {
    name: "Mahdi Hassan",
    class: "Eight",
    gender: "Male",
    age: 13,
    location: "Narayanganj",
    fees: "500",
  },
  {
    name: "Jahid Hassan",
    class: "Eight",
    gender: "Male",
    age: 15,
    location: "Mirpur",
    fees: "500",
  },
  {
    name: "Anika",
    class: "Eight",
    gender: "Female",
    age: 14,
    location: "Banani",
    fees: "500",
  },
  {
    name: "Mahdi Hassan",
    class: "Five",
    gender: "Male",
    age: 12,
    location: "Narayanganj",
    fees: "500",
  },
  {
    name: "Jahid Hassan",
    class: "Five",
    gender: "Male",
    age: 11,
    location: "Mirpur",
    fees: "500",
  },
  {
    name: "Anika",
    class: "Five",
    gender: "Female",
    age: 10,
    location: "Banani",
    fees: "500",
  },
  {
    name: "Tonmoy",
    class: "SSC",
    gender: "Male",
    age: 18,
    location: "Narayanganj",
    fees: "500",
  },
  {
    name: "Shagor",
    class: "SSC",
    gender: "Male",
    age: 18,
    location: "Mirpur",
    fees: "500",
  },
  {
    name: "Tania",
    class: "SSC",
    gender: "Female",
    age: 17,
    location: "Banani",
    fees: "500",
  },
];

// 1. - Total Admnission fees
let totalAdmnissionFees = () => {
  let totalFees = 0;
  students.map((data) => {
    console.log(`Name : ${data.name} -> Admission Fees : ${data.fees}`);
    totalFees += parseInt(data.fees);
  });
  console.log(`Total Admission Fees = ${totalFees}`);
};
// totalAdmnissionFees();

// 2. - Find All Female Students
let findFemaleStudent = () => {
  students.map((data, index) => {
    if (data.gender == "Female") {
      console.log(`
      Name : ${data.name}
      Class : ${data.class}
      Gender : ${data.gender}
      Location : ${data.location}
      Admission Fees : ${data.fees}
      `);
    }
  });
};
// findFemaleStudent();

// 3. - Find class wise student result
let classWiseStudent = () => {
  students.map((data, index) => {
    if (data.class == "Five") {
      console.log(`
      Name : ${data.name}
      Class : ${data.class}
      Gender : ${data.gender}
      Location : ${data.location}
      Admission Fees : ${data.fees}
      `);
    }
  });
};
// classWiseStudent();

// 4. - Location wise student result
let locationWiseStudent = () => {
  students.map((data, index) => {
    if (data.location == "Banani") {
      console.log(`
      Name : ${data.name}
      Class : ${data.class}
      Gender : ${data.gender}
      Location : ${data.location}
      Admission Fees : ${data.fees}
      `);
    }
  });
};
// locationWiseStudent();

// 5. - find student between 10 - 25 age
let studentAge = () => {
  students.map((data, index) => {
    if (data.age >= 10 && data.age <= 25) {
      console.log(`
      Name : ${data.name}
      Class : ${data.class}
      Gender : ${data.gender}
      Location : ${data.location}
      Admission Fees : ${data.fees}
      `);
    }
  });
};
// studentAge();
