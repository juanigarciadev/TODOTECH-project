<h1 align="center"><strong>TODOTECH</strong></h1>

<div align="center">
<h3>Introduction:</h3>

This is <strong>TODOTECH</strong>, my first project in web development. My idea is to create an e-commerce that is as user-friendly as possible, applying basic functionalities but with good aesthetics so that it can captivate the consumer and people interested in my services.

<p>══════════════════════════════════════════════════════</p>

<!-- Languages and tools -->
<h3>Languages and tools used:</h3>
  <div align="center">    
      <img width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
    <img width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
    <img width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
    <img width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
    <img width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
    <img width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
    <img width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
    <img width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
    <img width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" />
  </div>
  </br>
<p>══════════════════════════════════════════════════════</p>
<!-- Wireframes -->
<h3>Wireframes:</h3>
Desktop view (1920x1080) <a href="https://bit.ly/3PuiSEw">Click here</a></br>
Laptop view (1024x768) <a href="https://bit.ly/3AVIWo4">Click here</a></br>
Mobile M view (375x812) <a href="https://bit.ly/3ckiytR">Click here</a></br>
</br>
<p>══════════════════════════════════════════════════════</p>
  
<!-- Setup -->
<h3>Setup:</h3>
Node.js v14.15+ is required to start the procedure.

Install dependencies:

```sh
$ npm init 
$ npm install -D node-sass nodemon
```
Modify the scripts in the <strong>package.json</strong> file to start building:

```sh
 "build-css": "node-sass --include-path scss scss/style.scss css/style.css",
 "watch.css": "nodemon -e scss -x \ "npm run build-css""
```

Run the script in the terminal:

```sh
$ npm run watch-css
```
<p>══════════════════════════════════════════════════════</p>
<!-- Bootstrap -->
<h3>Bootstrap:</h3>

Bootstrap is a cross-platform library or open source toolset for website and web application design. It was decided to use it in the project since it would help to obtain a Responsive and modern design without too many complications.

<a href="https://getbootstrap.com/">Go to Bootrstrap website</a>

</br>
To be able to apply Bootstrap it can be done in two ways:


1- Linking the CSS and JavaScript CDN:

```sh
"<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">"

"<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>"
```
2- Downloading the CSS and JavaScript files and linking them to the HTML:

```sh
"<link rel="stylesheet" href="./css/bootstrap-5.1.3-dist/css/bootstrap.css">"

"<script src="./js/bootsrap.js"></script>"
```
</div>
</br>
<div align="center">
<p>Made with <3</p>
</div>
