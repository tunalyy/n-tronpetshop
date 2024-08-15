import './form.css'
import emailjs from '@emailjs/browser';
import {useState} from 'react';

export default function Footer() {

    const[name, setName] = useState('');
const[email, setEmail] = useState('');
const[message, setMessage] = useState('');

function sendEmail(e){
    e.preventDefault();

    if(name === "" || email === "" || message === ""){
        alert("Preencha todos os campos");
        return;
    }

    const templateParams = {
        from_name: name,
        message: message,
        email: email
    }

    emailjs.send("service_sm92grr", "template_om1nig4", templateParams ,'rnRNt0HPmkK7VUCM2')
    .then((response)=>{
        console.log("email enviado", response.status, response.text);
        setName("")
        setEmail("")
        setMessage("")
    }, (err) =>{
        console.log(err)
    })

}

return(
    <div className='contact'>
    <h1 className='title_Contact'>İletişim</h1>
    <p>
        Herhangi bir sorunuz varsa veya daha fazla bilgi almak istiyorsanız, bu formu kullanarak bize ulaşabilirsiniz. Dilerseniz, e-posta ya da telefon aracılığıyla da bizimle iletişime geçebilirsiniz.
    </p>
    <p><strong>Telefone: </strong>(90) 531 500 33 88 </p>
    <p><strong>E-mail: </strong>notronpetshop@gmail.com</p>
        <input className='button_Contact' type="submit" value="enviar" />
    </form> 
</div>
)


}

