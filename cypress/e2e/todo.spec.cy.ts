describe("Todo: Check todo functionality", () => {
  beforeEach(() => {
    cy.visit("todo");
  });

  it("Todo - The user should be able to add new todo", () => {
    const newTodo = "Solve three problems on Leetcode";
    cy.get(".new-todo").type(newTodo).type("{enter}");
    cy.get(".todo-list")
      .find(".view")
      .contains("label", newTodo)
      .parent()
      .find(".destroy")
      .invoke("show")
      .click();
  });
});
