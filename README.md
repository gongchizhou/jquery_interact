### A Jquery Interacts Plugin 


### `Usage`

### dialog
-Html
```html
<button data-dialog="mydialog">Open Me</button>
<div id="mydialog" class="dialog">
  <div class="dialog_overlay"></div>
  <div class="dialog_content">
    <h2><strong>Hello</strong>, This is a dialog box</h2>
    <div><button data-dialog-close>Close</button></div>
  </div>
</div>
```
-Javascript
```
$(function(){
    $('[data-dialog]').dialog();
})
```
you can pass a Object to control the animate
   
```
$(function(){
    $('[data-dialog]').dialog({ open:className,close:className });
})
```
