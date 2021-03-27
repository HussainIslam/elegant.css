import scss from 'rollup-plugin-scss'

export default {
    input: 'src/input.js',
    output: {
        file: 'elegantcss.js',
        format: 'esm'
    },
    plugins: [
        scss()
    ]
}