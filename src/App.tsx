import "./styles/_main.scss";
import { useQuery } from "@tanstack/react-query";
import fetchData from "./services/api";

function App() {
  const { data } = useQuery({
    queryKey: ['dataKey'], 
    queryFn: fetchData,
  });
  console.log(data);
  
  return (
    <>
    <h1>Hello word</h1>
       
    </>
  )
}

export default App
