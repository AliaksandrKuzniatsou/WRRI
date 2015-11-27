const webpackConfig = {
    //context: __dirname + "/src",
    entry: __dirname + "/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
	  loaders: [
		    {
		      loader: 'babel?presets[]=react,presets[]=es2015'
		    }
  		]
	}
}

module.exports = webpackConfig;