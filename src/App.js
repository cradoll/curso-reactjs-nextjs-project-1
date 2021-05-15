import "./App.css";
import { Component } from "react";

import { loadPosts } from "./utils/load-posts";
import { Posts } from "./components/Posts";

class App extends Component {
  state = {
    posts: [],
  };

  //Componente Montado
  async componentDidMount() {
    //Utilizado para chamar a API
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();
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
        <Posts posts={posts} />
      </section>
    );
  }
}

export default App;
