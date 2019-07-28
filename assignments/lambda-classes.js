// CODE here for your Lambda Classes

//Person class

class Person{
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }

    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    }
}

//Instructor class

class Instructor extends Person{
    constructor(instructAttr){
        super(instructAttr);
        this.specialty = instructAttr.specialty;
        this.favLanguage = instructAttr.favLanguage;
        this.catchPhrase = instructAttr.catchPhrase;
    }

    demo(subject){
        console.log(`Today we are learning about ${subject}.`) 
    }

    grade(student, subject){
        console.log(`${student.name} recieves a perfect score on ${subject}.`)
    }
}

// Student class

class Student extends Person{
    constructor(studentAttr){
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
    }

    listSubjects(favSubjects){
        favSubjects.forEach(function (subject) {
            console.log(subject)
        });
    }

    PRAssignment(subject){
        console.log(`${student.name} has submitted a PR for ${subject}.`)
    }

    sprintChallenge(subject){
        console.log(`${student.name} has begun sprint challenge on ${subject}.`)
    }
}

//Project Manager class

class ProjectManager extends Instructor{
    constructor(pmAttr){
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
    }

    standup(channel){
        console.log(`${name} announces to ${channel}, @channel standup times!`)

    }

    debugsCode(student){
        console.log(`${name} debugs ${student.name}'s code on ${subject}.`)
    }
}