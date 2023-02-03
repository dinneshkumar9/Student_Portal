const  calling = async(myJson) => {
    const data = await fetch(myJson)
    const body = await data.json()
    return body
}

// data of 100 students mapped
const data = calling('./MOCK_DATA.json')
showData(data)

function showData(data){
   data.then(
    (data) => {
        data.forEach((item) => {

            var pass
            if(item.passing)
            {
               pass='passing'
            }
            else{
                pass='failing'
            }

            const createDiv = document.createElement('tr')
            createDiv.innerHTML = ` 
            <td id="id">${item.id}</td>
            <td colspan="3"><img src="${item.img_src}" width="20px" height="20px" id="photo"/> <div id="name">${item.first_name} ${item.last_name}</div></td>
            <td id="gender">${item.gender}</td>
            <td id="class">${item.class}</td>
            <td id="marks">${item.marks}</td>
            <td id="passing">${pass}</td></td>
            <td id="mail">${item.email}</td>`
    
            document.getElementById('show-table').appendChild(createDiv)
    }
   )  
})
}


// search box filter function
 
const searchButton = document.getElementById('search-button')

searchButton.addEventListener('click', () => {

  let temp=document.getElementById("search_bar").value
  const students = calling('./MOCK_DATA.json')
  const table = document.getElementById('show-table')
  console.log(temp)

   // Convert the search term to lower case for case-insensitive matching
  temp = temp.toLowerCase();

  students.then((item) => {

    // Filter the list of students based on the search term
    const filteredStudents = Object.values(item).filter(student => {
      return (
        student.first_name.toLowerCase().includes(temp) ||
        student.last_name.toLowerCase().includes(temp) ||
        student.email.toLowerCase().includes(temp)
      );
    });
  
    // Clear the table
    table.innerHTML = `<tr>
    <td>ID</td>
    <td colspan="3">Name</td>
    <td>Gender</td>
    <td>Class</td>
    <td>Marks</td>
    <td>Passing</td>
    <td>Email</td>
</tr>`;
  
    // Populate the table with the filtered list of students
    for (const student of filteredStudents) {

      var pass
            if(student.passing)
            {
               pass='passing'
            }
            else{
                pass='failing'
            }

      const row = document.createElement("tr");
      row.innerHTML = ` 
      <td id="id">${student.id}</td>
      <td colspan="3"><img src="${student.img_src}" width="20px" height="20px" id="photo"/> <div id="name">${student.first_name} ${student.last_name}</div></td>
      <td id="gender">${student.gender}</td>
      <td id="class">${student.class}</td>
      <td id="marks">${student.marks}</td>
      <td id="passing">${pass}</td></td>
      <td id="mail">${student.email}</td>`
      table.appendChild(row);
    }

  })
  removeFemaleTable();
  if (genderButtonClicked) {
    genderButtonClicked = false;
    sortGender.removeAttribute("disabled");
  }
})

// sort A -> Z

const sortA = document.getElementById('sortA')
sortA.addEventListener('click', () => {
   

  const students = calling('./MOCK_DATA.json')
  students.then((item) => {

    const table = document.getElementById('show-table')
    const sortedStudents = Object.values(item).sort((a, b) => {
        return a.first_name.localeCompare(b.first_name);
      });

      console.log(sortedStudents)
    table.innerHTML = `<tr>
    <td>ID</td>
    <td colspan="3">Name</td>
    <td>Gender</td>
    <td>Class</td>
    <td>Marks</td>
    <td>Passing</td>
    <td>Email</td>
</tr>`;
    for (const student of sortedStudents) {
        const row = document.createElement("tr");

        var pass
            if(student.passing)
            {
               pass='passing'
            }
            else{
                pass='failing'
            }

        row.innerHTML =` 
        <td id="id">${student.id}</td>
        <td colspan="3"><img src="${student.img_src}" width="20px" height="20px" id="photo"/> <div id="name">${student.first_name} ${student.last_name}</div></td>
        <td id="gender">${student.gender}</td>
        <td id="class">${student.class}</td>
        <td id="marks">${student.marks}</td>
        <td id="passing">${pass}</td></td>
        <td id="mail">${student.email}</td>`
        
        table.appendChild(row);
    }
  })
  removeFemaleTable();
  if (genderButtonClicked) {
    genderButtonClicked = false;
    sortGender.removeAttribute("disabled");
  }
})

