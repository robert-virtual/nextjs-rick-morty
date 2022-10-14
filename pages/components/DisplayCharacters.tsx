import { useQuery } from "@apollo/client";
import styles from "../../styles/Home.module.css";
import { GET_CHARACTERS, IGetCharacters } from "../queries";

export function DisplayCharacters() {
  const { loading, error, data } = useQuery<IGetCharacters>(GET_CHARACTERS);
  if (loading) return <p>Cargando...</p>;
  console.log({ error });

  if (error) return <p>Ups ha ocurridoun error {error.message}</p>;
  if (!data) return <p>No hay datos que mostar</p>;
  console.log({data});

  return (
    <div className={styles.grid}>
      {data.characters.results.map(({id,name,status,image}) => (
        <div key={id.toString()} className={styles.card}>
          <h2>{name}</h2>
          <img src={image} width={250}/>
          <p>{status}</p>
        </div>
      ))}
    </div>
  );
}
