import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const LocationDetails = () => {
    const { id } = useParams();
    const [location, setLocation] = useState(null); // Estado para almacenar los detalles del mundo
    const [residents, setResidents] = useState([]); // Estado para almacenar los residentes del mundo

    useEffect(() => {
        // Función para obtener los detalles del mundo por ID
        const getLocationDetails = async () => {
            try {
                const response = await axios.get(`https://rickandmortyapi.com/api/location/${id}`); // Hacer la petición a la API
                setLocation(response.data); // Actualizar el estado con los detalles del mundo
                // Obtener los detalles de los personajes residentes
                const residentsData = await Promise.all(response.data.residents.map(url => axios.get(url)));
                setResidents(residentsData.map(resident => resident.data));
            } catch (error) {
                console.error("Error fetching location details:", error);
            }
        };

      getLocationDetails();
    }, [id]); // Ejecutar el efecto cada vez que cambie la ID del mundo

    if (!location) {
        return <div>Cargando...</div>; // Mostrar un mensaje de carga mientras se obtienen los detalles del mundo
    }

    return (
        <div>
            <h2>{location.name}</h2>
            <p>Type: {location.type}</p>
            <p>Dimension: {location.dimension}</p>
            <p>Residents:</p>
            <ul>
                {residents.map((resident) => (
                    <li key={resident.id}>
                       <Link to={`/character/${resident.id}`}>{resident.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LocationDetails;
