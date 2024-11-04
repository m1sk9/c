import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

const siteUrl = "https://c.m1s.dev";

// https://astro.build/config
export default defineConfig({
	site: siteUrl,
	output: "static",
	srcDir: "./src",
	publicDir: "./public",
	outDir: "./out",
	compressHTML: true,
	build: {
		format: "directory",
	},
	server: {
		open: "/",
	},
	devToolbar: {
		enabled: true,
	},
	integrations: [
		react(),
		starlight({
			title: "🦩 c",
			description: "🦩 Sample Code, Command Line Cheat Sheet.",
			customCss: ["./src/content/custom.css"],
			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 4,
			},
			editLink: {
				baseUrl: "https://github.com/m1sk9/c/edit/main",
			},
			social: {
				github: "https://github.com/m1sk9/c",
			},
			expressiveCode: {
				themes: ["everforest-dark", "everforest-light"],
			},
			lastUpdated: true,
			pagination: true,
			credits: false,
			sidebar: [
				{
					label: "Git",
					items: [
						{
							label: "Commit",
							link: "/c/git/commit",
						},
						{
							label: "Push",
							link: "/c/git/push",
						},
					],
				},
				{
					label: "Windows",
					items: [
						{
							label: "Delete Partition Using Diskpart",
							link: "/c/windows/delete-partition-using-diskpart",
							badge: "DISKPART",
						},
					],
				},
			],
		}),
	],
});
