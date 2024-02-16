## Simple TS test runner for spin


### Instal the dependencies

```bash
npm install
```

### build and start the test

```bash
npm run test 
```

To actually run the test

```bash
curl localhost:3000
```

### Write a Test

Create a new file `<name>.test.ts` and add the test inside, look at `utils/add.test.ts` for example for unit test and `spin_fns/variables.test.ts` for a test where the host function is mocked. 