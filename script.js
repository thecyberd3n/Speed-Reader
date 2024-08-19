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
                document.getElementById("text").style.display = 'block';
                document.getElementById("display").style.display = 'none';
                document.getElementById("start").style.display = 'block';
                document.getElementById("title").style.display = 'block';
            }
        }, 70);

 
    }
}



//FOR TESTING
document.getElementById("text").value = "The cat (Felis catus), commonly referred to as the domestic cat or house cat, is a small domesticated carnivorous mammal. It is the only domesticated species of the family Felidae. Recent advances in archaeology and genetics have shown that the domestication of the cat occurred in the Near East around 7500 BC. It is commonly kept as a house pet and farm cat, but also ranges freely as a feral cat avoiding human contact. Valued by humans for companionship and its ability to kill vermin, the cat's retractable claws are adapted to killing small prey like mice and rats. It has a strong, flexible body, quick reflexes, and sharp teeth, and its night vision and sense of smell are well developed. It is a social species, but a solitary hunter and a crepuscular predator. Cat communication includes vocalizations like meowing, purring, trilling, hissing, growling, and grunting as well as cat body language. It can hear sounds too faint or too high in frequency for human ears, such as those made by small mammals. It secretes and perceives pheromones."
