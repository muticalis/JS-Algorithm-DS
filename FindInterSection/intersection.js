export const findInterSection = (arr) => {


let intersection = []
const set1 = arr[0].replace(/\s/g,"").split(",")
const set2 = arr[1].replace(/\s/g,"").split(",")


set2.forEach((item) => {
    if(set1.includes(item)) {
        intersection.push(item)
    }
})


if(intersection.length != 0) {
    return intersection.toString()
} else  {
    return false
}

// output = 1,4,13


} //["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]


/*
Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.
*/