// sort z -> A

const sortZ = document.getElementById('sortZ')
sortZ.addEventListener('click', () => {
    

  const students = calling('./MOCK_DATA.json')
  students.then((item) => {

    const table = document.getElementById('show-table')
    const sortedStudents = Object.values(item).sort((a, b) => {
        return a.first_name.localeCompare(b.first_name);
      });

      const reverse = sortedStudents.reverse()
    table.innerHTML = `<tr>
    <td>ID</td>
    <td colspan="3">Name</td>
    <td>Gender</td>
    <td>Class</td>
    <td>Marks</td>
    <td>Passing</td>
    <td>Email</td>
</tr>`;
    for (const student of reverse) {
        const row = document.createElement("tr");

        var pass
            if(student.passing)
            {
               pass='passing'
            }
            else{
                pass='failing'
            }

        row.innerHTML =` 
        <td id="id">${student.id}</td>
        <td colspan="3"><img src="${student.img_src}" width="20px" height="20px" id="photo"/> <div id="name">${student.first_name} ${student.last_name}</div></td>
        <td id="gender">${student.gender}</td>
        <td id="class">${student.class}</td>
        <td id="marks">${student.marks}</td>
        <td id="passing">${pass}</td></td>
        <td id="mail">${student.email}</td>`
        
        table.appendChild(row);
    }
  })
  removeFemaleTable();
  if (genderButtonClicked) {
    genderButtonClicked = false;
    sortGender.removeAttribute("disabled");
  }
})

// sort by marks
const sortMarks = document.getElementById('sortMarks')
sortMarks.addEventListener('click', () => {
    

  const students = calling('./MOCK_DATA.json')
  students.then((item) => {

    const table = document.getElementById('show-table')
    const sortedStudents = Object.values(item).sort((a, b) => a.marks - b.marks);

    table.innerHTML = `<tr>
      <td>ID</td>
      <td colspan="3">Name</td>
      <td>Gender</td>
      <td>Class</td>
      <td>Marks</td>
      <td>Passing</td>
      <td>Email</td>
    </tr>`;

    for (const student of sortedStudents) {
        const row = document.createElement("tr");

        var pass
            if(student.passing)
            {
               pass='passing'
            }
            else{
                pass='failing'
            }

        row.innerHTML +=` 
        <td id="id">${student.id}</td>
        <td colspan="3"><img src="${student.img_src}" width="20px" height="20px" id="photo"/> <div id="name">${student.first_name} ${student.last_name}</div></td>
        <td id="gender">${student.gender}</td>
        <td id="class">${student.class}</td>
        <td id="marks">${student.marks}</td>
        <td id="passing">${pass}</td></td>
        <td id="mail">${student.email}</td>`
        
        table.appendChild(row);
    }
  })  
  removeFemaleTable();
  if (genderButtonClicked) {
    genderButtonClicked = false;
    sortGender.removeAttribute("disabled");
  }
})

//sort by passing

const sortPassing = document.getElementById('sortPassing')
sortPassing.addEventListener('click', () => {
    

  const students = calling('./MOCK_DATA.json')
  students.then((item) => {

    const table = document.getElementById('show-table')
    const sortedStudents = Object.values(item).filter(student => student.passing);

    table.innerHTML = `<tr>
      <td>ID</td>
      <td colspan="3">Name</td>
      <td>Gender</td>
      <td>Class</td>
      <td>Marks</td>
      <td>Passing</td>
      <td>Email</td>
    </tr>`;

    for (const student of sortedStudents) {
      const row = document.createElement("tr");

      var pass = 'passing';

      row.innerHTML +=` 
      <td id="id">${student.id}</td>
      <td colspan="3"><img src="${student.img_src}" width="20px" height="20px" id="photo"/> <div id="name">${student.first_name} ${student.last_name}</div></td>
      <td id="gender">${student.gender}</td>
      <td id="class">${student.class}</td>
      <td id="marks">${student.marks}</td>
      <td id="passing">${pass}</td></td>
      <td id="mail">${student.email}</td>`

      table.appendChild(row);
    }
  })
  removeFemaleTable();
  if (genderButtonClicked) {
    genderButtonClicked = false;
    sortGender.removeAttribute("disabled");
  }
});


