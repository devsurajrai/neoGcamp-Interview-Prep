var readlineSync= require('readline-sync')

let objName={}
let objArr=[]

console.log("All the marks entered should be out of 50.\n")

for(let i=0; i<5;i++){
  console.log(`Student Info: S.No ${i+1}`)
  objName.name=readlineSync.question("Please Enter yor name: ")
  objName.unitTestMarks=parseInt(readlineSync.question("Please Enter Unit Test marks: "))
  objName.preFinalMarks=parseInt(readlineSync.question("Please Enter Pre-final marks: "))
  objName.finalMarks=parseInt(readlineSync.question("Please Enter final marks: "))
  objName.totalMarks=objName.unitTestMarks+objName.preFinalMarks+objName.finalMarks
  objName.averageMarks=parseInt((objName.totalMarks/3).toFixed(2))
  objArr.push(objName)
  console.log("")
}

function getStudentWithAMximumMarks(studentData){
  let highestMarks={marks:0}
  studentData.forEach((student)=>{
    if(student.totalMarks>highestMarks.marks){
      highestMarks.marks=student.totalMarks
      highestMarks.name=student.name
      highestMarks.average=student.averageMarks
    }
  })
    return highestMarks
}

let highestScorerInfo=getStudentWithAMximumMarks(objArr)

console.log(`The highest marks scored is ${highestScorerInfo.marks} by ${highestScorerInfo.name}
His average marks is ${highestScorerInfo.average}`)

