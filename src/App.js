import './App.css';
import WorkList from './WorkList';

function App() {
  return (
    <div>

    <div className='head'>
      <h1>СПИСОК ДЕЛ</h1>
    </div>


    <div className='container'>
    
    {
     ['ПОНЕДЕЛЬНИК', 'ВТОРНИК', 'СРЕДА', 'ЧЕТВЕРГ', 'ПЯТНИЦА', 'СУББОТА', 'ВОСКРЕСЕНЬЕ'] 

    .map ((day, index) =>         
      <div   key={index}
             className='day' >

      <div>
        <h2> {day} </h2>
      </div>
      <WorkList />
      </div>
    )
} 

     
    
    <div className='day'>
          <h3> Секрет успеха — сделать первый шаг!</h3>
    </div>
    
    </div>


    </div>
  );
}

export default App;
