import type { Configuration } from "webpack";
import TerserPlugin from "terser-webpack-plugin";

import { rules } from "./webpack.rules";

export const mainConfig: Configuration = {
	/**
	 * This is the main entry point for your application, it's the first file
	 * that runs in the main process.
	 */
	entry: "./src/main.ts",
	// Put your normal webpack config below here
	module: {
		rules,
	},
	resolve: {
		extensions: [".js", ".ts", ".jsx", ".tsx", ".css", ".json"],
	},
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin({ terserOptions: { keep_classnames: true } })],
	},
};
