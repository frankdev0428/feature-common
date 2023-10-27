

function sleep(millis) {
    return new Promise((resolve) => {
        setTimeout(resolve, millis);
    });
}

//Usage:
  async function main() {
    console.log("Start");
    await sleep(2000); // Sleep for 2 seconds (2000 milliesecond)
    console.log("After 2 seconds");
  }

  main();