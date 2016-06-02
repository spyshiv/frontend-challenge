# Infratab Frontend Coding Challenge!

## Getting started
1. [Participate](#participate)
2. [Setup the project](#setup-the-project)
3. [Complete the Challenge!](#challenge)

### Participate
There are two ways to participate in our conding challenge -
- [By cloning this repo and using the Github Flow](#cloning-the-repo-use-the-github-flow)
- [By downloading the entire project directory as a compressed folder](#downloading-the-project-directory)

We would like you to follow the Github flow to participate in the coding challenge if you are familiar with Git and its ecosystem. However, in case you are not familiar with Git, please feel free to download the project directory and then complete the [Challenge](#challenge)

#### Cloning the repo (Use the Github flow)
1. Clone this repository
2. Follow the [Github Flow](https://guides.github.com/introduction/flow/)
3. Complete the requirements listed in the [Challenge](#challenge)
4. Open a pull request!

#### Downloading the project directory
1. Download this project direactory as a compressed folder (`frontend-challenge.zip`)
2. Complete the requirements listed in the [Challenge](#challenge)
3. Email the compressed folder to careers@infratab.in or to the person with whom you have been interacting!

### Setup the project
1. Run npm install
2. Run `npm start` to run server
3. Open `http://localhost:3001/` in browser, if you see `Here you go!` text in the browser that means server is successfully running
4. Please find `index.html` in the `public` folder
5. Now you can start your coding!

### Challenge

[Here](https://github.com/Infratab/Twitter-Trends/blob/master/API.md) are the list of api end points.

Your challenge is to design a web page which shows trends percent contribution in the form of pie chart

DOM:
Checkout the DOM sample here: 

You have to write html, css for this web page. If you face any problems please contact us.


#### Features:

##### 1. Two dropdowns for selecting countries.
    You can select country either from anyone or both the dropdowns.If you select a single country,then you have to show trends for that country else if you select countries from both the dropdowns, then show common trends of those countries.

##### 2. Show trends
    The trends have to be displayed in the bottom-lef of the page as shown in the image

##### 3. Weight calculation
  - Calculate wieght of each trend as follows

  	- Assign weights 1 - 26 to alphabets from A-Z
  	- For all the special characters like #, $, -,... weight is 0
  	- For all the digits, the "value" is the "weight" like for 1 its 1, for 2 its 2 and so on.
  	- After assigning weights, calculate the weight of trend by adding wieghts of each character
  
  - Add the weight of all trends
  - Calculat percentage contribution for each trend
  - Display this percentage contribution of all the trends in a piechart
