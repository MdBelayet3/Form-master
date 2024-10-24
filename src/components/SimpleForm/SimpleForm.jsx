const SimpleForm = () => {

    const handleForm = event =>{
        event.preventDefault();
        console.log(event.target.name.value);
        console.log(event.target.email.value);
        console.log(event.target.phone.value);
        console.log('form submitted')
    }

    return (
        <div>
            <form  onSubmit={handleForm}>
                <input type="text" name="name"  /><br />
                <input type="email" name="email" id="" /><br />
                <input type="text" name="phone" /><br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;