import { editTodo, cancelTodo, fetchList } from "../../actions";

test("should setup edit todo action object", () => {
  const action = editTodo({ id: "123abc" });
  expect(action).toEqual({
    type: EDIT_TODO,
    id: "123abc",
  });
});

test("should setup cancel todo action object", () => {
  const action = cancelTodo({ id: "123abc" });
  expect(action).toEqual({
    type: CANCEL_TODO,
    id: "123abc",
  });
});
