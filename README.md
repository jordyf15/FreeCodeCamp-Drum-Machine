# Drum Machine
For the third project of FreeCodeCamp Frontend Library Curriculum, we have to make a Drum Machine using any mix of technology such as HTML, Javascript, CSS, Bootstrap, SASS, React, Redux, and jQuery.

## Test/User Stories
1. I should be able to see an outer container with a corresponding id="drum-machine" that contains all other elements.
2. Within #drum-machine I can see an element with a corresponding id="display".
3. Within #drum-machine I can see 9 clickable drum pad elements, each with a class name of drum-pad, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.
4. Within each .drum-pad, there should be an HTML5 audio element which has a src attribute pointing to an audio clip, a class name of clip, and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).
5. When I click on a .drum-pad element, the audio clip contained in its child audio element should be triggered.
6. When I press the trigger key associated with each .drum-pad, the audio clip contained in its child audio element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string "Q", pressing the W key should trigger the drum pad which contains the string "W", etc.).
7. When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique).  
  
We need to include the CDN link in the public\index.html file to be able to run the test in any environment we like. The example to include it:
```
<script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
```

## Live Demo on Codepen
https://codepen.io/jordyf15/full/MWKBNYe

## Technology Used
1. HTML
2. CSS
3. Javascript
3. React version 16.13.1
4. Fontawesome version 5.8.1

## List of React Components

### App Component
The App component will render the drum machine itself, including all the drum components, the controls of the drum such as the volume, power, and bank. The App component is the parent of all Drums components.

#### States
The App component have 4 state:
1. power: this is the current power state of the drummachine which can be turned off and on by the user.
2. bank: this is the current bank state of the drummachine wherethe user can switch from a heater or piano which will set the sounds of each drum.
3. display: this is the current display state of the drummachine where it will display the last sound produced by the drums or the current volume that was set by the user.
4. volume: this it the current volume state of the drummachine where it will set the volume of the sounds.

#### Functions
The App component have 5 functions:
1. powerChange: this will change the power state of the drummachine to off if it was previously on and the other way around or vice versa. This will also disable the the volume and bank button if the power is off and enable it if the power is on.
2. changeDisplay: this will change the display state of the drummachine.
3. offDisp: this will empty the display state of the drummachine.
4. changeBank: this will change the bank state of the drummachine to either heater kit or piano kit.
5. changeVolume: this will change the volume state of all the drums.

#### Renders
The App component will render the following elements:
1. The drummachine div which will contain all of the drum elements.
2. The drumContainer which will hold all of the drum components.
3. The controlContainer which will hold all of the control buttons and display.
4. All 9 Drum components which receive prop such as currentBank state, currentPower state and the changeDisplay function.
5. The power button that will trigger the powerChange function when clicked.
6. The display div which will display the current display state of the drummachine.
7. The bank button that will trigger the changeBank function when clicked.
8. The volume range that will trigger the changeVolume function when altered by the user.

### Drum components
There are 9 Drum components in the drummachine which hold the same state, function, and renders but with different values.

#### States
All of the Drum components have each 5 states:
1. soundDesc: this is the current soundDesc state of the drum component which will be displayed when the drum is played.
2. soundClip: this is the current soundClip state of the drum component which will be played then the drum is triggered.
3. clicked: this is the current clicked state of the drum component which will determine the color of the drum when it is currently triggered or not.
4. moveClicked: this is the current moveClicked state of the drum component which will determine the position of the drum when it is currently triggered or not.
5. shadowClicked: this is the current shadowClicked state of the drum component which will determine the shadow style of the drum when it is currently triggered or not.

#### Functions:
All of the Drum components have each 6 functions:
1. componentDidMount: this function will add an eventlistener for a keydown event and call the keyDownFunc function.
2. componentWillUnmount: this function will remove the eventlistener for a keydown event that will call the keyDownFunc function.
3. changeClick: this function will trigger the changeDisplay function from the App component to display the sound of the drum that was played and also play the soundClip. This function will also change the clicked, moveclicked and shadowclicked state to make the drum button looked clicked. and then it will call the returnClick function.
4. returnClick: this function will change the clicked, moveClicked and shadowClicked state of the drum to the default state after it was change in the changeClick function.
5. keyDownFunc: this function will receive the key that was pressed during the keydown event and trigger the changeClick function if the key is associated with the drum component.
6. componentWillReceiveProps: this function will be triggered when there is a change of prop receive and change the soundDesc and soundClip state of the drum depending on the currentBank prop from the App component.

#### Renders:
The Drum components each will render the following elements:
1. A drum div that will hold the button and audio of the drum.
2. A drum button that will call the changeClick when clicked.
3. A audio element that will hold the current soundClip of the drum.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

