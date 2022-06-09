# AkramCSS
## Utility css library to speed up your work


[![Generic badge](https://img.shields.io/badge/AkramCSS-DOC-blue.svg)](https://akramcss.vercel.app/) [![Generic badge](https://img.shields.io/badge/AkramCSS-Github-white.svg)](https://github.com/Nouhack/AkramCSS) [![Generic badge](https://img.shields.io/badge/AkramCSS-npm-red.svg)](https://www.npmjs.com/package/@nouhsa/akramcss) 



AkramCSS is a utility css library that gives you a variety of classes that helps you to speed up your developement workflow and LCT (less css touch) ..



## Features

- AkramCSS has been built using only CSS (no javascript) .
- To make the library more powerfull we added some postCSS plugin .
- light and minified version that you can use from our CDN (we do not encourage using CDN IN PRODUCTION ) .


We do not encourage using AkramCSS from it's CDN in production because you'll face performence issue where the browser will download all the css (used and the unused) but when using it the proper way as shown in the doc you'll get rid of the unused css above of that you'll get a minified small css readable from all browsers .

> The pain will leave once you try AkramCss .

## Installation

We assume that you have npm and node installed in your system  [Node.js](https://nodejs.org/).

Install the dependencies and devDependencies and start the server.

```sh
npm install @nouhsa/akramcss 
```


## Import css file

import akramcss.min.css in your global css file :
```css
@import "../node_modules/@nouhsa/akramcss/css/akramcss.min.css"
```

## Import global.css into your html entry file
```html
<link rel = "stylesheet" href = "path of your global.css file">
```

## Congratulations now can use AkramCSS

```html
<div class="bg-senary">
     <div class="w-90-100 bg-akram font-bold text-base p-2 rounded-lg ls-wider" />
     <div class="w-90-100 bg-akram font-bold text-base p-2 rounded-lg ls-wider" />
</div>
```

