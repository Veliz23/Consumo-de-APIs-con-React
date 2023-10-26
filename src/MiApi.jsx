import { useEffect, useState } from "react";
import Card from "./components/Card";
import Sail from "./components/Sail";

const MiApi = ({search}) => {

    const [nakamas, setNakamas] = useState([]);
    const [num, setNum]         = useState(1);

    const apiRNM = async() => {
        const res  = await fetch('https://rickandmortyapi.com/api/character/?page='+num);
        const data = await res.json();

        setNakamas(data.results);
    }

    const handleMasPage = () => { 
      setNum(num + 1)
     }
     
    const handleMenosPage = () => { 
      setNum(num - 1)
    }

     useEffect(() =>{
       apiRNM();
     },[num]);
          
    return(
      <>
        <Sail num={num} handleMasPage={handleMasPage} handleMenosPage={handleMenosPage} />
        <div className="container-fluid">
        <div className="row">
            {nakamas.sort((a,b) => a.name.localeCompare(b.name))
            .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
            .map((nakama) => {
                return (
                <div key={nakama.id} className="d-flex align-content-start flex-wra col-md-3">
                    <Card nakama={nakama} />
                </div>
                )
            })}
        </div>
        <Sail num={num} handleMasPage={handleMasPage} handleMenosPage={handleMenosPage} />
        </div>
      </>
    )
 }


 export default MiApi;
