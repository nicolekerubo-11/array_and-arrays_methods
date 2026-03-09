//## 1️⃣2️⃣ Remove Duplicate Objects

//Create an array of objects with duplicate IDs.

//Write a function that removes duplicates based on ID.



const initialArray = [
    {id: 1 , name:'boots'},
    {id: 2 , name:'balls'},
    {id: 3 , name:'cones'},
    {id:4 , name:'markers'},
    {id:1, name:'shinpads'},
    {id:2 ,name:'trainers'}


]

function removeDuplicatesById(array){
    const seenIds = new Set()
    const uniqueArray=[]

    for (const item of array){
        if(!seenIds.has(item.id)) {
            seenIds.add(item.id)
            uniqueArray.push(item)
        }
    }
    return uniqueArray;
}
