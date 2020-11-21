
const path=require("path");
const html=require('html-webpack-plugin');
module.exports={
    entry:'./src/index.ts',
    output:{
        filename:"file.js",
        path:path.resolve(__dirname,"build")
       },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
            },
            {
                test:/\.ts$/,
                use:'ts-loader'
            }
            
        ]
    },
    plugins:[
        new html({
            template:path.resolve(__dirname,"src","index.html")
        })
    ],
    resolve:{
        extensions:['.ts','.js']
    }
}
