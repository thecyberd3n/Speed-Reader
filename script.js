console.log("im here hehe")
document.getElementById("display").style.display = 'none';
words = []


function texttime(){
    console.log("im here hehe")
    if (document.getElementById("text").value == ""){
        console.log("notext")
    }
    else{
        document.getElementById("text").style.display = 'none';
        document.getElementById("display").style.display = 'block';
        document.getElementById("start").style.display = 'none';
        document.getElementById("title").style.display = 'none';
        words = document.getElementById("text").value.trim().split(/\s+/)
        console.log(words)
        let idx = 0;
        document.getElementById("display").value = "words[idx]";

        const interval = setInterval(() => {
            console.log(words[idx])
            document.getElementById("display").innerHTML = words[idx];
            idx++;
            if (idx >= words.length) {
                clearInterval(interval);
            }
        }, 70);
    }
}



//FOR TESTING
document.getElementById("text").value = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, mollitia accusantium voluptas voluptatem voluptatibus possimus soluta corporis molestiae architecto dicta alias quaerat tenetur et quam expedita aliquam similique quos minus"
