var path=require('path');
var HtmlWebpackPlugin= require('html-webpack-plugin');
var ExtractTextPlugin= require('extract-text-webpack-plugin');
var extractPlugin=new ExtractTextPlugin({filename:'main.css'});

module.exports={
    entry:'./src/js/app.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            },
            {
                test:/\.html$/,
                use:['html-loader']
            },
            {
                test:/\.scss$/,
                use:extractPlugin.extract({
                    use:['css-loader','sass-loader']
                })
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'src/index.html'
        }),
        extractPlugin,
    ]
}