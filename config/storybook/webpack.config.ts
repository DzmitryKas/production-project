import { type RuleSetRule, DefinePlugin } from 'webpack'
import type webpack from 'webpack'
import path from 'path'
import { type BuildPaths } from '../webpack/types/config'
import { buildCssLoader } from '../webpack/loaders/buildCssLoader'

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    }
    config.resolve.modules.push(paths.src)
    config.resolve.extensions.push('.ts', '.tsx')

    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if ((String(rule.test as string)).includes('svg')) {
            return { ...rule, exclude: /\.svg$/i }
        }

        return rule
    })

    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack']
    })

    config.module.rules.push(buildCssLoader(true))

    config.plugins.push(new DefinePlugin({
        __IS_DEV__: true
    }))

    config.resolve.modules = [
        path.resolve(__dirname, '../../src'),
        'node_modules'
    ]

    return config
}
