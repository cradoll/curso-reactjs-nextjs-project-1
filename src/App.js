import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    posts: [],
    photos: [],
  };

  //Componente Montado
  componentDidMount() {
    //Utilizado para chamar a API
    this.loadPosts();
  }

  loadPosts = async () => {
    const postsResponse = fetch("https://jsonplaceholder.typicode.com/posts");
    const photosResponse = fetch("https://jsonplaceholder.typicode.com/photos");

    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    //Unir dois arrays pelo menor (Existem 100 posts e 5000 fotos)
    const postsAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url };
    });

    this.setState({ posts: postsAndPhotos });
  };
  //Componente Atualizado
  componentDidUpdate() {}

  //Componente será desmontado
  componentWillUnmount() {}

  render() {
    //Chamado novamente quando um estado é atualizado
    const { posts } = this.state;

    //return <h1>Oi</h1>;
    return (
      <section className="container">
        <div className="posts">
          {posts.map((post) => (
            <div className="post">
              <img src={post.cover} alt={post.title} />
              <div key={post.id} className="post-content">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default App;
