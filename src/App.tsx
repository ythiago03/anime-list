import './index.scss';
import { useQuery } from "@tanstack/react-query";
import fetchData from "./services/api";
import Navbar from "./components/navbar/navbar";

function App() {
  const { data } = useQuery({
    queryKey: ['dataKey'], 
    queryFn: fetchData,
  });
  console.log(data);
  
  return (
    <>
   <Navbar/>
   
    </>
  )
}

export default App
