import React, {Component} from 'react'
import Article from "./Article";

class ArticleList extends Component {

    render() {
        const {list} = this.props

        const articleItems = list.map(a =>
            <li key={a.id}>
                <Article data={a}/>
            </li>);

        return (
            <ul>
                {articleItems}
            </ul>
        );
    }

}

export default ArticleList;