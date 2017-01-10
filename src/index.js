import './polyfills/object-assign-polyfill'
import Root from './components/Root'

const huepicker = function(opts) {
  const root = new Root({
    target: opts.el,
    data: {
      inputValue: opts.value || '#FFFFFF'
    }
  })

  if(opts.onChange) {
    root.on('change', value => {
      opts.onChange(value)
    })
  }

  return root
}

module.exports = huepicker
