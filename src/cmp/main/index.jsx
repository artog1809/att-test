import { FormElem } from './formElem'
import './style.css'


export const Main = () => { 

    const form = [
        {id: 0, label: 'Your Name', placeholder: "Input your name", type: 'text'},
        {id: 1, label: 'User Name', placeholder: "Input your username", type: 'text'},
        {id: 2, label: 'Email', placeholder: "Input your email", type: 'text'},
        {id: 3, label: 'Password', placeholder: "******", type: 'password'},
        {id: 4, label: 'Date of Birth', placeholder: "Input your DoB", type: 'date'},
        {id: 5, label: 'Present Address', placeholder: "Input your present address", type: 'text'},
        {id: 6, label: 'Permanent Address', placeholder: "Input your permanent address", type: 'text'},
        {id: 7, label: 'City', placeholder: "Input yout city", type: 'text'},
        {id: 8, label: 'Postal Code', placeholder: "Input your postal code", type: 'number'},
        {id: 9, label: 'Country', placeholder: "Input your country", type: 'text'},
    ]
    return (
        <div className='main'>
            <div className="main-container">
                <div className="main-header">
                    <span>Edit Profile</span>
                    <span>Preferences</span>
                    <span>Security</span>
                </div>
                <div className="main-content">
                    <div className="main-content-left">
                        <img className='main-content-avatar' src='/img/avatar.png'/>
                    </div>
                    <div className="main-content-right">
                        <form className='main-content-form'>
                            {form.map(el => <FormElem key = {el.id} lbl = {el.label} plc = {el.placeholder} type={el.type} />)}
                            <button className = 'main-content-form_btn'>Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}