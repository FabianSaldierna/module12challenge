import { useState } from 'react';
import validator from "validator";

export default function Form() {
    const [name, setName] = useState('Enter your name');
    const [mail, setMail] = useState('Enter your email');
    const [text, setText] = useState('Enter some text');
    const [alerta, setAlert] = useState('');


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(`Name is ` + name + " " + `Value is: ` + value);
        if (e.target.name == "users_name") { setName(value) };
        
        if (e.target.name == "users_mail") { setMail(value) };
        
        if (e.target.name == "users_text") { setText(value) };
    }

    const handleonBlur = (e) => {
        const { value } = e.target;
        if (!value) {
            if (e.target.name == "users_name") {
                setName("Enter your name");
                setAlert(`Please enter a name`);
            }
            if (e.target.name == "users_text") {
                setText("Enter some text");    
                setAlert(`Please enter some text`);
            }
            if (value) {
                setAlert(``);
            }
        }
    }
    

    const handleonBlurMail = (e) => {
        console.log("entre a blurMail");
        const { value } = e.target;
        console.log(value);
        if(!value){
            setMail("Enter your email");
            setAlert(`Please enter a mail`);
        } else if (validator.isEmail(mail)) {
            setAlert(``);
        } else {
            setAlert(`Please enter a valid email`);
        }
    }

    const cleanText = (e) => {
        console.log(`clean text name is: `+ e.target.name);
        console.log(`cleanText Value is: ` + e.target.value);
        if (e.target.value == "Enter your name") { setName(""); };
        if (e.target.value == "Enter your email") { setMail(""); };
        if (e.target.value == "Enter some text") { setText(""); };
    }

    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
    }


    return (
        <>
        <form method="post" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name="users_name" value={name} onFocus={cleanText} onChange={handleInputChange} onBlur={handleonBlur} />
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="users_mail" value={mail} onFocus={cleanText} onChange={handleInputChange} onBlur={handleonBlurMail} />
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput3" className="form-label">Message</label>
                <textarea style={{ height: "150px" }} className="form-control" name="users_text" value={text} id="text" onFocus={cleanText} onChange={handleInputChange} onBlur={handleonBlur} />
            </div>
            <input className="btn btn-primary mt-3 botoncito" type="submit"></input>
            </form>
            <h3>{alerta}</h3>
        </>
    );
}