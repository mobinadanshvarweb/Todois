export default async function updateTask({
  editedData,
  id,
}: {
  editedData: any;
  id: string | undefined;
}) {
  let url = "https://api.todoist.com/rest/v2/tasks";
  if (id) {
    url = `${url}/${id}`;
    return url;
  }
  try {
    await fetch(`${url}`, {
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
