import { Link } from "react-router-dom";
import useFetch from "../useFetch";

const Characters = () => {
  const {
    error,
    isPending,
    data: characters,
  } = useFetch(process.env.REACT_APP_API_BASE + "/characters");

  return (
    <section className="characters">
      <h2>Characters</h2>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}

      {characters &&
        (characters.length > 0 ? (
          characters.map((character) => (
            <Link to={`characters/${character._id}`} key={character._id}>
              {character.characterName}
            </Link>
          ))
        ) : (
          <p>You have no characters.</p>
        ))}
    </section>
  );
};

export default Characters;
