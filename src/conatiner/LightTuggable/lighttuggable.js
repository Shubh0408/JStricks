import React from "react";
import "./style.css";

export default function LightTuggable () {

    const {
        gsap: { registerPlugin, set, to, timeline },
        MorphSVGPlugin,
        Draggable } =
      window;
      registerPlugin(MorphSVGPlugin);
      
      // Used to calculate distance of "tug"
      let startX;
      let startY;
      
      const AUDIO = {
        CLICK: new Audio('https://assets.codepen.io/605876/click.mp3') };
      
      const STATE = {
        ON: false };
      
      const CORD_DURATION = 0.1;
      
      const CORDS = document.querySelectorAll('.toggle-scene__cord');
      const HIT = document.querySelector('.toggle-scene__hit-spot');
      const DUMMY = document.querySelector('.toggle-scene__dummy-cord');
      const DUMMY_CORD = document.querySelector('.toggle-scene__dummy-cord line');
      const PROXY = document.createElement('div');
      // set init position
      const ENDX = DUMMY_CORD.getAttribute('x2');
      const ENDY = DUMMY_CORD.getAttribute('y2');
      const RESET = () => {
        set(PROXY, {
          x: ENDX,
          y: ENDY });
      
      };
      
      RESET();
      
      const CORD_TL = timeline({
        paused: true,
        onStart: () => {
          STATE.ON = !STATE.ON;
          set(document.documentElement, { '--on': STATE.ON ? 1 : 0 });
          set([DUMMY, HIT], { display: 'none' });
          set(CORDS[0], { display: 'block' });
          AUDIO.CLICK.play();
        },
        onComplete: () => {
          set([DUMMY, HIT], { display: 'block' });
          set(CORDS[0], { display: 'none' });
          RESET();
        } });
      
      
      for (let i = 1; i < CORDS.length; i++) {
        CORD_TL.add(
        to(CORDS[0], {
          morphSVG: CORDS[i],
          duration: CORD_DURATION,
          repeat: 1,
          yoyo: true }));
      
      
      }
      
      Draggable.create(PROXY, {
        trigger: HIT,
        type: 'x,y',
        onPress: e => {
          startX = e.x;
          startY = e.y;
        },
        onDrag: function () {
          set(DUMMY_CORD, {
            attr: {
              x2: this.x,
              y2: this.y } });
      
      
        },
        onRelease: function (e) {
          const DISTX = Math.abs(e.x - startX);
          const DISTY = Math.abs(e.y - startY);
          const TRAVELLED = Math.sqrt(DISTX * DISTX + DISTY * DISTY);
          to(DUMMY_CORD, {
            attr: { x2: ENDX, y2: ENDY },
            duration: CORD_DURATION,
            onComplete: () => {
              if (TRAVELLED > 50) {
                CORD_TL.restart();
              } else {
                RESET();
              }
            } });
      
        } });

        
    return (
        <body>
        <svg class="toggle-scene" xmlns="http://www.w3.org/2000/svg" preserveaspectratio="xMinYMin" viewBox="0 0 197.451 481.081">
          <defs>
            <marker id="e" orient="auto" overflow="visible" refx="0" refy="0">
              <path class="toggle-scene__cord-end" fill-rule="evenodd" stroke-width=".2666" d="M.98 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
            </marker>
            <marker id="d" orient="auto" overflow="visible" refx="0" refy="0">
              <path class="toggle-scene__cord-end" fill-rule="evenodd" stroke-width=".2666" d="M.98 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
            </marker>
            <marker id="c" orient="auto" overflow="visible" refx="0" refy="0">
              <path class="toggle-scene__cord-end" fill-rule="evenodd" stroke-width=".2666" d="M.98 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
            </marker>
            <marker id="b" orient="auto" overflow="visible" refx="0" refy="0">
              <path class="toggle-scene__cord-end" fill-rule="evenodd" stroke-width=".2666" d="M.98 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
            </marker>
            <marker id="a" orient="auto" overflow="visible" refx="0" refy="0">
              <path class="toggle-scene__cord-end" fill-rule="evenodd" stroke-width=".2666" d="M.98 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
            </marker>
            <clippath id="g" clippathunits="userSpaceOnUse">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4.677" d="M-774.546 827.629s12.917-13.473 29.203-13.412c16.53.062 29.203 13.412 29.203 13.412v53.6s-8.825 16-29.203 16c-21.674 0-29.203-16-29.203-16z"></path>
            </clippath>
            <clippath id="f" clippathunits="userSpaceOnUse">
              <path d="M-868.418 945.051c-4.188 73.011 78.255 53.244 150.216 52.941 82.387-.346 98.921-19.444 98.921-47.058 0-27.615-4.788-42.55-73.823-42.55-69.036 0-171.436-30.937-175.314 36.667z"></path>
            </clippath>
          </defs>
          <g class="toggle-scene__cords">
            <path class="toggle-scene__cord" marker-end="url(#a)" fill="none" stroke-linecap="square" stroke-width="6" d="M123.228-28.56v150.493" transform="translate(-24.503 256.106)"></path>
            <path class="toggle-scene__cord" marker-end="url(#a)" fill="none" stroke-linecap="square" stroke-width="6" d="M123.228-28.59s28 8.131 28 19.506-18.667 13.005-28 19.507c-9.333 6.502-28 8.131-28 19.506s28 19.507 28 19.507" transform="translate(-24.503 256.106)"></path>
            <path class="toggle-scene__cord" marker-end="url(#a)" fill="none" stroke-linecap="square" stroke-width="6" d="M123.228-28.575s-20 16.871-20 28.468c0 11.597 13.333 18.978 20 28.468 6.667 9.489 20 16.87 20 28.467 0 11.597-20 28.468-20 28.468" transform="translate(-24.503 256.106)"></path>
            <path class="toggle-scene__cord" marker-end="url(#a)" fill="none" stroke-linecap="square" stroke-width="6" d="M123.228-28.569s16 20.623 16 32.782c0 12.16-10.667 21.855-16 32.782-5.333 10.928-16 20.623-16 32.782 0 12.16 16 32.782 16 32.782" transform="translate(-24.503 256.106)"></path>
            <path class="toggle-scene__cord" marker-end="url(#a)" fill="none" stroke-linecap="square" stroke-width="6" d="M123.228-28.563s-10 24.647-10 37.623c0 12.977 6.667 25.082 10 37.623 3.333 12.541 10 24.647 10 37.623 0 12.977-10 37.623-10 37.623" transform="translate(-24.503 256.106)"></path>
            <g class="line toggle-scene__dummy-cord">
              <line marker-end="url(#a)" x1="98.7255" x2="98.7255" y1="240.5405" y2="380.5405"></line>
            </g>
            <circle class="toggle-scene__hit-spot" cx="98.7255" cy="380.5405" r="60" fill="transparent"></circle>
          </g>
          <g class="toggle-scene__bulb bulb" transform="translate(844.069 -645.213)">
            <path class="bulb__cap" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.677" d="M-774.546 827.629s12.917-13.473 29.203-13.412c16.53.062 29.203 13.412 29.203 13.412v53.6s-8.825 16-29.203 16c-21.674 0-29.203-16-29.203-16z"></path>
            <path class="bulb__cap-shine" d="M-778.379 802.873h25.512v118.409h-25.512z" clip-path="url(#g)" transform="matrix(.52452 0 0 .90177 -368.282 82.976)"></path>
            <path class="bulb__cap" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M-774.546 827.629s12.917-13.473 29.203-13.412c16.53.062 29.203 13.412 29.203 13.412v0s-8.439 10.115-28.817 10.115c-21.673 0-29.59-10.115-29.59-10.115z"></path>
            <path class="bulb__cap-outline" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.677" d="M-774.546 827.629s12.917-13.473 29.203-13.412c16.53.062 29.203 13.412 29.203 13.412v53.6s-8.825 16-29.203 16c-21.674 0-29.203-16-29.203-16z"></path>
            <g class="bulb__filament" fill="none" stroke-linecap="round" stroke-width="5">
              <path d="M-752.914 823.875l-8.858-33.06"></path>
              <path d="M-737.772 823.875l8.858-33.06"></path>
            </g>
            <path class="bulb__bulb" stroke-linecap="round" stroke-width="5" d="M-783.192 803.855c5.251 8.815 5.295 21.32 13.272 27.774 12.299 8.045 36.46 8.115 49.127 0 7.976-6.454 8.022-18.96 13.273-27.774 3.992-6.7 14.408-19.811 14.408-19.811 8.276-11.539 12.769-24.594 12.769-38.699 0-35.898-29.102-65-65-65-35.899 0-65 29.102-65 65 0 13.667 4.217 26.348 12.405 38.2 0 0 10.754 13.61 14.746 20.31z"></path>
            <circle class="bulb__flash" cx="-745.343" cy="743.939" r="83.725" fill="none" stroke-dasharray="10,30" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"></circle>
            <path class="bulb__shine" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M-789.19 757.501a45.897 45.897 0 013.915-36.189 45.897 45.897 0 0129.031-21.957"></path>
          </g>
        </svg>

          <script src='https://unpkg.co/gsap@3/dist/gsap.min.js'></script>
        <script src='https://assets.codepen.io/16327/MorphSVGPlugin3.min.js'></script>
        <script src='https://unpkg.com/gsap@3/dist/Draggable.min.js'></script><script  src="./script.js"></script>
        
        </body>
    )
}