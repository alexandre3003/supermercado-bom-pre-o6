import solid from "supermercado bom preço/vite";
import netlify from "supermercado bom preço-netlify";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [solid({ adapter: netlify() })],
});
