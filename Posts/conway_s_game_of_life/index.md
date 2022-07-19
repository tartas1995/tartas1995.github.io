# Conway's Game of Life
---
## What is Conway's Game of Life?

It was invented by the mathematician John Horton Conway in 1970. It is a, so called, zero-player game. These games are simulations without player input. Due to the game running without any input, the game is determined by its initial state. This is where you might find input into in some implementations. The "player" might be able to control the initial state. Afterwards the game goes from state to state. All changes are applied at the same time. The changes are determinated by the following rules:
- if a dead cell has exactly 3 living neighbors, it will be living in the next state.
- if a living cell has less than 2 or more than 3 living neighbors, it will be a dead cell in the next state.

These rules does't really help to understand the game unless you know the game has a grid world and the cells are cells in the grid. Diagonally neighboring Cells are viewed as neighbors.

For a more detailed description of Conway's Game of Life, check out the wikipedia article. [Here](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)

## Implementation

### HTML

There is nothing special about it. there is a canvas, a style tag, a script tag, a meta tag and a title tag. Really nothing note worthy.

### CSS

The CSS is required to remove the margin and to make the canvas "fullscreen"

### JavaScript

This is where you find the magic? Well, the more interesting bit for sure. the code is organised in classes and 2 files. There is no reason behind using classes but that I like classes as the `this.x` syntax makes it very clear and easy to find in which scope you operate. Basically, I find them easy to read. The 2nd file exists because we are making use of the wonderful worker API. This allows us to render and to calculate the next state at the same time. It should improve the performance of the application. In other words, the worker.js file describes the behavior of the worker. the "main thread" (the index.js file) takes care of the rendering and user input and the "worker thread" (the worker.js file) handles the game engine.

#### Main Thread

##### FPS

One of the goal was the limit the FPS (Frames per second) to a reasonable amount. I choose 60FPS as most computer monitors support at least 60FPS and it is a higher FPS than most TV Broadcasts therefore should satisfy most visitors. To do that, I calculated the time between frames, in this case a 60th of 1 second. The rendering of the frames starts once the worker is ready. The worker informs the interface that it is ready and what the current state is. Then the interface requests an AnimationFrame based on the animate function. So let's take a look at the animate function.

```javascript
animate() {
    // request new frame as soon as possible
    if (!this.state.freezed) {
        window.requestAnimationFrame(this.animate);
    }
    // get now and calculate the time that has passed
    const now = Date.now();
    const elapsed = now - this.frameCache.timeOfLastFrame;
    // if more time has passed than the interval between frames
    if (elapsed > this.frameCache.fpsInterval) {
        // set the time of the last frame as now adjusted to smooth out lag
        this.frameCache.timeOfLastFrame = now - (elapsed % this.frameCache.fpsInterval);
        this.render();
    }
}
```
If the game is not "freezed" then we immediately request a new animation frame using the animate function. That means we have recursive function until the game is frozen. Afterwards we check if the time since the last frame is longer than a 60th of a second, if that is the case, we generate a new frame by calling render and set the time of the last frame. We "correct" the time of the last frame based on the additional time passed since the last frame to better approximate the 60FPS.

##### Render

# TO LAZY TO FINISH NOW