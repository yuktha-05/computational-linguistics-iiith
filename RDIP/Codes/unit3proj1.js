/*function mydropdown($this)
{
    if($this.value=="Select Language")
    {
        alert("Select Language");

    }

}


$(document).ready(function() {
    $('select[name="configoption[5]"]').change(function() {
        var value = $(this).val();
        $('.message').toggle(value == 'english' || value == 'hindi');
    });
});*/
var sent1 = '{"condition1":[' +
    '{"a":"John ate an apple before afternoon","b":"before afternoon John ate an apple","c":"John before afternoon ate an apple"},' +
    '{"a":"John and Mary went to church","b":"Mary and John went to church"},' +
    '{"a":"John went to church after eating","b":"after eating John went to church","c":"John after eating went to church"},' +
    '{"a":"did he go to market","b":"he did go to market"},' +
    '{"a":"some students like to study in the night","b":"in the night some students like to study"},' +
    '{"a":"the woman who called my sister sells cosmetics","b":"the woman who sells cosmetics called my sister","c":"my sister who sells cosmetics called the woman","d":"my sister who called the woman sells cosmetics"},' +
    '{"a":"John goes to the library and studies","b":"John studies and goes to the library"},' +
    '{"a":"John ate an apple so did she","b":"she ate an apple so did John"},' +
    '{"a":"the teacher returned the book after she noticed the error","b":"the teacher noticed the error after she returned the book","c":"after the teacher returned the book she noticed the error","d":"after the teacher noticed the error she returned the book","e":"she returned the book after the teacher noticed the error","f":"she noticed the error after the teacher returned the book","g":"after she returned the book the teacher noticed the error","h":"after she noticed the error the teacher returned the book"},' +
    '{"a":"I told her that I bought a book yesterday","b":"I told her yesterday that I bought a book","c":"yesterday I told her that I bought a book","d":"I bought a book that I told her yesterday","e":"I bought a book yesterday that I told her","f":"yesterday I bought a book that I told her"}]}';

var sent2 = '{"condition2":[' + '{"a":"राम और श्याम बाजार गयें","b":"राम और श्याम गयें बाजार","c":"बाजार गयें राम और श्याम","d":"गयें बाजार राम और श्याम"},' +
    '{"a":"राम सोया और श्याम भी","b":"श्याम सोया और राम भी","c":"सोया श्याम और राम भी","d":"सोया राम और श्याम भी"},' +
    '{"a":"मैंने उसे बताया कि राम सो रहा है", "b":"मैंने उसे बताया कि सो रहा है राम","c":"उसे मैंने बताया कि राम सो रहा है","d":"उसे मैंने बताया कि सो रहा है राम","e":"मैंने बताया उसे कि राम सो रहा है","f":"मैंने बताया उसे कि सो रहा है राम","g":"उसे बताया मैंने कि राम सो रहा है","h":"उसे बताया मैंने कि सो रहा है राम","i":"बताया मैंने उसे कि राम सो रहा है","j":"बताया मैंने उसे कि सो रहा है राम","k":"बताया उसे मैंने कि राम सो रहा है","l":"बताया उसे मैंने कि सो रहा है राम"},' +
    '{"a":"राम खाकर सोया","b":"खाकर राम सोया","c":"राम सोया खाकर","d":"खाकर सोया राम","e":"सोया राम खाकर","f":"सोया खाकर राम"},' +
    '{"a":"बिल्लियों को मारकर कुत्ता सो गया","b":"मारकर बिल्लियों को कुत्ता सो गया","c":"बिल्लियों को मारकर सो गया कुत्ता","d":"मारकर बिल्लियों को सो गया कुत्ता","e":"कुत्ता सो गया बिल्लियों को मारकर","f":"कुत्ता सो गया मारकर बिल्लियों को","g":"सो गया कुत्ता बिल्लियों को मारकर","h":"सो गया कुत्ता मारकर बिल्लियों को"},' +
    '{"a":"एक लाल किताब वहाँ है","b":"एक लाल किताब है वहाँ","c":"वहाँ है एक लाल किताब","d":"है वहाँ एक लाल किताब"},' +
    '{"a":"एक बड़ी सी किताब वहाँ है","b":"एक बड़ी सी किताब है वहाँ","c":"बड़ी सी एक किताब वहाँ है","d":"बड़ी सी एक किताब है वहाँ","e":"वहाँ है एक बड़ी सी किताब","f":"वहाँ है बड़ी सी एक किताब","g":"है वहाँ एक बड़ी सी किताब","h":"है वहाँ बड़ी सी एक किताब"}]}';

