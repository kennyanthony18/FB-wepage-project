function validation()
{
    let fname = document.getElementsByName('fnm') [0].value
    let aname = document.getElementsByName('abc') [0].value
    let bname = document.getElementsByName('def') [0].value
    let cname = document.getElementsByName('abc1') [0].value
    let dname = document.getElementsByName('Gender') [0].value


    if(fname ==="" || fname === null)
    {
        let x= document.getElementsByName('fnm')
        x[0].style.border = "solid 1px red"

        let text = document.getElementsByClassName('error-msz')
        text[0].innerText = "Enter you name "
        text[0].style.color = "red"

        return false
    }

    else if(aname ==="" || aname === null)
    {
        
            let y= document.getElementsByName('fnm')
            y[0].style.border = "solid 1px red"
    
            let text = document.getElementsByClassName('error-msz1')
            text[0].innerText = "Missing Last name "
            text[0].style.color = "red"
    
            return false
    }

    else if (bname ==="" || bname === null)
    {
        
            let z= document.getElementsByName('fnm')
            z[0].style.border = "solid 2px red"
    
            let text = document.getElementsByClassName('error-msz2')
            text[0].innerText = "Enter you email-id"
            text[0].style.color = "red"
    
            return false
     }

     else if (cname ==="" || cname === null)
    {
        
            let o= document.getElementsByName('abc1')
            o[0].style.border = "solid 2px red"
    
            let text = document.getElementsByClassName('error-msz3')
            text[0].innerText = "Password"
            text[0].style.color = "red"
    
            return false
     }

     else if (dname ==="" || dname === null)
     {
         
             let j= document.getElementsByName('Gender')
             j[0].style.border = "solid 2px red"
     
             let text = document.getElementsByClassName('error-msz4')
             text[0].innerText = "Password"
             text[0].style.color = "red"
     
             return false
      }
 



}