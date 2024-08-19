console.log("im here hehe")



function texttime(){
    console.log("im here hehe")
    if (document.getElementById("text").value == ""){
        console.log("notext")
    }
    else{
        document.getElementById("text").style.display = 'none';

        document.getElementById("start").style.display = 'none';


    }
}



//FOR TESTING
document.getElementById("text").value = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, mollitia accusantium voluptas voluptatem voluptatibus possimus soluta corporis molestiae architecto dicta alias quaerat tenetur et quam expedita aliquam similique quos minus"
