let string ="Any fool can write code that a computer can understand. Good programmers write code that humans can understand."

function findStringWordLength(str){
    // daxil edilən str string məlumatının neçə xarakterdən ibarət olduğunu return edən metod yazın
    const arrOfStrings = str.split(" ")
    return arrOfStrings.length
}

function findStringLetterLength(str){
    // daxil edilən str string məlumatının neçə hərfdən ibarət olduğunu return edən metod yazın
    return str.length
}

console.log(`String ${findStringWordLength(string)} sözdən və ${findStringLetterLength(string)} hərfdən ibarətdir.`)