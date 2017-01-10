# huepicker

A hassle-free control for color selection

### Browser

``` html
<div id="picker"></div>
<script src="huepicker.js"></script>
<script>
  huepicker({
    el: document.getElementById('picker'),
    value: 'red',
    onChange: function(color) {
      console.log('onchange picker 1...', color)
    }
  })
</script>
```

### NPM

``` js
import huepicker from 'huepicker'

huepicker({
  el: document.getElementById('picker'),
  value: 'red',
  onChange: function(color) {
    console.log('onchange picker 1...', color)
  }
})
```
