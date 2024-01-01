// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// function sortStudentsByGroups(arr, size) {
//   arr.sort();
//   const teams = []; 
//   for (let i = 0; i <= arr.length; i += size) {
//   const chunk = arr.slice(i, i + size);
//   teams.push(chunk);
//   }
//   if (teams.length > 3) {
//     console.log(teams)
//   }
// }

// sortStudentsByGroups(students, 3);


const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi','Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr, size) {
  arr.sort();
  const teams = [];
  for (let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size);
    teams.push(chunk);
  }
  if (teams.length > 2) {
    for (let i = 0; i < teams.length - 1; i++) {
      if (teams[i].length === 3) {
        console.log(teams[i]);
      }
    }
  }
  if (teams[teams.length - 1].length < 3) {
    console.log('Студенти які не в групі:');
    console.log(teams[teams.length - 1]);
  }
}

sortStudentsByGroups(students, 3);
