import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import ReUseableForm from './components/ReUseableForm/ReUseableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import StateFulForm from './components/StateFulForm/StateFulForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {

  // const handleSingUpSubmit = data =>{
  //   console.log(data)
  // }

  // const handleUpdateSubmit = data =>{
  //   console.log(data);
  // }

  return (
    <>
      <h1>Form Master</h1>
      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReUseableForm formTitle='Sign up'
       handleSubmit={handleSingUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Sign up right now</p>
        </div>
      </ReUseableForm>
      <ReUseableForm formTitle='Update Profile' 
      submitBtnText={'Update'} 
      handleSubmit={handleUpdateSubmit}>
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile update</p>
        </div>
      </ReUseableForm> */}
    </>
  )
}

export default App
