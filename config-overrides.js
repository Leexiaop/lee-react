const {
    override,
    fixBabelImports,
    addWebpackAlias,
    addDecoratorsLegacy
} = require('customize-cra');
const path = require('path');
const rewirePostcss = require('react-app-rewire-postcss');

module.exports = override(
    // 配置按需加载
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css'
    }),
    // 配置文件别名
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src'),
        '@scss': path.resolve(__dirname, 'src/assets/scss'),
        '@images': path.resolve(__dirname, 'src/assets/images'),
        '@views': path.resolve(__dirname, 'src/views'),
        '@network': path.resolve(__dirname, 'src/network'),
        '@store': path.resolve(__dirname, 'src/store'),
        '@components': path.resolve(__dirname, 'src/components')
    }),
    addDecoratorsLegacy(),
    config => {
        // 重写postcss
        rewirePostcss(config, {
            plugins: () => {
                return [
                    require('postcss-flexbugs-fixes'),
                    require('postcss-preset-env')({
                        autoprefixer: {
                            flexbox: 'no-2009'
                        },
                        stage: 3
                    }),
                    // require('postcss-aspect-ratio-mini')({}),
                    // require('postcss-px-to-viewport')({
                    //     viewportWidth: 750, // (Number) The width of the viewport.
                    //     viewportHeight: 1334, // (Number) The height of the viewport.
                    //     unitPrecision: 3,
                    //     viewportUnit: 'vw', // (String) Expected units.
                    //     selectorBlackList: ['.ignore', '.hairlines'],
                    //     // (Array) The selectors to ignore and leave as px.
                    //     minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
                    //     mediaQuery: false // (Boolean) Allow px to be converted in media queries.
                    // }),
                    // require('postcss-write-svg')({
                    //     utf8: false
                    // }),
                    // require('postcss-viewport-units')({}),
                    // require('cssnano')({
                    //     preset: 'advanced',
                    //     autoprefixer: false,
                    //     'postcss-zindex': false
                    // }),
                    require('postcss-px2rem-exclude')({
                        // 设计稿宽度/100
                        remUnit: 75,
                        exclude: /node-modules/i
                    })
                ];
            }
        });
        return config;
    }
);
