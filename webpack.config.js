const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js', // Đường dẫn đến file entry của ứng dụng React
    output: {
        filename: 'bundle.js', // Tên tệp đầu ra sau khi xây dựng
        path: path.resolve(__dirname, 'dist'), // Thư mục đầu ra sau khi xây dựng
    },
    module: {
        rules: [
            // Bộ chuyển đổi cho file SCSS
            {
                test: /\.scss$/,
                use: [
                    process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            // Bộ chuyển đổi cho file hình ảnh
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',  // Thay đổi tùy thuộc vào cấu trúc thư mục của bạn
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        // Plugin để trích xuất CSS thành tệp độc lập trong sản phẩm (chỉ sử dụng trong môi trường production)
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ],
};
