# 🚲💥 bicycle crash zone API
Using the Road Traffic Organization_Bicycle Accident Local Information Service API and the GOOGLE MAP API provided by data.go.kr. 
to provide local information service for bicycle accidents.

#### ✔️ Things to remember
```
async function getData() {
  const url = new URL(`https://apis.data.go.kr/B552061/frequentzoneBicycle/getRestFrequentzoneBicycle?ServiceKey=${API_KEY}&searchYearCd=2021&siDo=41&guGun=285&numOfRows=10&type=json&pageNo=1`);

  const response = await fetch(url);
  const data = await response.json();

  const locations = data.items.item.map(spot=>[
    spot.spot_nm,
    spot.la_crd,
    spot.lo_crd,
  ])

  drawMap(locations)
}
```
* The `async` keyword is used in JavaScript to declare functions that perform asynchronous behavior. The `async` function was introduced to make asynchronous code easier to write and manage.

* In traditional JavaScript, you had to use callback functions or promises to handle asynchronous operations, which can cause problems that can reduce the readability of your code and increase its complexity. The `async` keyword helps you write asynchronous tasks more intuitively and synchronously to solve these problems.

* The `async` function has the following characteristics:

  1. The `async` function always returns a Promise. This makes it possible to process the result of a function asynchronously.

  2. you can use the `await` keyword inside the `async` function. The `await` temporarily suspends the flow of execution until an         asynchronous task completes, and you can get the result of that task. This allows you to write asynchronous code synchronously.

  3. Exception handling can be done inside the `async` function. You can use the `try-catch` syntax to handle exceptions thrown during asynchronous operations.

  4. the `async` function can be used in conjunction with other asynchronous functions, that is, you can use `await` to wait for the result of another `async` function.

* Using `async` functions makes it easier to handle asynchronous operations and improves readability and maintainability. In the case of the `getData` function, we use `await` to get the data asynchronously and then do the work of drawing the map, which makes the structure of the code clearer and easier to understand.

<hr />

##### The difference between synchronous and asynchronous
* Synchronous and asynchronous are concepts related to how tasks are executed in programming. They differ in how they handle the progression and results of tasks.

* Synchronous tasks are executed in order, with the next task not executing until the previous task is complete. In other words, one task waits until the next task is complete. Synchronous tasks are blocked until the called function returns, and other tasks are interrupted while waiting for the result. They have a sequential, serialized workflow.

* Asynchronous tasks, on the other hand, don't wait for a task to complete before proceeding to the next task. Asynchronous tasks are not blocked because you can do something else after sending the request while waiting for the result. Instead, asynchronous tasks use mechanisms like callback functions, promises, and async/await to handle when the task completes and deal with the result. This allows you to have parallel and concurrent workflows.

* Synchronous tasks work well when the completion time of tasks is predictable and the order is important. For example, reading a file and processing its contents should be synchronous because you can only process it after it's read.

* Asynchronous tasks, on the other hand, are useful when tasks take a long time or rely on external resources. For example, tasks like network requests or database lookups are handled asynchronously so that you can perform other tasks while waiting for the results.

* Asynchronous work is used in conjunction with techniques like promises and async/await to avoid multithreading, event loops, and callback purgatory. This allows for more efficient resource management and responsiveness, and improves user experience and system performance.
