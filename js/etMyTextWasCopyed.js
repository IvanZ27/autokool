function myTextWasCopyed(){let targetText=window.getSelection(),addText='<br><br> Tekst oli kopeeritud saidilt '+document.location.href,outText=targetText+addText,fake=document.createElement('div');fake.style.position='absolute';fake.style.left='-99999px';document.body.appendChild(fake);fake.innerHTML=outText;targetText.selectAllChildren(fake);window.setTimeout(function(){document.body.removeChild(fake);},100);}
document.addEventListener('copy',myTextWasCopyed);