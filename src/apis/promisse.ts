export class RockAndRoll {
  getData(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Hello World');
      }, 1000);
    });
  }
}