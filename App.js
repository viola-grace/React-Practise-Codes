import './App.css';
import ExpenseForm from './ExpenseForm';


const App = () => {
  const name = "Viola";
  const role ="Software Engineer";
  const experience ="5";
  const location ="Chennai";
  const products = [
    {id:1, name:"Laptop", price:60000, category:"Electronics"},
    {id:2, name:"Shoes", price:2500, category:"Fashion"},
    {id:3, name:"Phone", price:30000, category:"Electronics"},
    {id:4, name:"Watch", price:5000, category:"Fashion"}
  ];
  const students=[
        {id:1, name:"Anu", present:true},
        {id:2, name:"Rahul", present:false},
        {id:3, name:"Priya", present:true},
        {id:4, name:"Arun", present:true},
    ];

  const employee =[
    {id:1, name:"Anu", department:"Engineering"},
    {id:2, name:"Viola", department:"Engineering"},
    {id:3, name:"Rahul", department:"Testing"},
  ]

  const initialExpenses = [
    {id:1, title:"Food",amount:500, category:"Food"},
    {id:2, title:"Bus",amount:100, category:"Travel"},
    {id:3, title:"Movie",amount:100, category:"Entertainment"},
  ]

  // const [text, setText] = useState("");
  // const receivingFromChild = (text) =>{
  //   setText(text);
  // }
  return(
    <div className="App">
      <ExpenseForm initialExpenses = {initialExpenses}/>
      
    </div>
  )
}

export default App;
