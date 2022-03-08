const validation = (values)=>{


    let errors={}

    if(!values.serialnumber){
        errors.serialnumber="Serial Number is required "
    }


    return errors;
}

export default validation;
