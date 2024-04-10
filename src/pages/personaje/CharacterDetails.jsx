import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const CharacterDetails = () => {
  const { id } = useParams(); // Obtener el ID del personaje de la URL
  const [character, setCharacter] = useState(null); // Estado para almacenar los detalles del personaje

  useEffect(() => {
    // Función para obtener los detalles del personaje por ID
    const getCharacterById = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`); // Hacer la petición a la API
        setCharacter(response.data); // Actualizar el estado con los detalles del personaje
      } catch (error) {
        console.error("Error fetching character details:", error);
      }
    };

    getCharacterById(); // Llamar a la función al cargar el componente
  }, [id]); // Ejecutar el efecto cada vez que cambie el ID

  if (!character) {
    return <div>Cargando...</div>; // Mostrar un mensaje de carga mientras se obtienen los detalles del personaje
  }

  return (
    <div>
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Origin: {character.origin.name}</p>
      <p>Location: {character.location.name}</p>
    
      <h3>Episodes:</h3>
      <ul>
        {character.episode.map((episodeUrl, index) => (
          <li key={index}>
            <a href={episodeUrl}>Episode {index + 1}</a>
          </li>
        ))}
      </ul>
      <p>Created: {character.created}</p>
      <Link to="/personajes">Volver a la galería</Link>
      
    </div>
    
  );
};

export default CharacterDetails;
