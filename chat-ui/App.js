class App {
  #_socket;
  constructor(port) {
    this.#_socket = new WebSocket("ws://localhost:" + port);
  }
}
