function validation()
{
    let fname = document.getElementsByName('fnm')[0].value 
    if(fname === ""||fname===null)
    {
        let x= document.getElementsByName('fnm')
        x[0].style.border ="solid 1px red"

        let  text =  document.getElementsByClassName('error')
        text[0].innerText = "This field is empty"
        text[0].style.color="red"
        return false
    }
    else if(lname==="" || lname=== null)
    {
        let y = document.getElementsByName('lnm')
        y[0].style.broder = "solid 1px red "
        return false
    }
}