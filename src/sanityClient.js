import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "r1ehb21r",  // ✅ Tumhara project ID sahi hai?
  dataset: "production",
  useCdn: false,   // ❌ Yeh false karo agar latest data chahiye
  apiVersion: "2024-02-21",
});

export default client;
