author: Thong Le, javawtee@gmail.com

This component consists of:
- SSWrapper
- SSImage: where (a single) image is displayed with a random animation

Installation:
1. copy TGallery folder into your current working directory
2. import TGalleryStyling.css in TGallery.js (optional)
3. import TGallery from './TGallery', and call <TGallery /> in Parent Component

Known issues: N/A

Behaviors:
- In order to automatically change animation within "interval", state.animations =[] shouldn't be left empty
- Make your slide show more lively by adding more value to state.animations = []
- i.e: animations = ['fadeIn', 'fadeOut', 'spinY' ]
- 'spinY' is a @keyframes name for the animation which should be defined in CSS file (i.e: TGalleryStyling.css)

Adjustables:
- stylesheet import: import preset TGalleryStyling.css, or your desired stylings
- duration: duration of each animation
- interval: adjust this to be equivalent to duration, 1s duration = 1000

License: Default
