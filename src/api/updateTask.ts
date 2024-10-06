const url = "https://api.todoist.com/rest/v2/tasks";
export default async function updateTask({
  editedData,
  id,
}: {
  editedData: { editedTitle: string; editedDescription: string };
  id: string;
}) {
  try {
    await fetch(`${url}/${id}`, {
      method: "POST",
      headers: {
        Authorization: "Bearer 9f5506136a536559b0b0cbbe664dcf2d0b69f2a1",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: editedData.editedTitle,
        description: editedData.editedDescription,
      }),
    });
  } catch {
    console.log("sth went wrong");
  }
}
