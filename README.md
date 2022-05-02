# 2x2-3D-Rubiks-Cube-Interactome
An interactive 2x2 Rubik's Cube solver made with ThreeJS. The cube turns through the use of buttons, scrambles accordingly to a randomly generated sequence, and solves with a beginner's method while logging out all the moves. The interactome can be run by opening the index.html file with a web browser. 

The control buttons, which turn and rotate the cube, are in accordance with Rubik's Cube notation, a guide which can be found here: https://ruwix.com/the-rubiks-cube/notation/. Each button corresponds to the notation in which the cube will be turned and or rotated. 

The scramble button scrambles the cube, randomly generating a 9 move sequence each time, and the current scramble is logged out at the top, which replaces the old one once scrambled again. Only one scramble is shown at one time. The steps taken to solve the given scramble follow immediately in the log.

The solve button solves the cube with a beginner's method and all the subsequent moves are logged out. Using the interactome's solve feature, you can learn how to solve it step-by-step by looking at the moves outputted in the log. The solve feature works for any scramble or orientation, whether scrambled with the scramble button or by the user, and it will only solve the cube once each time. To solve it again, the cube must be reset. The beginner's method used to solve the cube is based off of this video tutorial made by JPerm, which can be found here: https://www.youtube.com/watch?v=GANnG5a19kg and at this link: https://jperm.net/2x2.

The 3D cube was written with THREE.js, and the rest with JavaScript and HTML. All the cubing logic is written in a way that all the moves and steps for the solution in a sequential, easy-to-follow order that will not mess up previous progress after each step and is not in a set algorithm that solves the cube by a mathematical way.

TO DO:
Add turn and rotation animations, probably with TWEEN. 
Add a timer feature.
Add a feature which will allow the user to input moves in the log for the cube to follow and turn according to the moves inputted by the user.

Credits
Thank you to my Dad for helping me with some aspects of the programming.
