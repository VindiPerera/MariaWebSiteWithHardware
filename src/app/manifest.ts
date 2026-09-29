import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return { name: "MariaPoS", short_name: "MariaPoS", start_url: "/", display: "standalone" };
}
