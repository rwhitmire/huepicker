# huepicker

A hassle-free control for color selection

### Browser

[Download](https://github.com/rwhitmire/huepicker/releases/download/0.0.1/huepicker.zip)

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

```
npm i --save huepicker
```

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
