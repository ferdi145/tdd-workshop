import { jest } from "@jest/globals";

// don't mock what you don't own

const getTodosFromStorage = () => localStorage.getItem("active_todos");

const numberOfActiveTodos = (items) => items.filter((i) => i.active).length;

const numberOfActiveTodosFromStorage = (getTodos = getTodosFromStorage) =>
  numberOfActiveTodos(getTodos());

describe("numberOfActiveTodost", () => {
  it("should count active todos", () => {
    const result = numberOfActiveTodos([
      { text: "Find Plans", active: false },
      { text: "Find Save World", active: true },
      { text: "Get Out of House", active: true },
    ]);
    expect(result).toEqual(2);
  });
});

describe("numberOfActiveTodosFromStorage", () => {
  it("should count active todos from storage", () => {
    const getTodosFromStorageStub = jest.fn(() => [
      { text: "Find Plans", active: false },
      { text: "Find Save World", active: true },
      { text: "Get Out of House", active: true },
    ]);

    const result = numberOfActiveTodosFromStorage(getTodosFromStorageStub);
    expect(result).toEqual(2);
  });
});
