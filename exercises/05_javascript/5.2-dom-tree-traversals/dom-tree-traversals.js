let list = document.querySelectorAll("body > ul > li");

function tree_num (item) {
    if( item.length === 0 ){
        return;
    }

    for ( var ele of item) {
        var txt = ele.children;
        if (txt.length > 0){
            ele.firstChild.nodeValue += " (" + ele.querySelectorAll("li").length + ")";
            tree_num(txt[0].children);
        }
    }
}

tree_num(list);



