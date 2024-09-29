const url = "https://api.todoist.com/rest/v2/tasks";
export default async function postTask({
  data,
}: {
  data: { title: string; description: string };
}) {
  try {
    await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer 9f5506136a536559b0b0cbbe664dcf2d0b69f2a1",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: data.title,
        description: data.description,
      }),
    });
  } catch {
    console.log("sth went wrong");
  }
}
