function openTab(e,t,l){var n,a,s,c;for(a=document.getElementsByClassName("tabcontent"),n=0;n<a.length;n++)a[n].style.display="none";for(c=document.getElementsByClassName("arrow"),n=0;n<c.length;n++)c[n].style.display="none";for(s=document.getElementsByClassName("tablinks"),n=0;n<s.length;n++)s[n].className=s[n].className.replace(" active","");document.getElementById(l).style.display="block",document.getElementById(t).style.display="block",e.currentTarget.className+=" active"}document.getElementById("defaultOpen").click();