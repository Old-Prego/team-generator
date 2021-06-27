const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Can instantiate Employee", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    });

    it("Can have the object's name set via the constructor", () => {
        const name = "John Smith";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });

    it("Can have the object's ID set via the constructor", () => {
        const testValue = 42;
        const e = new Employee("John", testValue);
        expect(e.id).toBe(testValue);
    });

    it("Can have the object's email set via the constructor", () => {
        const testValue = "test@test.com";
        const e = new Employee("John", 1, testValue);
        expect(e.email).toBe(testValue);
    });

    describe("getName", () => {
        it("Can get name via getName()", () => {
            const testValue = "John Smith";
            const e = new Employee(testValue);
            expect(e.getName()).toBe(testValue);
        });
    });
        
    describe("getID", () => {
        it("Can get id via getID()", () => {
            const testValue = 42;
            const e = new Employee("John", testValue);
            expect(e.getID()).toBe(testValue);
        });
    });
        
    describe("getEmail", () => {
        it("Can get email via getEmail()", () => {
            const testValue = "test@test.com";
            const e = new Employee("John", 1, testValue);
            expect(e.getEmail()).toBe(testValue);
        });
    });
        
    describe("getRole", () => {
        it("getRole() should return \"Employee\"", () => {
            const testValue = "Placeholder";
            const e = new Employee("John", 1, "test@test.com");
            expect(e.getRole()).toBe(testValue);
        });
    });
});