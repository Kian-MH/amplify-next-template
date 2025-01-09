"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/brandGroups";
import "@/app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function App() {
  const [brandGroups, setBrandGroups] = useState<Array<Schema["BrandGroup"]["type"]>>([]);

  function listBrandGroups() {
    client.models.BrandGroup.observeQuery().subscribe({
      next: (data) => setBrandGroups([...data.items]),
    });
  }

  useEffect(() => {
    listBrandGroups();
  }, []);

  function createBrandGroup() {
    client.models.BrandGroup.create({
      group: window.prompt("BrandGroup content"),
    });
  }
    
  function deleteBrandGroup(id: string) {
    client.models.BrandGroup.delete({ id })
  }

  return (
    <main>
      <h1>My brandGroups</h1>
      <button onClick={createBrandGroup}>+ new</button>
      <ul>
        {brandGroups.map((group) => (
          <li onClick={() => deleteBrandGroup(group.id)} key={group.id}>{group.group}</li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new group.
        <br />
        <a href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/">
          Review next steps of this tutorial.
        </a>
      </div>
    </main>
  );
}
