const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('f88adea34f584c2ba358c1ce0783eb78');

let urlArray = [];

newsArticles = newsapi.v2.everything({
    qinTitle: '+Apple',
    q: '+Apple',
    sortBy: 'relevancy',
    language: 'en'
});

newsArticles.then(response => {
    for (let i = 0; i < response.articles.length; i++)
    {
        urlArray.push(response.articles[i].url);
    }
    //console.log(urlArray);
  });
