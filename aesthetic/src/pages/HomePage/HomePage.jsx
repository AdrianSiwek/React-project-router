import React from 'react';
import Article from '../../components/Article';


const articles = [
  {
    id: 1,
    title: "Co to jest logopedia?",
    author: "Dagmara K.",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quo in veniam, eaque tempore placeat eum impedit. Sequi ratione incidunt, voluptates exercitationem corporis assumenda facere perspiciatis dolorum laborum molestiae eum."
  },
  {
    id: 2,
    title: "Co to jest neurologopedia?",
    author: "Dagmara K.",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo quo in veniam, eaque tempore placeat eum impedit.Sequi ratione incidunt, voluptates exercitationem corporis assumenda facere perspiciatis dolorum laborum molestiae eum."
  },
  {
    id: 3,
    title: "Co powinieneś/aś wiedzieć o wędzidełku?",
    author: "Dagmara K.",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quo in veniam, eaque tempore placeat eum impedit. Sequi ratione incidunt, voluptates exercitationem corporis assumenda facere perspiciatis dolorum laborum molestiae eum."
  },
  {
    id: 4,
    title: "Kiedy Twoje dziecko powinno mówić?",
    author: "Dagmara K.",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quo in veniam, eaque tempore placeat eum impedit. Sequi ratione incidunt, voluptates exercitationem corporis assumenda facere perspiciatis dolorum laborum molestiae eum."
  },
]


const HomePage = () => {
   const artList = articles.map(article => (
    <Article key={article.id} {...article} />
  ))
    return (
      <div className="home">
        {artList}
        </div>
      );
}
 
export default HomePage;