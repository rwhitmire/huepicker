# huepicker

A hassle-free colorpicker control, ~8.1KB gzipped.

![huepicker](https://github.com/rwhitmire/huepicker/blob/master/docs/screenshot.jpg?raw=true)

### Browser

[Download](https://github.com/rwhitmire/huepicker/releases/latest)

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
