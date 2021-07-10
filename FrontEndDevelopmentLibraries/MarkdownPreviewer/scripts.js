function getTextArea() {
    var txt = $('#editor').val();
    document.getElementById('preview').innerHTML = marked(txt);
}

function initialText() {
    var editorText = 'luiz eh muito gay';
    document.getElementById('editor').innerHTML = editorText;
    document.getElementById('preview').innerHTML = marked(editorText);
}