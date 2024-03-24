//The below command is suppose to prompt the user to initialize the grading process
//const marks = prompt ("please enter your marks:")
//studentsGrade(marks);
//onsole.log(studentsGrade(marks))

//the command below has a function called studentsGrade.
//if is incorporated in the function due to the fact that several conditions have to met.

function studentsGrade (grade){
    if(grade >79 && grade <= 100){
        grade = "A"
    }
    if (grade >= 60 && grade <= 79){
        grade = "B"
    }
    if (grade >=49 && grade <= 59){
        grade = "C"
    }
    if (grade >=40 && grade < 49){
        grade = "D"
    }
    if (grade < 40){
        grade = "E"
    }
return grade
}


//checks if the code works appropriately
    console.log(studentsGrade(49));
