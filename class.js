class School{
    constructor(name, course, term, teacher, classSize, courseType){
        this.name = name
        this.course = course
        this.term = term
        this.teacher = teacher
        this.classSize = classSize
        this.courseType = courseType
        this.students = []
    }
}

class Student{
    constructor(name, age, sex){
        this.name = name
        this.age = age
        this.sex = sex
    }
}
let DFA = new School('Digital Film Academy', 'Code Immersives', 2, 'Yury Shkoda', 11, 'Fullstack Developer')

let Alex = new Student('Alex', 30, 'Male')
let Paul = new Student('Paul', 41, 'Male')
let Jimmy = new Student('Jimmy', 30, 'Male')
let Mintae = new Student('Mintae', 28, 'Male')
let Keevi = new Student('Keevi', 29, 'Female')
let Uli = new Student('Uli', 32, 'Male')
let Maneesh = new Student('Maneesh', 33, 'Male')
let David = new Student('David', 29, 'Male')
let Jaime = new Student('Jaime', 30, 'Male')
let James = new Student('James', 28, 'Male')
let Miguel = new Student('Miguel', 32, 'Male')

DFA.students.push(Alex,Paul,Jimmy,Mintae,Keevi,Uli,Maneesh,David,Jaime,James,Miguel)

console.log(`Welcome to ${DFA.name} and it's ${DFA.course} course. In term ${DFA.term}, the instructor ${DFA.teacher} runs a class of ${DFA.classSize}, including students such as ${DFA.students[Math.floor(Math.random() * 11)].name}, ${DFA.students[Math.floor(Math.random() * 11)].name}, and ${DFA.students[Math.floor(Math.random() * 11)].name}, among others trying to become ${DFA.courseType}s.`)