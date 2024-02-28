class Application {
  #_socket;
  constructor(port = 8080) {
    this.#_socket = new WebSocket("ws://localhost:" + port);

    this.#_socket.onopen = (event) => {
      console.log("Connected to server");
    };

    this.#_socket.onmessage = (event) => {
      event.data.text().then((text) => {
        console.log("Message from server:", text);
      });
    };

    this.#_socket.onerror = (event) => {
      console.log("Error from websocket server");
    };

    this.#_socket.onclose = (event) => {
      console.log("Closing websocket connection");
    };
  }

  get socket() {
    return this.#_socket;
  }
}

export { Application };
