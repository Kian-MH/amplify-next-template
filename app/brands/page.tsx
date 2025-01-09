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
  const [brand, setBrand] = useState<Array<Schema["Brand"]["type"]>>([]);

  function listBrand() {
    client.models.Brand.observeQuery().subscribe({
      next: (data) => setBrand([...data.items]),
    });
  }

  useEffect(() => {
    listBrand();
  }, []);

  function createBrand() {
    client.models.Brand.create({
      brandName: window.prompt("Brand content"),
    });
  }
    
  function deleteBrand(id: string) {
    client.models.Brand.delete({ id })
  }

  return (
    <main>
      <h1>My brand</h1>
      <button onClick={createBrand}>+ new</button>
      <ul>
        {brand.map((brand) => (
          <li onClick={() => deleteBrand(brand.id)} key={brand.id}>{brand.brandName}</li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new brand.
        <br />
        <a href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/">
          Review next steps of this tutorial.
        </a>
      </div>
    </main>
  );
}