function rand()
{
    document.getElementById("wrong").innerHTML = " ";
    document.getElementById("solution").innerHTML = " ";
    document.getElementById("sen1").innerHTML = "";                                                        
    document.getElementById("sen1").value = ""; 
    document.getElementById("corpus_1").innerHTML = "";
    document.getElementById("corpus_2").innerHTML = "";
    document.getElementById("sencheck").innerHTML = "";                                                     
    document.getElementById("senref").innerHTML = "";                                                   
    document.getElementById("sentence").innerHTML = "";                                                
    document.getElementById("sentence2").innerHTML = ""; 
    document.getElementById("no_disp").innerHTML = "";                                                   
   
    for (var m = 0; m < 10; m++) {
        document.getElementById(m).value = " ";                                                        
    }
    count = 0;                                                                                             
    if (document.getElementById("language").value == "english")                                               
    
    {
        document.getElementById("disp1").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words";
        document.getElementById("disp2").innerHTML = "(select the buttons in proper order)";
        var y = Math.floor(Math.random() * 10);                                                           
        obj = JSON.parse(sent1);                                                                          
        var n = obj.condition1[y].a;                                                                           
        document.getElementById("rando").value = y;
        var v = n.split(" ");                                                                            
        document.getElementById("sentence").value = v.length;                                       
        var b = [];                                                                                    
        var i = 0;
        do {
            var y = Math.floor(Math.random() * v.length)
            if (b.includes(y) == false) {
                b.push(y);
            }
            i++;
        }
        while (v.length != b.length);
        for (var m = 0; m < v.length; m++) {
            document.getElementById(m).value = v[b[m]];
            document.getElementById(m).innerHTML = "<button>" + v[b[m]] + "</button>"
        }
        for (var p = v.length; p < 10; p++) {
            document.getElementById(p).innerHTML = " ";
        }
    }
    else if (document.getElementById("language").value == "hindi") {

        document.getElementById("disp1").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words";
        document.getElementById("disp2").innerHTML = "(select the buttons in proper order)";

        var y = Math.floor(Math.random() * 7);                                                          
        obj = JSON.parse(sent2);                                                                          
        var n = obj.condition2[y].a;                                                                          
        document.getElementById("rando").value = y;
        var v = n.split(" ");                                                                         
        document.getElementById("sentence").value = v.length;                                        
        var b = [];                                                                                    
        var i = 0;
        do {
            var y = Math.floor(Math.random() * v.length)
            if (b.includes(y) == false) {
                b.push(y);
            }
            i++;
        }
        while (v.length != b.length);
        for (var m = 0; m < v.length; m++) {
            document.getElementById(m).value = v[b[m]];
            document.getElementById(m).innerHTML = "<button>" + v[b[m]] + "</button>"
        }
        for (var p = v.length; p < 10; p++) {
            document.getElementById(p).innerHTML = " ";
        }
    }
    else
    {
        alert("Select languague");
    }
}
var count = 0;
function correctsent(m) {
    var eg = document.getElementById(m).value;
    document.getElementById("sen2").value += eg+" ";
    document.getElementById("sen1").innerHTML += eg + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp";
    document.getElementById(m).innerHTML = " ";
    document.getElementById("sentence").innerHTML = "Formed Sentence";
    document.getElementById("sentence2").innerHTML = " (after selecting the words): ";
    document.getElementById("senref").innerHTML = "<button>" + "Re-form the sentence" + "</button>";
    count++;
    var width = document.getElementById("sentence").value;
    if (count === width) {
        document.getElementById("sencheck").innerHTML = "<button>" + "Check the correctness of this sentence" + "</button>";
    }

}           
function run() {
    count = 0;
    document.getElementById("solution").innerHTML = " ";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("sen1").innerHTML = " ";
    document.getElementById("sen2").value = " ";
    document.getElementById("corpus_1").innerHTML ="";
    document.getElementById("corpus_2").innerHTML ="";
    document.getElementById("sentence").innerHTML =" ";
    document.getElementById("sentence2").innerHTML =" ";
    document.getElementById("senref").innerHTML =" ";
    document.getElementById("sencheck").innerHTML = " ";
    document.getElementById("no_disp").innerHTML = "";
   
    for (var i = 0; i < 10; i++) {
        var a = document.getElementById(i).value
        if (a != " ") {
            document.getElementById(i).innerHTML = "<button>" + a + "</button>";
        }
    }
}
function sencheck_correct() {
    if (document.getElementById("language").value == "english") {
        var s = document.getElementById("rando").value;
        var d = document.getElementById("sen2").value;
        d = d.trim();
        if (d == obj.condition1[s].a || d == obj.condition1[s].b || d == obj.condition1[s].c || d == obj.condition1[s].d || d == obj.condition1[s].e || d == obj.condition1[s].f || d == obj.condition1[s].g || d == obj.condition1[s].h)
            document.getElementById("corpus_1").innerHTML = "Right answer!!!";
        else {
            document.getElementById("corpus_2").innerHTML = "Wrong answer!!!";
            document.getElementById("wrong").innerHTML = "<button>" + "Get Correct Sentence " + "</button>";
        }
    }
    else {
        var s = document.getElementById("rando").value;
        var d = document.getElementById("sen2").value;
        d = d.trim();
        if (d == obj.condition2[s].a || d == obj.condition2[s].b || d == obj.condition2[s].c || d == obj.condition2[s].d || d == obj.condition2[s].e || d == obj.condition2[s].f || d == obj.condition2[s].g || d == obj.condition2[s].h || d == obj.condition2[s].i || d == obj.condition2[s].j || d == obj.condition2[s].k || d == obj.condition2[s].l)

            document.getElementById("corpus_1").innerHTML = "Right answer!!!";

        else
        {
            document.getElementById("corpus_2").innerHTML = "Wrong answer!!!";
            document.getElementById("wrong").innerHTML = "<button>" + "Get Correct Sentence " + "</button>";
        }
    }
}

