import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    counter: 0,
    posts: [
      {
        id: 1,
        title: "O título 1",
        body: "O corpo 1",
      },
      {
        id: 2,
        title: "O título 2",
        body: "O corpo 2",
      },
      {
        id: 3,
        title: "O título 3",
        body: "O corpo 3",
      },
    ],
  };
  timeoutUpdate = null;

  //Componente Montado
  componentDidMount() {
    //Utilizado para chamar a API
    this.handleTimeout();
  }

  //Componente Atualizado
  componentDidUpdate() {
    this.handleTimeout();
  }

  //Componente será desmontado
  componentWillUnmount() {
    clearTimeout(this.timeoutUpdate);
  }

  handleTimeout = () => {
    const { posts, counter } = this.state;
    posts[0].title = "O título mudou";

    this.timeoutUpdate = setTimeout(() => {
      this.setState({ posts, counter: counter + 1 });
    }, 5000);
    console.log(posts[0].title);
  };

  render() {
    //Chamado novamente quando um estado é atualizado
    const { posts, counter } = this.state;

    //return <h1>Oi</h1>;
    return (
      <div className="App">
        <h1>{counter} </h1>
        {posts.map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
