### GET /countries

**Response:**
```
{
  "countries": [
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

### GET countries/{country}/trends

**Respone:** 

ex: country = India

**NOTE:** value of parameter to this api, is one of the country names from the [above](https://github.com/Infratab/Twitter-Trends/blob/master/API.md#get-apiwebcountrylist) end point response
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
