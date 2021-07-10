marked.setOptions({
    gfm: true,
    breaks: true
})

function getTextArea() {
    var txt = $('#editor').val();
    document.getElementById('preview').innerHTML = marked(txt);
}

function initialText() {
    var editorText = ''
    var bigHeader =  '# Big header!\n'
    var smallHeader = '## smaller sub header!\n'
    var link = '[freeCodeCamp](https://www.freecodecamp.org)'
    var iCode = '\n\n`console.log("this is a line of code")`\n\n'
    var mCode = '```\nwhile(true){\n\t"this is a block of code"\n}\n```\n\n'
    var bText = '**Now this is epic**\n'
    var bQuote = '>You can say that again\n'
    var lItem = '- First level\n\t- Second level\n\t\t - And a nice image\n\n'
    var img = '![saitama](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU-up5hnShJm9EAnuAZY4rA_jM2X39ZDuGH6_NzI8qMqH4ESI-8wtywx72YbLsAcaykg8&usqp=CAU)'

    editorText = bigHeader + smallHeader + link + 
    iCode + mCode + bText + bQuote + lItem + img;
    document.getElementById('editor').innerHTML = editorText;
    document.getElementById('preview').innerHTML = marked(editorText);
}