import { useState } from "react";
import MiApi from "./MiApi";

const App = () => {

  const [search, setSearch] = useState('');

  return(
    <div className="container bg-secondary">
      <div className="bg-dark text-white p-3 mb-3 d-flex justify-content-between">
        <h1 className="">API Rick And Morty</h1>
        <input className="w-25" type="text" onChange={(e) => setSearch(e.target.value)} placeholder='Busca tu personaje de Rick n Morty' value={search}/>
      </div>
      <MiApi search={search} />
      <div className="bg-dark text-white p-3 mb-3 text-center">
        <h1 className="">Rick And Morty</h1>
      </div>      
    </div>
    )  

}

export default App;