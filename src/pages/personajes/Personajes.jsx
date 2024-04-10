import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Personajes = () => {
    const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  let estados = ["", "alive", "dead", "unknown"];
  let generos = ["", "female", "male", "genderless", "unknown"];

  
  let baseUrl = `https://rickandmortyapi.com/api/character/?page=${page}&status=${status}&gender=${gender}`;

  const getCharacters = async () => {
    
    
  
    const api = await axios.get(baseUrl);
    setCharacters(api.data.results);
  };
  
  useEffect(() => {
    getCharacters();
  }, [baseUrl]);
  return (
    <section>
      <select onChange={(ev) => setGender(ev.target.value)} className="select">
        {generos.map((genero, index) => (
          <option key={index} value={genero}>
            {genero}
          </option>
        ))}
      </select>
      <select onChange={(ev) => setStatus(ev.target.value)}className="select">
        {estados.map((estado, index) => (
          <option key={index} value={estado}>
            {estado}
          </option>
        ))}
      </select>

      <div className="container-cards">
        {characters.map((character, index) => (
          <div className="character-card" key={index}>
            <Link to={`/character/${character.id}`}>
          <img src={character.image} alt={character.name} />
          </Link>
          <h2 className={character.status}>{character.name}</h2>
          <p>Especie:<span className="character-card-resuls"> {character.species}</span></p>
          <p>Origen: <span className="character-card-resuls"> {character.origin.name}</span></p>
        </div>
         
        ))}
        
      </div>
      {page == 1 ? (
        <button onClick={() => setPage(page + 1)}>siguiente</button>
      ) : (
        <>
          <button onClick={() => setPage(page - 1)}>anterior</button>
          <button onClick={() => setPage(page + 1)}>siguiente</button>
        </>
      )}
    </section>
  );
};


export default Personajes