function answer() {

    if (document.getElementById("language").value == "english") {
        var n = document.getElementById("rando").value;
        document.getElementById("wrong").innerHTML = " ";
        document.getElementById("no_disp").innerHTML = "<button>" + "Hide the correct sentence " + "</button>";
        
        
        switch (n) {
            case 0: document.getElementById("solution").innerHTML = obj.condition1[0].a + "<br>" + obj.condition1[0].b + "<br>" + obj.condition1[0].c; break;
            case 1: document.getElementById("solution").innerHTML = obj.condition1[1].a + "<br>" + obj.condition1[1].b; break;
            case 2: document.getElementById("solution").innerHTML = obj.condition1[2].a + "<br>" + obj.condition1[0].b + "<br>" + obj.condition1[0].c; break;
            case 3: document.getElementById("solution").innerHTML = obj.condition1[3].a + "<br>" + obj.condition1[3].b; break;
            case 4: document.getElementById("solution").innerHTML = obj.condition1[4].a + "<br>" + obj.condition1[4].b; break;
            case 5: document.getElementById("solution").innerHTML = obj.condition1[5].a + "<br>" + obj.condition1[5].b + "<br>" + obj.condition1[5].c + "<br>" + obj.condition1[5].d; break;
            case 6: document.getElementById("solution").innerHTML = obj.condition1[6].a + "<br>" + obj.condition1[6].b; break;
            case 7: document.getElementById("solution").innerHTML = obj.condition1[7].a + "<br>" + obj.condition1[7].b; break;
            case 8: document.getElementById("solution").innerHTML = obj.condition1[8].a + "<br>" + obj.condition1[8].b + "<br>" + obj.condition1[8].c + "<br>" + obj.condition1[8].d + "<br>" + obj.condition1[8].e + "<br>" + obj.condition1[8].f + "<br>" + obj.condition1[8].g + "<br>" + obj.condition1[8].h; break;
            case 9: document.getElementById("solution").innerHTML = obj.condition1[9].a + "<br>" + obj.condition1[9].b + "<br>" + obj.condition1[9].c + "<br>" + obj.condition1[9].d + "<br>" + obj.condition1[9].e + "<br>" + obj.condition1[9].f; break;

        }
    }
    else {
        var n = document.getElementById("rando").value;
        document.getElementById("wrong").innerHTML = " ";
        document.getElementById("no_disp").innerHTML = "<button>" + "Hide the correct sentence " + "</button>";

        switch (n) {
            case 0: document.getElementById("solution").innerHTML = obj.condition2[0].a + "<br>" + obj.condition2[0].b + "<br>" + obj.condition2[0].c + "<br>" + obj.condition2[0].d; break;
            case 1: document.getElementById("solution").innerHTML = obj.condition2[1].a + "<br>" + obj.condition2[1].b + "<br>" + obj.condition2[1].c + "<br>" + obj.condition2[1].d; break;
            case 2: document.getElementById("solution").innerHTML = obj.condition2[2].a + "<br>" + obj.condition2[2].b + "<br>" + obj.condition2[2].c + "<br>" + obj.condition2[2].d + "<br>" + obj.condition2[2].e + "<br>" + obj.condition2[2].f + "<br>" + obj.condition2[2].g + "<br>" + obj.condition2[2].h + "<br>" + obj.condition2[2].i + "<br>" + obj.condition2[2].j + "<br>" + obj.condition2[2].k + "<br>" + obj.condition2[2].l; break;
            case 3: document.getElementById("solution").innerHTML = obj.condition2[3].a + "<br>" + obj.condition2[3].b + "<br>" + obj.condition2[3].c + "<br>" + obj.condition2[3].d + "<br>" + obj.condition2[3].e + "<br>" + obj.condition2[3].f; break;
            case 4: document.getElementById("solution").innerHTML = obj.condition2[4].a + "<br>" + obj.condition2[4].b + "<br>" + obj.condition2[4].c + "<br>" + obj.condition2[4].d + "<br>" + obj.condition2[4].e + "<br>" + obj.condition2[4].f + "<br>" + obj.condition2[4].g + "<br>" + obj.condition2[4].h; break;
            case 5: document.getElementById("solution").innerHTML = obj.condition2[5].a + "<br>" + obj.condition2[5].b + "<br>" + obj.condition2[5].c + "<br>" + obj.condition1[5].d; break;
            case 6: document.getElementById("solution").innerHTML = obj.condition2[6].a + "<br>" + obj.condition2[6].b + "<br>" + obj.condition2[6].c + "<br>" + obj.condition2[6].d + "<br>" + obj.condition2[6].e + "<br>" + obj.condition2[6].f + "<br>" + obj.condition2[6].g + "<br>" + obj.condition2[6].h; break;
                 
        }
    }  
}
function no_ans()
{
   
    document.getElementById("wrong").innerHTML = "<button>" + "Get Answers " + "</button>";
    document.getElementById("solution").innerHTML = " ";
    document.getElementById("no_disp").innerHTML = " ";
}
