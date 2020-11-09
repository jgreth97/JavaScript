"option strict"
class Student{
    name;
    favcolor;
    favnumber;

    constructor(name,favcolor,favnumber){
        this.name = name;
        this.favcolor = favcolor;
        this.favnumber = favnumber;
    }
}
    let students =[
    new Student("Fred","Green",8),
    new Student("Wilma","Red",1),
    new Student("Barney","Blue",7),
    new Student("Betty","orange",3),
    new Student("Pebbles","pink",2)
];
const display=()=>{
    let tbody = document.getElementById("tbody");
    tbody.innerHTML="";
    for(let s of students){
        let tr = "<tr>";
        tr +=`<td>${s.name}</td>`;
        tr +=`<td>${s.favcolor}</td>`;
        tr +=`<td>${s.favnumber}</td>`;
        tr += "<tr>";
        tbody.innerHTML+=tr;
    }
}
    const save = () => {
        let name= document.getElementById("name").value;
        let color= document.getElementById("favcolor").value;
        let number= document.getElementById("favnumber").value;
        console.log(name,color,number);

        let us = new Student(name,color,+number);
        students.push(us);
        console.log(students);

    }

