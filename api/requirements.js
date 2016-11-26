import express from 'express';
const router = express.Router();
import request from 'request';
import Countries from './countries';

const wikiApiUrl = (title) => `https://en.wikipedia.org/w/api.php?action=query&titles=${title}&prop=revisions&rvprop=content&format=json`

const getCountriesWhichDontRequireVisa = body => {
  const regex = /flag\|([A-Z]\w+)}}(?:[^\|]*\|){2}([^}]*)/gmi;
  let match = regex.exec(body);
  let countriesNoVisaRequired = [];
  while(match != null) {
      if (match[2] === 'Visa not required') {
          countriesNoVisaRequired.push(match[1]);
      }
      match = regex.exec(body);
  }
  return countriesNoVisaRequired;
};

router.get('/:country', (req, res) => {
    const country = Countries[req.params.country.toUpperCase()];
    if (!country) {
        res.json({ error: `Country ${req.params.country} is not part of our set` });
    } else {
        request(wikiApiUrl(country.wikiTitle), (error, response, body) => {
            if (error || response.statusCode != 200) {
                res.json({ error: error });
            } else {
                const countries = getCountriesWhichDontRequireVisa(body);
                res.json({ countries });
            }
        });
    }
});

export default router;
