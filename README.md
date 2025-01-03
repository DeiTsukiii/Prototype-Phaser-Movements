# Prototype Phaser Movements 🎮

A simple 2D prototype built with **Phaser** to demonstrate character movement and interactions.

## Features ✨
- **Character Movement**: Walk, run, jump, double-jump, and slide.
- **Map Handler**: Switch between maps dynamically.
- **Collision and Physics**: Realistic interactions with the game environment using Phaser's physics engine (directly integrated into the map).
- **Animations**: Dynamic animations for each action (idle, walk, run, jump, and slide).
- **Extendable Framework**: Use this prototype as a base for building more complex 2D games.

## Controls 🕹️  
- **Move Left/Right**: Hold `Q` / `D`  
- **Slide**: Press `S`  
- **Jump**: Press `Z`  
- **Sprint**: Hold `Space`  

### Customize Controls ⚙️  
You can modify the controls in the `js/config.js` file under the `configAdmin` object:  

```javascript
export const configAdmin = {
    keys: {
        leftKey: Phaser.Input.Keyboard.KeyCodes.Q,  // Move Left
        rightKey: Phaser.Input.Keyboard.KeyCodes.D, // Move Right
        jumpKey: Phaser.Input.Keyboard.KeyCodes.Z,  // Jump
        slideKey: Phaser.Input.Keyboard.KeyCodes.S, // Slide
        runKey: Phaser.Input.Keyboard.KeyCodes.SPACE // Sprint
    }
};
```

## How to Run 🚀  
### 1. Clone the Repository  
```bash
git clone https://github.com/deitsukiii/prototype-phaser-movements.git
cd prototype-phaser-movements
```

### 2. Launch a Local Server  
Since browsers block local file execution (CORS policy), you need to run the project on a local server. Choose one of the following methods:

#### **Option 1: Using Live Server (VS Code)**  
- Open the project folder in Visual Studio Code.
- Install the **Live Server** extension.
- Right-click on `index.html` and select **"Open with Live Server"**.

#### **Option 2: Using `http-server` with Node.js**  
- Install `http-server` globally:
  ```bash
  npm install -g http-server
  ```
- Navigate to the project folder and start the server:
  ```bash
  http-server
  ```
- Open the displayed URL (e.g., `http://127.0.0.1:8080`) in your browser.

#### **Option 3: Using Python's HTTP Server**  
- For Python 3:
  ```bash
  python -m http.server
  ```
- For Python 2:
  ```bash
  python -m SimpleHTTPServer
  ```
- Access the project at `http://127.0.0.1:8000`.

### 3. Play the Game  
Open the local server URL in your browser to start exploring the prototype!

## Preview 🎥  
![Prototype Demo](assets/demo.gif)
