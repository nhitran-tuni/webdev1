let list = document.querySelectorAll("body > ul > li");

function tree_num (item) {
    if( item.length === 0 ){
        return;
    }

    for ( var ele of item) {
        var txt = ele.children;
        if (txt.length > 1){
            ele.firstChild.nodeValue += " (" + ele.querySelectorAll("li").length + ")";
            // console.log(ele.querySelectorAll("li").length);
        }
        tree_num(txt);
    }
}

tree_num(list);

// console.log(list[0].firstChild.nodeValue += " ("+2+")");


