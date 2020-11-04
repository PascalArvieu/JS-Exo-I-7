
// Exercice 7 

document.getElementById("bouton").onclick = function Toto() {
    var num1 = document.getElementById("age").value;
    
if (num1 >= 18 && num1 <150) 
    {alert ("Bravo, vous êtes majeur !");
}

else if (num1 < 0 || num1 >= 150)
    {alert ("T'es un mytho !");
}

else
    {alert ("Rentre chez ta mère, !");
    }
}   
// Attention, ne pas remettre "var" avant son nom (pas var num1), 
// mais num 1 tout court !)

// else = pas nécessaire de mettre une condition

