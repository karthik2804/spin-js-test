const path = require('path');

module.exports = {
    entry: './src/test.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'spin-test.js',
        library: 'spin'
    },
    optimization: {
        minimize: false
    },
};
