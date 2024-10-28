import useInputState from "../../hooks/useInputState";

const HookForm = () => {

    // const [name, handleNameChange] = useInputState(null);
    // const [email, handleEmailChange] = useInputState('');
    const nameState = useInputState(null);
    const emailState = useInputState('');
    const passwordState = useInputState(null);

    const handleForm = e =>{
        e.preventDefault();
        console.log(nameState.value);
        console.log(emailState.value);
        console.log(passwordState.value);
    }
    return (
        <div>
            <form  onSubmit={handleForm}>
                {/* <input onChange={handleNameChange} type="text" name="name"  /><br />
                <input onChange={handleEmailChange} type="email" name="email" id="" /><br /> */}
                <input {...nameState} type="text" name="name"  /><br />
                <input {...emailState} type="email" name="email" id="" /><br />
                <input {...passwordState} type="password" name="password" /><br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;