### GET /api/web/country/list/

** Response: **
```
{
  "countrylist": [
    "India",
    "Pakistan",
    "Singapore",
    "SouthAfrica",
    "UnitedKingdom",
    "Canada",
    "UnitedStates",
    "Australia",
    "NewZealand"
  ]
}
```

### GET /api/web/trends/<country>

Respone: 

ex: country = India

**NOTE:** value of parameter to this api is one of the country names from the above end point response
```
{
  "trends": [
    {
      "events": null,
      "name": "#thecrosspolo",
      "url": "http://twitter.com/search/?q=#thecrosspolo"
    },
    {
      "events": null,
      "name": "Bollywood",
      "url": "http://twitter.com/search/?q=Bollywood"
    },
    {
      "events": null,
      "name": "#KeepOffTemples",
      "url": "http://twitter.com/search/?q=#KeepOffTemples"
    },
    {
      "events": null,
      "name": "#MyPhoneTaughtMe",
      "url": "http://twitter.com/search/?q=#MyPhoneTaughtMe"
    },
    {
      "events": null,
      "name": "#music",
      "url": "http://twitter.com/search/?q=#music"
    },
    {
      "events": null,
      "name": "#SM4CXOs",
      "url": "http://twitter.com/search/?q=#SM4CXOs"
    },
    {
      "events": null,
      "name": "#TGIF",
      "url": "http://twitter.com/search/?q=#TGIF"
    },
    {
      "events": null,
      "name": "Gujarat",
      "url": "http://twitter.com/search/?q=Gujarat"
    },
    {
      "events": null,
      "name": "Hyper Building",
      "url": "http://twitter.com/search/?q=Hyper Building"
    },
    {
      "events": null,
      "name": "Sushmita Banerjee",
      "url": "http://twitter.com/search/?q=Sushmita Banerjee"
    }
  ]
}
```