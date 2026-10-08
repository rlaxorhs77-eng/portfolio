import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const nextRequire = createRequire(require.resolve("next/package.json"));

// Resolve from Next's own package boundary, as pnpm keeps transitive
// dependencies out of the application's top-level node_modules directory.
nextRequire("@swc/helpers/_/_interop_require_default");
require("next/dist/shared/lib/constants.js");
console.log("Next.js runtime dependency check passed.");
