import { useEffect, useState } from "react";

const Sail = ({num,handleMasPage,handleMenosPage}) => {

    const [page, setPage]       = useState([]);
    
    const apiPage = async() => {
        const res  = await fetch('https://rickandmortyapi.com/api/character/?page=1');
        const data = await res.json();
  
        setPage(data.info);
    }

    useEffect(() =>{
        apiPage();
      },[num]);

    return(
        <div className='d-flex flex-column-revers justify-content-end m-2'>
          <div>
            {
              num !== 1 && (<button className="btn btn-success m-2" onClick={handleMenosPage}>Anterior</button>)
            }
          </div>
          <div>
            <button className="btn btn-success m-2" disabled>{num}</button>
          </div>
          <div>
            {
              num !== page.pages && (<button className="btn btn-success m-2" onClick={handleMasPage}>Siguiente</button>)
            }
            </div>
        </div>
    )
}

export default Sail;