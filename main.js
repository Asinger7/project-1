var name_of_the_student_array=[];
function Submit(){

    var display_student_arry= [];
    for(var j=1; j <=4; j++){

        var name_of_student=document.getElementById( "name_of_the_student_"+).value;
        console.log(name_of_the_student);
 name_of_the_student_array.push(name_of_the_student);


    }
     console.log(name_of_the_student_array);

     var length=name_of_the_student_array.length;
     console.log(length);
     for(var k=0; k<=length; k++){
          
display_student_array.push("<h4>NAME -" + name_of_the_student_array[k] + "</h4>");
console.log (display_student_array);

     }
     
document.getElementById("display_name_with_commas").innerHTML = display_student_array;

    var remove_commas=display_student_array.join("");
    console.log(remove_commas);
    

        
    }



}

