import { createClient } from "next-sanity";

const projectId = "68x4f2x9";
const dataset = "production";
const apiVersion = "2023-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
