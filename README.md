### A Jquery Interacts Plugin 

------------------------------
### `Usage`

### dialog
- Html
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
- Javascript
```
$(function(){
    $('[data-dialog]').dialog();
})
```
you can pass a Object to control the animate effect
   
```
$(function(){
    $('[data-dialog]').dialog({ open:className,close:className });
})
```
### dropdown
- Html
```html
<div class="dropdown">
  <button data-dropdown="mydropdown">
    Drop Me Down!
  </button>
  <ul id="mydropdown" class="dropdown_menu">
    <li data-value="select1">select1</li>
    <li data-value="select2">select2</li>
    <li data-value="select3">select3</li>
  </ul>
</div>
```
- Javascript
```
$(function(){
    $('[data-dropdown]').dropdown();
})
```
you can pass a Object to choose whether the menu list can be selected or not
   
```
$(function(){
     $('[data-dropdown]').dropdown({ selected:false,down:className,up:className });
})
```

### tab
- Html
```html
<div class="tab">
  <ul class="tab_menu" data-tab="mytab">
    <li><a>tab1</a></li>
    <li><a>tab2</a></li>
    <li><a>tab3</a></li>
    <div class="border"></div>
  </ul>
  <div id="mytab" class="tab_content">
    <div class="tab_list">This is tab 1This is tab 1This is tab 1This is tab 1This is tab 1This is tab 1This is tab 1</div>
    <div class="tab_list">This is tab 2This is tab 2This is tab 2This is tab 2</div>
    <div class="tab_list">This is tab 3</div>
  </div>
</div>
```
- Javascript
```
$(function(){
    $('[data-tab]').tab();
})
```
you can pass a Object to set the event type and the default displaying tab
   
```
$(function(){
    $('[data-tab]').tab({ event:'mousemove',defaultIndex:2,show:className,hide:className });
})
```
