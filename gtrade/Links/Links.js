const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('f88adea34f584c2ba358c1ce0783eb78');

newsapi.v2.everything({
    qinTitle: '+Apple',
    q: '+Apple',
    sortBy: 'relevancy',
    language: 'en'
}).then(response => {
    console.log(response);
  });