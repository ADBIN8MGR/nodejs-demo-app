const test = require("node:test");
const assert = require("node:assert");
const server = require("./app");

test("server responds", async () => {
  await new Promise((r) => server.listen(0, r));
  const res = await fetch(`http://localhost:${server.address().port}`);
  assert.strictEqual(await res.text(), "Hello from CI/CD!");
  server.close();
});
