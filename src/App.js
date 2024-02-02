import './App.css';
import {useState} from 'react';
import {Container } from 'react-bootstrap';

function App() {
  let[starttime,setstarttime]=useState('');
  let[endtime,setendtime]=useState('');
  let [slots, setSlots] = useState([]);

  const handlesloat=()=>{
    const generateTimeSlots = (startTime, endTime) => {
      const tempsloat = [];
    
      while (startTime < endTime) 
      {
        if((startTime.getTime() + 10 * 60000)<endTime){
          const set_time = new Date(startTime.getTime() + 10 * 60000);
          const slot = {
            start: `${startTime.getHours()}:${startTime.getMinutes().toString().padStart(2, '0')}`,
            end: `${set_time.getHours()}:${set_time.getMinutes().toString().padStart(2, '0')}`,
          };
          tempsloat.push(slot)
        }else{
            let diff=endTime.getMinutes()-startTime.getMinutes();
            alert(diff);
            const set_time = new Date(startTime.getTime() + diff * 60000);
          const slot = {
            start: `${startTime.getHours()}:${startTime.getMinutes().toString().padStart(2, '0')}`,
            end: `${set_time.getHours()}:${set_time.getMinutes().toString().padStart(2, '0')}`,
          };
          tempsloat.push(slot)
        }
        startTime.setMinutes(startTime.getMinutes() + 10);
      }
      return tempsloat;
    };
        
    const startTime = new Date(`01/01/2024 ${starttime}`);
    const endTime = new Date(`01/01/2024 ${endtime}`);
    if (startTime < endTime) 
    {
      const slots = generateTimeSlots(startTime, endTime);
      setSlots(slots);
    }
  }

  return (
    <div className="App">
      <Container>          
          
          <h1>Sloat Management</h1>           
            Enter Start Value:<input type='text' onChange={(e)=>setstarttime(e.target.value)}></input> <br></br>           
            Enter End Value:<input type='text' onChange={(e)=>setendtime(e.target.value)}></input><br></br>
            <input type='button' className='button' value={'Generate Sloat'} onClick={handlesloat}></input>
        
        <div className='slots'>
            <h3>Slots:</h3>
            <ul>
              {slots.map((slot, index) => (
                <li key={index}>
                  {slot.start} - {slot.end}
                </li>
              ))}
            </ul>
          </div>
      </Container>
    </div>
  );
}

export default App;