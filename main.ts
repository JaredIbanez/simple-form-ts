let personData: any= []

let jsDOM: any = {
    data: {
        fname: <HTMLInputElement>document.getElementById('firstName'),
        lname: <HTMLInputElement>document.getElementById('lastName'),
        phone: <HTMLInputElement>document.getElementById('phoneNumber'),
        city: <HTMLInputElement>document.getElementById('city'),
        email: <HTMLInputElement>document.getElementById('email'),
       
       
    },
    personData: document.getElementById('personData')

}
function showData(): any{
    if(personData==""){
        alert('You did not input any data');
    }else{
    let parentDiv = jsDOM.personData;
    parentDiv.innerHTML = '';

    let node = document.createElement("div");
    let nodeHeader = document.createElement("h3");
    nodeHeader.style.fontFamily="Lucida Console";

    let nodeHeaderText = document.createTextNode("Data");
    nodeHeader.appendChild(nodeHeaderText);

    node.appendChild(nodeHeader);

    let fullname, email, phone, city;
    
    personData.forEach(x => {
        fullname = `${x.firstname} ${x.lastname}`,phone = x.phone,   city = x.city,email = x.email;

        let personData1 = document.createElement('p');
        
        
        personData1.appendChild;
        let personDataText = document.createTextNode("  "+fullname);
        personData1.appendChild(personDataText);
        var br = document.createElement("br");
        personData1.appendChild(br);
           
        personData1.appendChild;
        personDataText = document.createTextNode("  "+phone);
        personData1.appendChild(personDataText);
        br = document.createElement("br");
        personData1.appendChild(br);
        
        personData1.appendChild;
        personDataText = document.createTextNode("  "+city);
        personData1.appendChild(personDataText);
        node.appendChild(personData1);

        personData1.appendChild;
        personDataText = document.createTextNode("  "+email);
        personData1.appendChild(personDataText);
        br = document.createElement("br");
        personData1.appendChild(br);
    })
    parentDiv.appendChild(node);
    }
}


function clearFields(): any{
    jsDOM.data.fname.value = "";
    jsDOM.data.lname.value = "";
    jsDOM.data.email.value = "";
    jsDOM.data.phone.value = "";
    jsDOM.data.city.value = "";
}
function addData(): any{
    if (jsDOM.data.fname.value == '' || jsDOM.data.lname.value == '' || jsDOM.data.email.value == '' || jsDOM.data.city.value == '') {
        let arrayData = [];
        Object(<HTMLInputElement>jsDOM.data).forEach(x =>{
        if(x.value == ""){
        arrayData.push(`${x.title} is required.`);
        }
    });
    alert(arrayData.join('\n'));
    }else{
        personData.push({firstname: <HTMLInputElement>jsDOM.data.fname.value, lastname: <HTMLInputElement>jsDOM.data.lname.value, email: <HTMLInputElement>jsDOM.data.email.value, phone: <HTMLInputElement>jsDOM.data.phone.value, city: <HTMLInputElement>jsDOM.data.city.value});
    clearFields();
    }
}