//sort by class
const sortClass = document.getElementById('sortClass')
sortClass.addEventListener('click', () => {
    

  const students = calling('./MOCK_DATA.json')
  students.then((item) => {
    const table = document.getElementById('show-table')
    const sortedStudents = Object.values(item).sort((a, b) => a.class- b.class)

    table.innerHTML = `<tr>
      <td>ID</td>
      <td colspan="3">Name</td>
      <td>Gender</td>
      <td>Class</td>
      <td>Marks</td>
      <td>Passing</td>
      <td>Email</td>
    </tr>`;

    for (const student of sortedStudents) {
        const row = document.createElement("tr");

        var pass
            if(student.passing)
            {
               pass='passing'
            }
            else{
                pass='failing'
            }

        row.innerHTML +=` 
        <td id="id">${student.id}</td>
        <td colspan="3"><img src="${student.img_src}" width="20px" height="20px" id="photo"/> <div id="name">${student.first_name} ${student.last_name}</div></td>
        <td id="gender">${student.gender}</td>
        <td id="class">${student.class}</td>
        <td id="marks">${student.marks}</td>
        <td id="passing">${pass}</td></td>
        <td id="mail">${student.email}</td>`
        
        table.appendChild(row);
    }
  }) 
  removeFemaleTable(); 
  if (genderButtonClicked) {
    genderButtonClicked = false;
    sortGender.removeAttribute("disabled");
  }
})






// sort by gender

let genderButtonClicked = false;

const sortGender = document.getElementById('sortGender')
sortGender.addEventListener('click', () => { 
    
    
  const students = calling('./MOCK_DATA.json')
  students.then((item) => {

    if (!genderButtonClicked) {
const table = document.getElementById('show-table')
const sortedStudents = item.sort((a,b) => a.gender > b.gender ? 1 : -1);


let maleStudents = sortedStudents.filter(student => student.gender === "Male");
let femaleStudents = sortedStudents.filter(student => student.gender === "Female"); 
        
table.innerHTML = `<tr>
  <td>ID</td>
  <td colspan="3">Name</td>
  <td>Gender</td>
  <td>Class</td>
  <td>Marks</td>
  <td>Passing</td>
  <td>Email</td>
</tr>`;

const captionOne=document.createElement('caption')
captionOne.innerHTML="<b>Male Table</b>"
table.appendChild(captionOne)

for (const student of maleStudents) {
    const row = document.createElement("tr");

    var pass
        if(student.passing)
        {
           pass='passing'
        }
        else{
            pass='failing'
        }

    row.innerHTML +=` 
    <td id="id">${student.id}</td>
    <td colspan="3"><img src="${student.img_src}" width="20px" height="20px" id="photo"/> <div id="name">${student.first_name} ${student.last_name}</div></td>
    <td id="gender">${student.gender}</td>
    <td id="class">${student.class}</td>
    <td id="marks">${student.marks}</td>
    <td id="passing">${pass}</td></td>
    <td id="mail">${student.email}</td>`
    
    table.appendChild(row);
}

const femaleTable=document.getElementById('show-table-two')

const caption=document.createElement('caption')
caption.innerHTML="<b>Female Table</b>"
femaleTable.appendChild(caption)

for (const student of femaleStudents) {
  const row = document.createElement("tr");
  

  var pass
      if(student. Passing)
      {
         pass='passing'
      }
      else{
          pass='failing'
      }
      row.innerHTML +=` 
      <td id="id">${student.id}</td>
      <td colspan="3"><img src="${student.img_src}" width="20px" height="20px" id="photo"/> <div id="name">${student.first_name} ${student.last_name}</div></td>
      <td id="gender">${student.gender}</td>
      <td id="class">${student.class}</td>
      <td id="marks">${student.marks}</td>
      <td id="passing">${pass}</td></td>
      <td id="mail">${student.email}</td>`

      
      femaleTable.appendChild(row);
  }
  genderButtonClicked = true;
    sortGender.setAttribute("disabled", true);
  }
  })
});

        // function to remove table
    function removeFemaleTable() {
        const femaleTable = document.getElementById('show-table-two')
        femaleTable.removeChild(femaleTable.lastChild)
        while (femaleTable.firstChild) {
        femaleTable.removeChild(femaleTable.firstChild)
        }
    }