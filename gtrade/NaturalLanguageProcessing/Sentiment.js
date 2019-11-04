const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
  version: '2019-07-12',
  authenticator: new IamAuthenticator({
    apikey: 'b7DmXMCT1_r3V_opK1VSBILGDp0dcNoc9pT4nxAy8O0F',
  }),
  url: 'https://gateway.watsonplatform.net/natural-language-understanding/api',
});
var result = [];
function doCalc(inURL, companyName){
  console.log('The second one');

  const analyzeParams = {
    'url': inURL,
    'features': {
      'sentiment': {
        'targets': [
          companyName
        ]
      }
    }
  };
  naturalLanguageUnderstanding.analyze(analyzeParams)
    .then(analysisResults => {
      result.push(analysisResults.result.sentiment.targets[0].label);
      result.push(analysisResults.result.sentiment.targets[0].score);
      //console.log(JSON.stringify(analysisResults, null, 2));
    })
    .catch(err => {
      console.log('error:', err);
    });

}
function getSentiment(URL, Company){
  doCalc(URL, Company);
  setTimeout(function() {console.log(result)}, 4000);
  return result;
}
getSentiment('https://www.wsj.com/articles/mcdonalds-fires-ceo-steve-easterbrook-over-relationship-with-employee-11572816660', 'McDonald’s');