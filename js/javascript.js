function Sumar()
        {
            var n1=document.getElementById("numero1").value;
            var n2=document.getElementById("numero2").value;

            resultado = parseInt(n1) + parseInt(n2);

            if(resultado >=0)
            {
                alert("El resultado de la suma es: " + resultado);  
            }
            else if(resultado < 0)
            {
                alert("El resultado de la suma es: " + resultado); 
            }
            else
            {
                alert("No se ingresaron números");
            }
        }