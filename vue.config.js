module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "ClinicaWEB | v0.1.0";
                return args;
            })
    }
}