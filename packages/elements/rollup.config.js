import scss from 'rollup-plugin-scss'

export default {
    input: 'src/input.js',
    output: {
        file: 'elements.js',
        format: 'esm'
    },
    plugins: [
        scss()
    ]
}