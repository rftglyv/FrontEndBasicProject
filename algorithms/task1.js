let string ="Any fool can write code that a computer can understand. Good programmers write code that humans can understand."

function findStringWordLength(str){
    // daxil edilən str string məlumatının neçə xarakterdən ibarət olduğunu return edən metod yazın
    return str.match(/[ .]/g).length
}

function findStringLetterLength(str){
    // daxil edilən str string məlumatının neçə hərfdən ibarət olduğunu return edən metod yazın
    return str.split(".").join(" ").split(" ").join("").length
}

console.log(`String ${findStringWordLength(string)} character'dən və ${findStringLetterLength(string)} hərfdən ibarətdir.`)