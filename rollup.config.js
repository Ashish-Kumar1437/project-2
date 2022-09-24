import copy from 'rollup-plugin-copy'

export default {
    //...
    plugins: [
        //...
        copy({
            targets: [{ 
                src: 'node_modules/bootstrap/dist/**/*', 
                dest: 'src/vendor/bootstrap' 
            }]
        }),
       //...
    ],
    //...
};