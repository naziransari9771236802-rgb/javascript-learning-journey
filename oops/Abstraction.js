// Unnecessary internal details hide karna aur sirf required functionality dikhana.
class Car {

    start() {
        this.#checkEngine();
        this.#injectFuel();

        console.log("Car started");
    }

    #checkEngine() {
        console.log("Engine checked");
    }

    #injectFuel() {
        console.log("Fuel injected");
    }
}
const car = new Car();
car.start();