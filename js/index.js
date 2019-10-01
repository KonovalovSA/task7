// конструктор объекта
function objs(elem, s) {
    this.div = elem;
    this.s = s;
}

btn.onclick = function () {
    // создаём массив объектов 
    var arrObjDiv = [];
    // записываем в переменную элемент с классом blocks
    var blocks = document.querySelector(".blocks");
    // находим количество дочесрних элементов в элементе с классом blocks
    var arrDivLeng = blocks.getElementsByTagName("div").length;
    // записываем каждый элемент и его площадь в объекты и добавляем объекты в массив
    for(i = 0; i < arrDivLeng; i++){
        var div = blocks.getElementsByTagName("div")[i]; //берём каждый элемент попорядку
        var hDiv = div.clientHeight;  // находим высоту элемента
        var wDiv = div.clientWidth;   // находим ширину элемента
        var s = hDiv * wDiv;          // находим площадь элемента
        var divObj = new objs(div, s); // спомощью конструктора объектов создаём объекты элементов с его площадью
        arrObjDiv.push(divObj);       // добавляем объект в массив объектов
    }

    // удаляем все дочерние элементы
    blocks.innerHTML = "";

    // создаём функцию сортировки массива объектов по ключу s 
    function compareS(a, b) {
        return a.s - b.s;
    }

    //сортируем массив по ключу объектов
    arrObjDiv.sort(compareS);

    // добавляем каждый элемент (по ключу объектов div) в элемент blocks
    for(i = 0; i < arrDivLeng; i++){
        blocks.appendChild(arrObjDiv[i].div);
    }
}
