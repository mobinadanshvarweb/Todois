export default async function closeTask(id: string) {
  try {
    await fetch(`https://api.todoist.com/rest/v2/tasks/${id}/close`, {
      method: "POST",
      headers: {
        Authorization: "Bearer 9f5506136a536559b0b0cbbe664dcf2d0b69f2a1",
        "Content-Type": "application/json",
      },
    });
  } catch {
    console.log("sth went wrong");
  }
}
