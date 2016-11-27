var CopyWebpackPlugin = require('copy-webpack-plugin');
const distRoot = './dist';
const staticRoot = `${distRoot}/public`;
const vendorsRoot = './node_modules';
var configLoaders = [{
    test: /\.jsx?$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    query: {
        plugins: ['transform-runtime'],
        presets: ['es2015', 'stage-0', 'react']
    }
}, {
    test: /\.json$/,
    loader: 'json-loader'
}];

var configResolve = {
    extensions: ['', '.webpack.js', '.web.js', '.jsx', '.js']
};

module.exports = [{
    name: 'server',
    entry: './app.js',
    output: {
        filename: './dist/app.js'
    },
    target: 'node',
    resolve: configResolve,
    module: {
        loaders: configLoaders
    },
    plugins : [
        new CopyWebpackPlugin([
            /*Vendors */
            { from: `${vendorsRoot}/bootstrap/dist/css`, to:`${staticRoot}/css` },
            { from: `${vendorsRoot}/select2/dist/css`, to:`${staticRoot}/css` },
            { from: `${vendorsRoot}/font-awesome/css`, to:`${staticRoot}/css` },
            { from: `${vendorsRoot}/bootstrap/dist/js`, to:`${staticRoot}/js` },
            { from: `${vendorsRoot}/select2/dist/js`, to:`${staticRoot}/js` },
            { from: `${vendorsRoot}/datamaps/dist`, to:`${staticRoot}/js` },
            { from: `${vendorsRoot}/jquery/dist`, to:`${staticRoot}/js` },
            { from: `${vendorsRoot}/font-awesome/fonts`, to:`${staticRoot}/fonts` },
            
            /*Us */
            { from: './public/css', to: `${staticRoot}/css` },
            { from: './public/img', to: `${staticRoot}/img` },
            { from: './views', to: `${distRoot}/views` }
        ])
    ]
}, {
    name: 'client',
    entry: './public/js/index.jsx',
    output: {
        filename: './dist/public/js/main.js'
    },
    target: 'web',
    resolve: configResolve,
    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',
    module: {
        loaders: configLoaders,
        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                test: /\.js$/,
                loader: 'source-map-loader'
            }
        ]
    }
}];