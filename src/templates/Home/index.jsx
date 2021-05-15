import "./styles.css";
import { Component } from "react";

import { Posts } from "../../components/Posts";
import { loadPosts } from "../../utils/load-posts";
import { Button } from "../../components/Button";

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2,
  };

  //Componente Montado
  async componentDidMount() {
    //Utilizado para chamar a API
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  };

  loadMorePosts = () => {
    const { page, postsPerPage, allPosts, posts } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    posts.push(...nextPosts);
    this.setState({
      posts,
      page: nextPage,
    });
  };
  //Componente Atualizado
  componentDidUpdate() {}

  //Componente será desmontado
  componentWillUnmount() {}

  render() {
    //Chamado novamente quando um estado é atualizado
    const { posts, page, postsPerPage, allPosts } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    //return <h1>Oi</h1>;
    return (
      <section className="container">
        <Posts posts={posts} />
        <div className="button-container">
          <Button
            disabled={noMorePosts}
            text="Load More Posts"
            onClick={this.loadMorePosts}
          />
        </div>
      </section>
    );
  }
}

export default Home;
