export class PawzzleError extends Error {
  constructor(error) {
    super();
    console.log('Pawzelle Error');
    console.log(error);
    throw error;
  }
}
