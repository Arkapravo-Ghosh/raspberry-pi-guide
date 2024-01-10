import { defineUserConfig, defaultTheme } from "vuepress";

export default defineUserConfig({
  lang: "en-US",
  title: "Raspberry Pi Guide",
  description: "Beginners\' Guide for Raspberry Pi",
  theme: defaultTheme({
    repo: "https://github.com/Arkapravo-Ghosh/raspberry-pi-guide",
    logo: "/logo.jpg",
    editLink: false,
  }),
  port: 3000,
  head: [
    ["link", { rel: "icon", href: "/logo.jpg" }],
    ["meta", { property: "og:image", content: "/logo.jpg" }],
    ["meta", { name: "twitter:image", content: "/logo.jpg" }],
    ["meta", { property: "og:image", content: "/logo.jpg" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:site_name", content: "Raspberry Pi Guide" }],
    ["meta", { property: "og:title", content: "Raspberry Pi Guide" }],
    ["meta", { property: "og:description", content: "Beginners\' Guide for Raspberry Pi" }],
    ["meta", { property: "og:url", content: "https://raspberry-pi-guide.ark.ark-tech.in/" }],
    ["meta", { property: "twitter:title", content: "Raspberry Pi Guide" }],
    ["meta", { property: "twitter:description", content: "Beginners\' Guide for Raspberry Pi" }],
    ["meta", { property: "twitter:url", content: "https://raspberry-pi-guide.ark.ark-tech.in/" }],
  ],
});