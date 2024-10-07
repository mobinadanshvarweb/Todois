const url = "https://api.todoist.com/rest/v2/projects";
export default async function postProject({
  projectData,
}: {
  projectData: {
    name: string;
    color: string;
    favor: boolean;
  };
}) {
  try {
    await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer 9f5506136a536559b0b0cbbe664dcf2d0b69f2a1",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: projectData.name,
        // color: projectData.color,
        // is_favorite: projectData.favor,
      }),
    });
  } catch {
    console.log("sth went wrong");
  }
}
