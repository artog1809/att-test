

export const FormElem = ({lbl, plc, type}) => {
    return (
        <div className="form-elem">
            <label> {lbl}</label>
            <input type = {type} placeholder={plc}/>
        </div>
    )
}