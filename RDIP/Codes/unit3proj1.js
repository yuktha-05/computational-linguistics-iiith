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

var sent1 = '{"eng":[' +
    '{"a":"John ate an apple before afternoon","b":"before afternoon John ate an apple","c":"John before afternoon ate an apple"},' +
    '{"a":"John went to church after eating","b":"after eating John went to church","c":"John after eating went to church"},' +
    '{"a":"some students like to study in the night","b":"in the night some students like to study"},' +
    '{"a":"the woman who called my sister sells cosmetics","b":"the woman who sells cosmetics called my sister","c":"my sister who sells cosmetics called the woman","d":"my sister who called the woman sells cosmetics"},' +
    '{"a":"John goes to the library and studies","b":"John studies and goes to the library"},' +
    '{"a":"did he go to market","b":"he did go to market"},' +
    '{"a":"John ate an apple so did she","b":"she ate an apple so did John"},' +
    '{"a":"John and Mary went to church","b":"Mary and John went to church"},' +
    '{"a":"the teacher returned the book after she noticed the error","b":"the teacher noticed the error after she returned the book","c":"after the teacher returned the book she noticed the error","d":"after the teacher noticed the error she returned the book","e":"she returned the book after the teacher noticed the error","f":"she noticed the error after the teacher returned the book","g":"after she returned the book the teacher noticed the error","h":"after she noticed the error the teacher returned the book"},' +
    '{"a":"I told her that I bought a book yesterday","b":"I told her yesterday that I bought a book","c":"yesterday I told her that I bought a book","d":"I bought a book that I told her yesterday","e":"I bought a book yesterday that I told her","f":"yesterday I bought a book that I told her"}]}';

var sent2 = '{"hin":[' + 
    '{"a":"राम सोया और श्याम भी","b":"श्याम सोया और राम भी","c":"सोया श्याम और राम भी","d":"सोया राम और श्याम भी"},' +
    '{"a":"राम और श्याम बाजार गयें","b":"राम और श्याम गयें बाजार","c":"बाजार गयें राम और श्याम","d":"गयें बाजार राम और श्याम"},' +
    '{"a":"मैंने उसे बताया कि राम सो रहा है", "b":"मैंने उसे बताया कि सो रहा है राम","c":"उसे मैंने बताया कि राम सो रहा है","d":"उसे मैंने बताया कि सो रहा है राम","e":"मैंने बताया उसे कि राम सो रहा है","f":"मैंने बताया उसे कि सो रहा है राम","g":"उसे बताया मैंने कि राम सो रहा है","h":"उसे बताया मैंने कि सो रहा है राम","i":"बताया मैंने उसे कि राम सो रहा है","j":"बताया मैंने उसे कि सो रहा है राम","k":"बताया उसे मैंने कि राम सो रहा है","l":"बताया उसे मैंने कि सो रहा है राम"},' +
    '{"a":"राम खाकर सोया","b":"खाकर राम सोया","c":"राम सोया खाकर","d":"खाकर सोया राम","e":"सोया राम खाकर","f":"सोया खाकर राम"},' +
    '{"a":"बिल्लियों को मारकर कुत्ता सो गया","b":"मारकर बिल्लियों को कुत्ता सो गया","c":"बिल्लियों को मारकर सो गया कुत्ता","d":"मारकर बिल्लियों को सो गया कुत्ता","e":"कुत्ता सो गया बिल्लियों को मारकर","f":"कुत्ता सो गया मारकर बिल्लियों को","g":"सो गया कुत्ता बिल्लियों को मारकर","h":"सो गया कुत्ता मारकर बिल्लियों को"},' +
    '{"a":"एक लाल किताब वहाँ है","b":"एक लाल किताब है वहाँ","c":"वहाँ है एक लाल किताब","d":"है वहाँ एक लाल किताब"},' +
    '{"a":"एक बड़ी सी किताब वहाँ है","b":"एक बड़ी सी किताब है वहाँ","c":"बड़ी सी एक किताब वहाँ है","d":"बड़ी सी एक किताब है वहाँ","e":"वहाँ है एक बड़ी सी किताब","f":"वहाँ है बड़ी सी एक किताब","g":"है वहाँ एक बड़ी सी किताब","h":"है वहाँ बड़ी सी एक किताब"}]}';

    function rand()
{
    document.getElementById("sen1").innerHTML = "";                                                         
    document.getElementById("sen1").value = "";
    document.getElementById("sentence").innerHTML = "";
    document.getElementById("sentence2").innerHTML = "";
    document.getElementById("senref").innerHTML = "";
     document.getElementById("sencheck").innerHTML = "";                                                  

    for (var l = 0; l < 10; l++) {
        document.getElementById(l).value = " ";                                                         
    }
    count = 0;                                                                                          
    if (document.getElementById("lang").value == "english")                                               
    {
        document.getElementById("disp1").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words";   
        document.getElementById("disp2").innerHTML = "(select the buttons in proper order)";
        var x = Math.floor(Math.random() * 10);                                                           
        obj = JSON.parse(sent1);                                                                          
        var y = obj.eng[x].a;                                                                           
        document.getElementById("rando").value = x;
        var z = y.split(" ");                                                                            
        document.getElementById("sentence").value = z.length;                                          
        var b = [];                                                                                      
        var i = 0;
        do {
            var x = Math.floor(Math.random() * z.length)
            if (b.includes(x) == false) {
                b.push(x);
            }
            i++;
        }
        while (z.length != b.length);
        for (var l = 0; l < z.length; l++) {
            document.getElementById(l).value = z[b[l]];
            document.getElementById(l).innerHTML = "<button>" + z[b[l]] + "</button>"
        }
        for (var j = z.length; j < 10; j++) {
            document.getElementById(j).innerHTML = " ";
        }
    }
    else if (document.getElementById("lang").value == "hindi") {

        document.getElementById("disp1").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words";
        document.getElementById("disp2").innerHTML = "(select the buttons in proper order)";

        var x = Math.floor(Math.random() * 7);                                                           
        obj = JSON.parse(sent2);                                                                          
        var y = obj.hin[x].a;                                                                            
        document.getElementById("rando").value = x;
        var z = y.split(" ");                                                                            
        document.getElementById("sentence").value = z.length;                                          
        var b = [];                                                                                      
        var i = 0;
        do {
            var x = Math.floor(Math.random() * z.length)
            if (b.includes(x) == false) {
                b.push(x);
            }
            i++;
        }
        while (z.length != b.length);
        for (var l = 0; l < z.length; l++) {
            document.getElementById(l).value = z[b[l]];
            document.getElementById(l).innerHTML = "<button>" + z[b[l]] + "</button>"
        }
        for (var j = z.length; j < 10; j++) {
            document.getElementById(j).innerHTML = " ";
        }
    }
   else
    {
       alert("Select languague");
    }
}

var count = 0;
function correctsent(l) {
    var eg = document.getElementById(l).value;
    document.getElementById("sen2").value += eg+" ";
    document.getElementById("sen1").innerHTML += eg + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp";
    document.getElementById(l).innerHTML = " ";
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
    document.getElementById("sen1").innerHTML = " ";
    document.getElementById("sen2").value = " ";
    document.getElementById("sentence").innerHTML =" ";
    document.getElementById("sentence2").innerHTML =" ";
    document.getElementById("senref").innerHTML =" ";
     document.getElementById("sencheck").innerHTML = ""; 
   
    for (var i = 0; i < 10; i++) {
        var a = document.getElementById(i).value
        if (a != " ") {
            document.getElementById(i).innerHTML = "<button>" + a + "</button>";
        }
    }
}