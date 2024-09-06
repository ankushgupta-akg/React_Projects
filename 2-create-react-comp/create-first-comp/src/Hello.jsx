function Hello(){
  let myName = 'Ankush'
  let num =456;
  let fullName = () =>{
    return 'Ankush Gupta'
  }
  return <h3>Hello {fullName()}this is the future speaking my id is {num}, my name is {myName}</h3>
}
export default Hello