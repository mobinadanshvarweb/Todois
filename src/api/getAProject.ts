export default async function getAProject(id?: string) {
  const url = "https://api.todoist.com/rest/v2/projects";
  try {
    const response = await fetch(`${url}/${id}`, {
      headers: {
        Authorization: "Bearer 9f5506136a536559b0b0cbbe664dcf2d0b69f2a1",
      },
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log("json is:", json);

    return json;
  } catch {
    console.error("somthing went wrong");
  }
}
