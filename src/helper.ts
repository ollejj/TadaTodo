export const addTodo = async (descRef, deadlineRef) => {
  const response = await fetch("/api/todoHandler", {
    method: "POST",
    body: JSON.stringify({
      label: descRef.current.value,
      dateEnd: deadlineRef.current.value,
      dateAdded: new Date().toISOString().substring(0, 10),
    }),
    headers: {
      "Content-Type": "application/json; charset=utf8",
    },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
    return false;
  }

  return true;
};

export const deleteTodo = async (todo) => {
  if (window.confirm("Do you want to delete this todo?")) {
    const response = await fetch("/api/todoHandler", {
      method: "DELETE",
      body: JSON.stringify({
        id: todo.id,
      }),
      headers: {
        "Content-Type": "application/json; charset=utf8",
      },
    });

    if (!response.ok) {
      throw new Error(response.statusText);
      return false;
    }
    return true;
  }
};

export const updateTodo = async (todo) => {
  const response = await fetch("/api/todoHandler", {
    method: "PUT",
    body: JSON.stringify({
      id: todo.id,
      isChecked: todo.isChecked,
    }),
    headers: {
      "Content-Type": "application/json; charset=utf8",
    },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
    return false;
  }

  return true;
};
