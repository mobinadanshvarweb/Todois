export default async function getTask() {
  const url = "https://api.todoist.com/rest/v2/tasks";
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: "Bearer 9f5506136a536559b0b0cbbe664dcf2d0b69f2a1",
      },
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch {
    console.error("somthing went wrong");
  }
}
