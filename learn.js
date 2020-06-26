// console.log('hello')
// setTimeout(function(){
//     console.log('this is my program')
// }, 3000)
// setTimeout(function(){
//     console.log('end')
// }, 2000)
// try {
//     let aa = document.getElementById('as')
//     aa.onclick = function (){

//     }
//     console.log('212')
// } catch(error) {
//     console.error();

//     console.log(error)
// }
// setTimeout(function () {
//     // let input = prompt('id div')
//     // let element = document.getElementById(input)
//     // try {
//     //     element.innerHTML = 'changed';
//     //     console.log('end')
//     // } catch (error) {
//     //     console.info(error);

//     //     console.log(error)
//     // }
//     let number = Number(prompt('input number'))

//     try {
//         if (number > 0) {
//             alert(number * number)
//         } else {
//             throw new Error('lon hon')
//         }
//     } catch(error){
//         console.warn(error)
//     }
//     console.log('end program')
// }, 500)
async function createData(data = {}){
    let docID = await firebase.firestore().collection('test').add({
        title: 'asd',
        price: 323
    })
    console.log(docID.id)
    console.log('done')
    let aa = await firebase.firestore().collection('test').doc(docID.id).get()
    console.log(aa.data())
}
async function readData(){
    let result = await firebase.firestore().collection('test').get()
    console.log(result)
    result.forEach(function(docs){
        console.log(docs.data())
    })
    console.log('for done')
}
async function choiceData(){
    let result = await firebase.firestore().collection('test').where('price', '>' ,300).where('title','==','name').get()
    console.log(result)
    result.forEach(function(docs){
        console.log(docs.data())
    })
    console.log('choice done')
}
async function deleteData (dataID){
    await firebase.firestore().collection('test').doc(dataID).delete()
}
async function deleteAllData (){
    let collection = await firebase.firestore().collection('test').get()
    for(let data of collection.docs){
        console.log(data.id)
        deleteData(data.id)
    }
}
async function updateData(){
    await firebase.firestore().collection('test').update({
        
    })
}