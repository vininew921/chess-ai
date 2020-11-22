import { Board } from "./Board";

class GameState {
    
    btn: Element;

    constructor() {
        this.btn = document.getElementById('testeButton');
        this.btn.addEventListener("click", (e: Event) => this.daleeee());
    }

    daleeee() {
        console.log(new Board());
    }
}

new GameState();

