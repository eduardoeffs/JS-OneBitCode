import Spaceship from "./spaceship.js"
import SpaceshipEngine from "./spaceship-engine.js"

const sophia = new Spaceship("Sophia", 10, 5, 70)
const amsterda = new Spaceship("Amsterdã", 14, 10, 40)
const helsinque = new Spaceship("Helsinque", 20, 4, 80)

const sophiaEngine = new SpaceshipEngine(sophia)
const amsterdaEngine = new SpaceshipEngine(amsterda)
const helsinqueEngine = new SpaceshipEngine(helsinque)

sophiaEngine.turnOn()
amsterdaEngine.turnOn()
helsinqueEngine.turnOn()