
let defaultInquiry = null
function handleInquiryChange() {
    const inquiryDiv = document.getElementById('inquiry-div');
    const inquirySelect = document.getElementById('natureOfInquiry');
    if (inquirySelect.value === 'other') {

        // Create Text Input
        const otherInput = document.createElement('input');
        otherInput.setAttribute('type', 'text');
        otherInput.setAttribute('id', 'natureOfInquiry');
        otherInput.setAttribute('name', 'natureOfInquiry');
        otherInput.setAttribute('placeholder', 'Please specify');
        otherInput.setAttribute('required', 'required');
        otherInput.setAttribute("onchange", "");


        defaultInquiry = inquiryDiv.innerHTML
        inquiryDiv.innerHTML = '<label for="natureOfInquiry">Nature of Inquiry</label>';

        // Create Container
        const container = document.createElement('div');
        container.setAttribute("id", "otheroptioncontainer")
        inquiryDiv.appendChild(container);


        //Button
        const cancel = document.createElement('button');
        cancel.setAttribute("type", "button");
        cancel.setAttribute('id', 'cancelother');
        cancel.setAttribute('onclick', 'RevertInquiryFormat()')
        const image = document.createElement('img');
        image.setAttribute('src', '../Images/close icon.png');
        cancel.appendChild(image);
        
        // Append Button and Text Input
        container.appendChild(otherInput);
        container.appendChild(cancel);


    }
}


function RevertInquiryFormat(){
    const inquiryDiv = document.getElementById('inquiry-div');
    // inquiryDiv.innerHTML = '<label for="natureOfInquiry">Nature of Inquiry</label> <select id="natureOfInquiry" name="natureOfInquiry" required onchange="handleInquiryChange()"><option value="business">Business</option><option value="complaint">Complaint</option><option value="support">Support</option><option value="feedback">Feedback</option><option value="other">Other</option></select>';
    inquiryDiv.innerHTML = defaultInquiry;
}


const submitbutton = document.getElementById("submitbutton");

submitbutton.addEventListener("click", function(){
    const form = document.getElementById("form-container");
    const firstName = document.getElementById("firstName");
    const lastname = document.getElementById("lastName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const errormsg = document.getElementById("errormsg");
    const message = document.getElementById("message");

    errormsg.innerHTML = "";

    if(firstName.value.length == 0){
        errormsg.innerHTML = "First Name Cannot be Empty"
        return
    }

    if(lastname.value.length == 0){
        errormsg.innerHTML = "Last Name Cannot be Empty"
        return
    }

    if(phone.value.length == 0){
        errormsg.innerHTML = "Phone Number Cannot be Empty"
        return
    }
       
    for (let i = 0; i < phone.value.length; i++) {
        console.log(phone.value[i]);
        if (!isDigit(phone.value[i])){
            errormsg.innerHTML = "Phone Number Must be a Number";
            return
        };
    }

    if(email.value.length == 0){
        errormsg.innerHTML = "Email Cannot be Empty"
        return
    }

    if(email.value.endsWith("@gmail.com") == false){
        errormsg.innerHTML = "Email must end with @gmail.com";
        return
    }

    const text_option_other = document.getElementById("natureOfInquiry");

    if(text_option_other.tagName === 'INPUT'){
        if(text_option_other.value.length == 0){
            errormsg.innerHTML = "Reason for Inquiry Cannot be Empty";
            return
        }
    }
    if(message.value.length == 0){
        errormsg.innerHTML = "Message Cannot be Empty"
        return
    }
    form.submit()



})


function isDigit(char) {
    return char >= '0' && char <= '9';
}