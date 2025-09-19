let hospital = {
    name:"Odds and Ends Creature Hospital",
    patients: [
    {
        fullName: "Reed Roamer",
        dob: "1999/08/22",
        symptoms: ["Scale Rot", "Bloated swim bladder", "Calcium Deficiency"],
        id: "9086732"
    },
    {
        fullName: "Vera Lotus",
        dob: "2015/11/03",
        symptoms: ["Dehydrated mucous membrane", "Flaking skin", "Infected segment laceration"],
        id: "9097321"
    },
    {
        fullName: "Lavery Barn",
        dob: "1706/06/16",
        symptoms: ["Molar decay", "Stuck shed", "Horn dislocation", "Excess ocular discharge"],
        id: "9056266"
    }
]}

// <h1>Hospital Name</h1>
// <h2>Patient full name, date of birth </h2>
// <ul>
//   <li>symptom</li>
//   <li>symptom</li>
//   <li>symptom</li>
// </ul> 

let section = document.querySelector("#section")

function createElementWithContent(element,content){
    let newElement = document.createElement(element)
    newElement.textContent = content
    return newElement
}

function hospitalPatientData(data){
    //header 1 hospital
    let newHead = createElementWithContent("h1",data.name)
    section.appendChild(newHead)

    for (let i=0; i<data.patients.length; i++){

    //header 2 patient info
        headText = `Patient Name: ${data.patients[i].fullName}. Date of Birth: ${hospital.patients[i].dob}`
        let newHead2 = createElementWithContent("h2", headText)
        section.appendChild(newHead2)

        //list of symptoms
        let newUl = document.createElement("ul")
        for(let j=0; j<data.patients[i].symptoms.length; j++){
            let newLi = document.createElement("li")
            newUl.appendChild(newLi)
            newLi.textContent = data.patients[i].symptoms[j]
            section.appendChild(newUl)
        }
        
    }};

hospitalPatientData(hospital)

//random patient id
function getPatientId(data){
    let random = Math.floor(Math.random()*data.patients.length);
    let randomId = data.patients[random].id
    console.log(randomId)
}
getPatientId(hospital)
