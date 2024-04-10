import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const LocationsGallery = () => {
    const [locations, setLocations] = useState([]); // Estado para almacenar la lista de mundos

    useEffect(() => {
        // Función para obtener la lista de mundos
        const getLocations = async () => {
            try {
                const response = await axios.get("https://rickandmortyapi.com/api/location"); // Hacer la petición a la API
                setLocations(response.data.results); // Actualizar el estado con la lista de mundos
            } catch (error) {
                console.error("Error fetching locations:", error);
            }
        };

        getLocations(); // Llamar a la función al cargar el componente
    }, []); // Ejecutar el efecto solo una vez al montar el componente

    return (
        <div>
            <h2>Lista de Mundos</h2>
            <ul>
                {locations.map((location) => (
                    <li key={location.id}>
                        <Link to={`/location/${location.id}`}>{location.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LocationsGallery;