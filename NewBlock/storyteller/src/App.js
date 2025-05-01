import logo from './logo.svg';
import './App.css';
import Cards from './Components/Cards';
import Layout from './Components/Layout';
import mockSampleData from "./Mockdata/mockSampleData.json";
function App() {
  console.log(mockSampleData);
  console.log(mockSampleData.users);
  return (
    <div>
       <h1>This is my first react application</h1>
    {
      //Calling the cards component
    }
    <div className="cards"> 
         <Cards/>
         
        {
          //We write{} because we are going to write javasript inside jsx
         mockSampleData.users.map((item)=>{
          console.log("Hello i'm from map: "+item.firstName+" "+item.lastName)
          //return <Cards name={item.firstName+" "+item.lastName} imgPath={item.image}/>
          return <Cards name={`${item.firstName}${item.lastName}`} imgPath={item.image}/>
         })
        } 
         {/*<Cards/>
         <Cards/>
         <Cards/>
         <Cards/>
         {Cards()}*/}
    </div> 
    <br/>
    <div className="layout">
         {/*<Cards/>
         <Cards/>
         <Cards/>
         <Cards/>
         <Cards/>
         <Cards/>*/}
    </div> 
  </div>  
  );
}

export default App;
