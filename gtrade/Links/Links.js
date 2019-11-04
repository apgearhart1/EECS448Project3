const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('f88adea34f584c2ba358c1ce0783eb78');

let titleArray = [];

newsArticles = newsapi.v2.everything({
    qinTitle: '+Apple',
    q: '+Apple',
    sortBy: 'relevancy',
    language: 'en'
});

newsArticles.then(response => {
    for (let i = 0; i < response.articles.length; i++)
    {
        titleArray.push(response.articles[i].title);
    }
    console.log(titleArray);
  });
