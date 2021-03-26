var aaa = document.getElementById('input');
aaa.onfocus = function(){
if (this.value === 'Code...'){
this.value = '';
}
}
aaa.onblur = function() {
if (this.value === ''){
this.value = 'Code...';
}
}