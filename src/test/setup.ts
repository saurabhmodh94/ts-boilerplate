beforeAll(() => {
  console.log('---> before all');
});

beforeEach(() => {
  console.log('---> before each');
  console.log(expect.getState().currentTestName);
});

afterEach(() => {
  console.log('---> after each');
});

afterAll(() => {
  console.log('---> after all');
});
