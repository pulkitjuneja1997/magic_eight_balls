var username;
var x;
function display_name(){
    debugger;

    username = document.getElementById("name").value;
    console.log(username);
    localStorage.setItem("name",username);

}

function ready(){
    document.getElementById("name_heading").innerHTML = "Hello " + localStorage.getItem("name");

     
}




var answer_array = [ 'It is certain','It is decidedly so','Reply hazy try again','Cannot predict now','Do not count on it',
     'My sources say no','Outlook not so good','Signs point to yes' ];


function display(n){
    debugger;
    x = n;

        console.log(n);

        console.log("hello");
        var number = Math.floor(Math.random() * 7) ;;
        console.log(number);

        document.getElementById("b"+n).style.display = "none";

        document.getElementById("answer"+n).style.display = "block";

        // document.getElementById(n).style.display = "block";

        console.log(answer_array[number] );

        document.getElementById(n).innerHTML = answer_array[number]  ;
       
   }
    

function hide(m){

    // document.getElementById(m).innerHTML = " " ;

    document.getElementById("b"+m).style.display = "block";
    document.getElementById("answer"+m).style.display = "none";


}   

