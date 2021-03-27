import scss from 'rollup-plugin-scss'
import * as fs from 'fs';
import CleanCss from 'clean-css';

const scss_object = {
    output: function(styles, styleNodes){
        fs.writeFileSync('elegant.css', styles)
        const compressed = new CleanCss().minify(styles).styles;
        fs.writeFileSync('elegant.min.css', compressed)
    },
}

export default [
    {
        input: 'src/input.js',
        output: { 
            file: 'elegantcss.js', 
            format: 'esm'
        },
        plugins: [ scss(scss_object) ],
        external: [ 'normalize.css' ]
    }
]