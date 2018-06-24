(function(){
    $("#toc").append('<p>TOC</p>')

    $("h1, h2, h3").each(function(i) {
        var current = $(this);
        /* Set titleX attribute for this*/
        current.attr("id", "title" + i);        
        /* Create link to TitleX anchor */
        let cssClassName= `toc-${current.prop('tagName')}`;
        cssClassName = cssClassName.toLowerCase();

        $("#toc").append(`<a class='${cssClassName}' id='link${i}' href='#title${i}' title='${current.html()}'>${current.html()}</a>`);
    });
})();