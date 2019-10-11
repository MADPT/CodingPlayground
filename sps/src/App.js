import React from 'react';
import './App.css';

const API = 'https://hn.algolia.com/api/v1/search_by_date?tags=story';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
            page: '',
            moreNews: false
        };
    }

    componentDidMount() {
        this.getNews();
    }
    
    getNews(query = 0, page = 0) {
        let search = (query ? '&query=' + query : '') + (page ? '&page=' + page : '');

        fetch(API + search)
            .then(response => response.json())
            .then(data => {

                console.log(data);

                this.setState(prevState => ({
                    news: [...prevState.news, ...data.hits],
                    page: data.page,
                    moreNews: !data.exhaustiveNbHits
                }));
            });
    }

    loadMore() {
        let page = this.state.page;
        // TODO: get query on loadMore()
        this.getNews('', page+1);
    }

    render() {
        let {news, moreNews } = this.state;

        return (
            <div className="App">
                {news ?(
                    <React.Fragment>
                        <ul>
                        {news.map(singleNews => 
                            <li key={singleNews.objectID}>
                                <a href={singleNews.url} target="_blank">{singleNews.title}</a>
                                <p>By {singleNews.author} - {singleNews.num_comments} comments at {new Date(singleNews.created_at_i * 1000).toISOString().slice(0, 19).replace('T', ' ')} </p>
                            </li>
                        )}
                        </ul>
                        <button onClick={this.loadMore.bind(this)} disabled={!moreNews}>{moreNews ? 'Load More' : 'No more news'}</button>
                    </React.Fragment>
                ) : (
                    <h1>No news</h1>
                )}
            </div>
        );
    }
}

export default App;
