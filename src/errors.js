class NoLocationError extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = 'Location_not_found'; // (2)
  }
}

export { NoLocationError };