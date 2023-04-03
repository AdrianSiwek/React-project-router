import styles from '../styles/Article.module.css';
import React from 'react';



const Article = ({title, text, author}) => {
    return ( 
        <article>
            <h3 className={styles.title}>{title}</h3>
            <span>{ author}</span>
            <p>{text}</p>
        </article>
     );
}
 
export default Article;