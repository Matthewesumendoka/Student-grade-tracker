// Main menu controller for the Student Grade Tracker
// Displays menu and calls functions from util.js
import { 
    addStudent, 
    viewStudents, 
    deleteStudent, 
    calculateAverage 
} from "./util.js";

let choice = "";

while (choice !== "5") {

    let menu = "Student Grade Tracker\n";
    menu += "1. Add Student\n";
    menu += "2. View Students\n";
    menu += "3. Delete Student\n";
    menu += "4. Calculate Average\n";
    menu += "5. Exit\n";

    choice = prompt(menu);

    switch (choice) {

        case "1":
            addStudent();
            break;

        case "2":
            viewStudents();
            break;

        case "3":
            deleteStudent();
            break;

        case "4":
            calculateAverage();
            break;

        case "5":
            alert("Goodbye!");
            break;

        default:
            alert("Invalid choice.");
    }
}