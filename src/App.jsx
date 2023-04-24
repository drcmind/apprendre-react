import { useState } from "react";
import "./App.css";
import Compteur from "./composants/Compteur";
import Navbar from "./composants/Navbar";
import Post from "./composants/Post";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      titre: "Amani Kaso",
      description:
        "Voic un exemple de texte qui vient juste remplacer ce texte ici",
      liker: false,
    },
    {
      id: 2,
      titre: "Amani Kaso",
      description:
        "Voic un exemple de texte qui vient juste remplacer ce texte ici",
      liker: false,
    },
    {
      id: 6,
      titre: "Audy mbuyu",
      description:
        "Voic un exemple de texte qui vient juste remplacer ce texte ici",
      liker: false,
    },
    {
      id: 3,
      titre: "Jean Julien",
      description:
        "Voic un exemple de texte qui vient juste remplacer ce texte ici",
      liker: false,
    },
    {
      id: 4,
      titre: "Pierre Simon",
      description:
        "Voic un exemple de texte qui vient juste remplacer ce texte ici",
      liker: false,
    },
  ]);

  const liker = (data) => {
    const donneeCopier = [...posts];
    const index = posts.indexOf(data);
    donneeCopier[index] = { ...posts[index], liker: !posts[index].liker };
    setPosts(donneeCopier);
    console.log(donneeCopier);
  };
  const effacerPost = (id) => {
    const nouvelledonnee = posts.filter((p) => p.id != id);
    setPosts(nouvelledonnee);
  };

  const nmbreLiker = posts.filter((p) => p.liker);
  return (
    <div className="App">
      <Navbar nombrelike={nmbreLiker.length} />
      {posts.map((p) => (
        <Post data={p} key={p.id} liker={liker} supression={effacerPost} />
      ))}
    </div>
  );
}

export default App;
