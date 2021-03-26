var aaa = document.getElementById('input');
aaa.onfocus = function(){
if (this.value === '路径'){
this.value = '';
}
}
aaa.onblur = function() {
if (this.value === ''){
this.value = '路径';
}
}