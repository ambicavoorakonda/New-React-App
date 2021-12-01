import './App.css';
import Card from './cards'
import {isArrayElement as isArrayEmptyNew} from './utils.js'

function App() {
    const firstName = "Ambica"
    const lastName = "Voorakonda"
    const age = 26
    const job = "Engineer"
    const placeholder = "Enter your details"
    const fullName = (firstName, lastName) => {
        return `$(firstName) $(lastName)`
    }
    const inputBox = <input placeholder = {placeholder} autoComplete> </input>
    const array = [1,2,3,4,5]
    const obj = [
        {
            id : 1,
            name : "Xname",
            age : 25
        },
        {
            id : 1,
            name : "Yname",
            age : 26
        },
        {
            id : 1,
            name : "Zname",
            age : 27
        }
    ]
    const card = isArrayElement(obj) ? [] : obj.map((item, pos) => {
        return(
            <Card className = {'card'} id={item.id} name={item.name} age={item.age} job={job}/>

        )
    })
    return (
        <div className="App">
            {card}
        </div>
    );
}
export default App;