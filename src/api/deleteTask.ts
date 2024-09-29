const url = "https://api.todoist.com/rest/v2/tasks";
export default async function deleteTask(id: string) {
  try {
    await fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer 9f5506136a536559b0b0cbbe664dcf2d0b69f2a1",
        "Content-Type": "application/json",
      },
    });
  } catch {
    console.log("sth went wrong");
  }
}
