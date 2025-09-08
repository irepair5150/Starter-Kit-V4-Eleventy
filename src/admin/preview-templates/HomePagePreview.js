import React from "react";

export default function HomePagePreview({ entry }) {
  const title = entry.getIn(["data", "title"]);
  const body = entry.getIn(["data", "body"]);

  return (
    <main style={{ fontFamily: "system-ui", padding: "2rem" }}>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </main>
  );
}
