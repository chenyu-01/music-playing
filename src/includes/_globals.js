import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
export default {
  install(app) {
    const baseComponents = import.meta.glob('../components/base/*.vue', {
      eager: true,
    })
    Object.entries(baseComponents).forEach(([path, component]) => {
      const componentName = upperFirst(
        camelCase(
          path
            .split('/')
            .pop()
            .replace(/\.\w+$/, '')
        )
      )

      // Register component globally
      app.component(`Base${componentName}`, component.default)
    })
  },
}
