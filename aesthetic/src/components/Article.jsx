import styles from '../styles/Article.module.css';


const Article = ({title, author, text}) => {
    return ( 
        <article>
            <h3 className={styles.title}>{title}</h3>
            <span className={styles.author}>{ author}</span>
            <p className={styles.text}>{text}</p>
        </article>
     );
}
 
export default Article;