import './App.css'
import Button from './components/Button'
import Form from './components/Form'
import OrderedList from './components/OrderedList'
import UnOrderedList from './components/UnOrderedList'

function App() {
  

  return (
    <>
    <h1>--First Project--</h1>
    <Button />
    <Form  text={ " Login Form "} value={31} arr={[1,2,3,4,5,6]} />
    <OrderedList text={" One of the most coomon way for being happy"} />
    < UnOrderedList value={"3"}/>

   
      
    </>
  )
}

export default App
