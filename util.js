// This file manages student data
// Contains functions for adding, viewing, deleting students
// and calculating the average grade
let students = [];

const isValidGrade = (grade) => {
    return !isNaN(grade) && grade >= 0 && grade <= 100;
};

const formatStudent = function(student) {
    return student.name + " - " + student.grade;
};

export function addStudent() {

    let name = prompt("Enter student name:");
    let grade = prompt("Enter student grade (0 - 100):");

    grade = Number(grade);

    if (name === "" || name === null) {
        alert("Name cannot be empty.");

    } else if (!isValidGrade(grade)) {
        alert("Invalid grade.");

    } else {
        students.push({
            name: name,
            grade: grade
        });

        alert("Student added successfully!");
    }
}

export function viewStudents() {

    if (students.length === 0) {
        alert("No students added yet.");
    } else {

        let message = "Student List:\n\n";

        for (let i = 0; i < students.length; i++) {
            message += (i + 1) + ". "
              + formatStudent(students[i])
                    + "\n";
        }

        alert(message);
    }
}

export function deleteStudent() {

    if (students.length === 0) {
        alert("No students to delete.");
    } else {

        let number = prompt("Enter student number to delete:");
        number = Number(number);

        if (isNaN(number) || number < 1 || number > students.length) {
            alert("Invalid student number.");
        } else {
            students.splice(number - 1, 1);
            alert("Student deleted successfully.");
        }
    }
}

export function calculateAverage() {

    if (students.length === 0) {
        alert("No students available.");
    } else {

        let total = 0;

        for (let i = 0; i < students.length; i++) {
            total += students[i].grade;
        }

        let average = total / students.length;

        alert("Average grade: " + average);
    }
}