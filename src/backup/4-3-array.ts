const filterFruites=(fruites:string[]):string[]=>{
    return fruites.filter(fruite=>fruite.startsWith("b"))
}

let fruitList: string[] = ["apple", "banana", "blueberry", 'cherry'];

console.log(`B로 시작하는 과일 : ${filterFruites(fruitList)}`)