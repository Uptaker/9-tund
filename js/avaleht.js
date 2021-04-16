function updatePensionStatus(val1, val2) {
    var x = document.getElementById('Genderchoice1').checked;

    if(x == true){
        if(val1 >= 65){
            document.getElementById("pensionStatus").innerHTML=" Te olete pensioni ealine! ";
            document.querySelector(".pensioncontainer").style.backgroundColor = 'lightblue';
        }else{
            document.getElementById("pensionStatus").innerHTML=" Te olete veel liiga noor! ";
            document.querySelector(".pensioncontainer").style.backgroundColor = 'lightblue';

            
        }
    }else{
        if(val1 >= 63){
            document.getElementById("pensionStatus").innerHTML=" Te olete pensioni ealine! "; 
            document.querySelector(".pensioncontainer").style.backgroundColor = 'pink';
        }else{
            document.getElementById("pensionStatus").innerHTML=" Te olete veel liiga noor! "
            document.querySelector(".pensioncontainer").style.backgroundColor = 'pink';
        }
    }

}