import type { IlesModule } from 'iles'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

/**
 * An iles module that...
 */
export default function (): IlesModule {
  return {
    name: 'iles-math',
    // Just like in Vite plugins you can use this hook to extend the user config

    // config (config) {
    //   return {}
    // },

    // If you need to do something once all modules have been resolved, you can
    // use this hook to get access to the final configuration.

    // configResolved (config) {
    //   let a = config.root
    // },

    // You may also directly provide other configuration options for îles or
    // the default Vite plugins.

    // components: {
    //   resolvers: [],
    // },
    markdown: {
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    },
  }
}
