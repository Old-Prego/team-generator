const Engineer = require("../lib/Engineer");

test("Can have the employee's github username set via the extended constructor", () => {
  const testValue = "GitHubJohn";
  const e = new Engineer("John", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return 'Engineer'", () => {
  const testValue = "Engineer";
  const e = new Engineer("John", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubJohn";
  const e = new Engineer("John", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});