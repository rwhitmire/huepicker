import Root from './components/Root'

window.colorpicker = function(opts) {
  const root = new Root({
    target: opts.el,
    data: {
      value: opts.value
    }
  })

  root.on('changeValue', value => {
    root.set({ value })
    opts.onChange(value)
  })

  return root
}
