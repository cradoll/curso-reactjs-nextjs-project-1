import "./styles.css";
import { Component } from "react";

import { Posts } from "../../components/Posts";
import { loadPosts } from "../../utils/load-posts";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2,
    searchValue: "",
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

  handleChange = (e) => {
    const { value } = e.target;

    this.setState({ searchValue: value });
    console.log(value);
  };

  render() {
    //Chamado novamente quando um estado é atualizado
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = !!searchValue
      ? allPosts.filter((post) => {
          return post.title.toLowerCase().includes(searchValue.toLowerCase());
        })
      : posts;

    return (
      <section className="container">
        <div className="search-container">
          {!!searchValue && <h1>Search Value: {searchValue}</h1>}
          <TextInput
            handleChange={this.handleChange}
            searchValue={searchValue}
          />
        </div>

        {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
        {filteredPosts.length === 0 && <p>Não Existem Posts</p>}
        <div className="button-container">
          {!searchValue && (
            <Button
              disabled={noMorePosts}
              text="Load More Posts"
              onClick={this.loadMorePosts}
            />
          )}
        </div>
      </section>
    );
  }
}

export default Home;
