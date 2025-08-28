let count = 0;
let fixedNumber = 100
let number = 20;
//copy buttons
//copy btn 1


document.getElementById("btn-1").addEventListener('click', function () {
   
    const hotlineNumber = "999"
    navigator.clipboard.writeText(hotlineNumber).then(() => {
        alert("national emergency number coppied successfully"); 
    })
    count++
    document.getElementById("copy").innerText = count;
})
//copy-btn-2
document.getElementById("btn-2").addEventListener('click', function () {
   
    const hotlineNumber = "999"
    navigator.clipboard.writeText(hotlineNumber).then(() => {
        alert("Help Line Number is Coppied Succesfully"); 
    })
    count++
    document.getElementById("copy").innerText = count;
})
//copy-btn-3
document.getElementById("btn-3").addEventListener('click', function () {
   
    const hotlineNumber = "999"
    navigator.clipboard.writeText(hotlineNumber).then(() => {
        alert("Fire Service Number coppied Succesfully"); 
    })
    count++
    document.getElementById("copy").innerText = count;
})
//copu-btn-4
document.getElementById("btn-4").addEventListener('click', function () {
   
    const hotlineNumber = "1994-999999"
    navigator.clipboard.writeText(hotlineNumber).then(() => {
        alert("Ambulence Service Number coppied Succesfully"); 
    })
    count++
    document.getElementById("copy").innerText = count;
})
//copy-btn-5
document.getElementById("btn-5").addEventListener('click', function () {
   
    const hotlineNumber = "109"
    navigator.clipboard.writeText(hotlineNumber).then(() => {
        alert("Women & Child Helpline Service Number coppied Succesfully"); 
    })
    count++
    document.getElementById("copy").innerText = count;
})
//copy-btn-6
document.getElementById("btn-6").addEventListener('click', function () {
   
    const hotlineNumber = "106"
    navigator.clipboard.writeText(hotlineNumber).then(() => {
        alert("Anti-Corruption Helpline Service Number coppied Succesfully"); 
    })
    count++
    document.getElementById("copy").innerText = count;
})
//copy-btn-7
document.getElementById("btn-7").addEventListener('click', function () {
   
    const hotlineNumber = "106"
    navigator.clipboard.writeText(hotlineNumber).then(() => {
        alert("Anti-Corruption Helpline Service Number coppied Succesfully"); 
    })
    count++
    document.getElementById("copy").innerText = count;
})
//copy-btn-8
document.getElementById("btn-8").addEventListener('click', function () {
   
    const hotlineNumber = "106"
    navigator.clipboard.writeText(hotlineNumber).then(() => {
        alert("Anti-Corruption Helpline Service Number coppied Succesfully"); 
    })
    count++
    document.getElementById("copy").innerText = count;
})
//copy-btn-9
document.getElementById("btn-9").addEventListener('click', function () {
   
    const hotlineNumber = "106"
    navigator.clipboard.writeText(hotlineNumber).then(() => {
        alert("Anti-Corruption Helpline Service Number coppied Succesfully"); 
    })
    count++
    document.getElementById("copy").innerText = count;
})






//heart buttons
//heart btn-1
document.getElementById("heart-btn").addEventListener('click', function () {
    alert("Add Favourite list");
    
    count++
    document.getElementById("heart").innerText = count;

})
//heart btn-2
document.getElementById("heart-btn-2").addEventListener('click', function () {
    alert("Add Favourite list");
    
    count++
    document.getElementById("heart").innerText = count;

})
//heart btn-3
document.getElementById("heart-btn-3").addEventListener('click', function () {
    alert("Add Favourite list");
    
    count++
    document.getElementById("heart").innerText = count;

})
//heart btn-4
document.getElementById("heart-btn-4").addEventListener('click', function () {
    alert("Add Favourite list");
    
    count++
    document.getElementById("heart").innerText = count;

})
//heart btn-5
document.getElementById("heart-btn-5").addEventListener('click', function () {
    alert("Add Favourite list");
    
    count++
    document.getElementById("heart").innerText = count;

})
//heart btn-6
document.getElementById("heart-btn-6").addEventListener('click', function () {
    alert("Add Favourite list");
    
    count++
    document.getElementById("heart").innerText = count;

})
//heart btn-7
document.getElementById("heart-btn-7").addEventListener('click', function () {
    alert("Add Favourite list");
    
    count++
    document.getElementById("heart").innerText = count;

})
//heart btn-8
document.getElementById("heart-btn-8").addEventListener('click', function () {
    alert("Add Favourite list");
    
    count++
    document.getElementById("heart").innerText = count;

})
//heart btn-9
document.getElementById("heart-btn-9").addEventListener('click', function () {
    alert("Add Favourite list");
    
    count++
    document.getElementById("heart").innerText = count;

})
//call buttons
//call btn 1
document.getElementById("call").addEventListener('click', function () {
   if (fixedNumber >= 20) {
         alert("Calling National Emergency Number 999...")
        fixedNumber -= 20
       document.getElementById("tk").innerText = fixedNumber;
      const historyDiv = document.getElementById("call-history");
       const History = document.createElement("div");
       History.style.background = "gray"
        History.style.border = "3px solid gray-100"
       History.style.borderRadius = "30px"
       History.style.padding = "5px"
       History.style.display = "flex"
       History.style.gap = '20px'
       History.style.marginTop = "60px"
       //History.style.justifyContent = "flex-start"
       // History.style.alignItems = "flex-start"
       History.style.justifyContent = "spaceBetween"
        History.style.padding = "10px"
       const hElement = this.innerText;
        const addH = document.createElement("h1");
       addH.innerText = 'National Emergency Number' //` ${hElement}`;
       
       const pElement = this.innerText
       const addp = document.createElement("p");
       addp.innerText = 999;

       const time = document.createElement("span");
       const newDate = new Date();
       time.innerText = newDate.toLocaleTimeString();
       History.appendChild(addH);
       History.appendChild(addp)
       History.appendChild(time);
       historyDiv.appendChild(History);

    }
    else {
       alert('you have not enough coin');
    }
})
//call btn 2
document.getElementById("call-2").addEventListener('click', function () {
   if (fixedNumber >= 20) {
         alert("Calling police Number 999...")
        fixedNumber -= 20
       document.getElementById("tk").innerText = fixedNumber;
       const historyDiv = document.getElementById("call-history");
       const History = document.createElement("div");
       History.style.background = "gray"
        History.style.border = "3px solid gray-100"
       History.style.borderRadius = "30px"
       History.style.padding = "5px"
       History.style.display = "flex"
       History.style.gap = '20px'
       History.style.marginTop = "60px"
       History.style.justifyContent = "spaceBetween"
        History.style.padding = "10px"
        const addH = document.createElement("h1");
       addH.innerText = 'Help Line Number'
       
       const pElement = this.innerText
       const addp = document.createElement("p");
       addp.innerText = 999;

       const time = document.createElement("span");
       const newDate = new Date();
       time.innerText = newDate.toLocaleTimeString();
       History.appendChild(addH);
       History.appendChild(addp)
       History.appendChild(time);
       historyDiv.appendChild(History);


    }
    else {
        alert('you have not enough coin')
    }
})
//call btn 3
document.getElementById("call-3").addEventListener('click', function () {
   if (fixedNumber >= 20) {
         alert("Calling Fire Service Number 999...")
        fixedNumber -= 20
       document.getElementById("tk").innerText = fixedNumber;
       const historyDiv = document.getElementById("call-history");
       const History = document.createElement("div");
       History.style.background = "gray"
        History.style.border = "3px solid gray-100"
       History.style.borderRadius = "30px"
       History.style.padding = "5px"
       History.style.display = "flex"
       History.style.gap = '20px'
       History.style.marginTop = "60px"
       History.style.justifyContent = "spaceBetween"
        History.style.padding = "10px"
        const addH = document.createElement("h1");
       addH.innerText = 'Fire Service Number'
       
       const pElement = this.innerText
       const addp = document.createElement("p");
       addp.innerText = 999;

       const time = document.createElement("span");
       const newDate = new Date();
       time.innerText = newDate.toLocaleTimeString();
       History.appendChild(addH);
       History.appendChild(addp)
       History.appendChild(time);
       historyDiv.appendChild(History);

    }
    else {
        alert('you have not enough coin')
    }
})
//call btn 4
document.getElementById("call-4").addEventListener('click', function () {
   if (fixedNumber >= 20) {
         alert("Calling Ambulance Service Number 1994-999999...")
        fixedNumber -= 20
       document.getElementById("tk").innerText = fixedNumber;
       const historyDiv = document.getElementById("call-history");
       const History = document.createElement("div");
       History.style.background = "gray"
        History.style.border = "3px solid gray-100"
       History.style.borderRadius = "20px"
       History.style.padding = "3px"
       History.style.display = "flex"
       History.style.gap = '20px'
       History.style.marginTop = "60px"
       
        History.style.padding = "10px"
        const addH = document.createElement("h1");
       addH.innerText = ' Ambulance Service'
       
       const pElement = this.innerText
       const addp = document.createElement("p");
       addp.innerText = 1994999999;

       const time = document.createElement("span");
       const newDate = new Date();
       time.innerText = newDate.toLocaleTimeString();
       History.appendChild(addH);
       History.appendChild(addp)
       History.appendChild(time);
       historyDiv.appendChild(History);

    }
    else {
        alert('you have not enough coin')
    }
})
//call btn 5
document.getElementById("call-5").addEventListener('click', function () {
   if (fixedNumber >= 20) {
         alert("Calling Women & child Number 109...")
        fixedNumber -= 20
       document.getElementById("tk").innerText = fixedNumber;
     const historyDiv = document.getElementById("call-history");
       const History = document.createElement("div");
       History.style.background = "gray"
        History.style.border = "3px solid gray-100"
       History.style.borderRadius = "30px"
       History.style.padding = "5px"
       History.style.display = "flex"
       History.style.gap = '20px'
       History.style.marginTop = "60px"
       History.style.justifyContent = "spaceBetween"
        History.style.padding = "10px"
        const addH = document.createElement("h1");
       addH.innerText = ' Women & child Number'
       
       const pElement = this.innerText
       const addp = document.createElement("p");
       addp.innerText = 109;

       const time = document.createElement("span");
       const newDate = new Date();
       time.innerText = newDate.toLocaleTimeString();
       History.appendChild(addH);
       History.appendChild(addp)
       History.appendChild(time);
       historyDiv.appendChild(History);

    }
    else {
        alert('you have not enough coin')
    }
})
//call btn 6
document.getElementById("call-6").addEventListener('click', function () {
   if (fixedNumber >= 20) {
         alert("Calling Anty-Corruption Number 106...")
        fixedNumber -= 20
       document.getElementById("tk").innerText = fixedNumber;
       const historyDiv = document.getElementById("call-history");
       const History = document.createElement("div");
       History.style.background = "gray"
        History.style.border = "3px solid gray-100"
       History.style.borderRadius = "30px"
       History.style.padding = "5px"
       History.style.display = "flex"
       History.style.gap = '20px'
       History.style.marginTop = "60px"
       History.style.justifyContent = "spaceBetween"
        History.style.padding = "10px"
        const addH = document.createElement("h1");
       addH.innerText = ' Anty-Corruption Number'
       
       const pElement = this.innerText
       const addp = document.createElement("p");
       addp.innerText = 106;

       const time = document.createElement("span");
       const newDate = new Date();
       time.innerText = newDate.toLocaleTimeString();
       History.appendChild(addH);
       History.appendChild(addp)
       History.appendChild(time);
       historyDiv.appendChild(History);

    }
    else {
        alert('you have not enough coin')
    }
})
//call btn 7
document.getElementById("call-7").addEventListener('click', function () {
   if (fixedNumber >= 20) {
         alert("Calling Electric Outage Number 16216...")
        fixedNumber -= 20
       document.getElementById("tk").innerText = fixedNumber;
 const historyDiv = document.getElementById("call-history");
       const History = document.createElement("div");
       History.style.background = "gray"
        History.style.border = "3px solid gray-100"
       History.style.borderRadius = "30px"
       History.style.padding = "5px"
       History.style.display = "flex"
       History.style.gap = '20px'
       History.style.marginTop = "60px"
       History.style.justifyContent = "spaceBetween"
        History.style.padding = "10px"
        const addH = document.createElement("h1");
       addH.innerText = ' Electric Outage Number'
       
       const pElement = this.innerText
       const addp = document.createElement("p");
       addp.innerText = 16216;

       const time = document.createElement("span");
       const newDate = new Date();
       time.innerText = newDate.toLocaleTimeString();
       History.appendChild(addH);
       History.appendChild(addp)
       History.appendChild(time);
       historyDiv.appendChild(History);

    }
    else {
        alert('you have not enough coin')
    }
})
//call btn 8
document.getElementById("call-8").addEventListener('click', function () {
   if (fixedNumber >= 20) {
         alert("Calling National Brack number 16445...")
        fixedNumber -= 20
       document.getElementById("tk").innerText = fixedNumber;
       const historyDiv = document.getElementById("call-history");
       const History = document.createElement("div");
       History.style.background = "gray"
        History.style.border = "3px solid gray-100"
       History.style.borderRadius = "30px"
       History.style.padding = "5px"
       History.style.display = "flex"
       History.style.gap = '20px'
       History.style.marginTop = "60px"
       History.style.justifyContent = "spaceBetween"
        History.style.padding = "10px"
        const addH = document.createElement("h1");
       addH.innerText = ' National Brac Number'
       
       const pElement = this.innerText
       const addp = document.createElement("p");
       addp.innerText = 16445;

       const time = document.createElement("span");
       const newDate = new Date();
       time.innerText = newDate.toLocaleTimeString();
       History.appendChild(addH);
       History.appendChild(addp)
       History.appendChild(time);
       historyDiv.appendChild(History);


    }
    else {
        alert('you have not enough coin')
    }
})
//call btn 9
document.getElementById("call-9").addEventListener('click', function () {
   if (fixedNumber >= 20) {
         alert("Calling Bangladesh Railway Number 163...")
        fixedNumber -= 20
       document.getElementById("tk").innerText = fixedNumber;

       const historyDiv = document.getElementById("call-history");
       const History = document.createElement("div");
       History.style.background = "gray"
        History.style.border = "3px solid gray-100"
       History.style.borderRadius = "30px"
       History.style.padding = "5px"
       History.style.display = "flex"
       History.style.gap = '20px'
       History.style.marginTop = "60px"
       History.style.justifyContent = "spaceBetween"
        History.style.padding = "10px"
        const addH = document.createElement("h1");
       addH.innerText = ' Bangladeshi Railway Number'
       
       const pElement = this.innerText
       const addp = document.createElement("p");
       addp.innerText = 163;

       const time = document.createElement("span");
       const newDate = new Date();
       time.innerText = newDate.toLocaleTimeString();
       History.appendChild(addH);
       History.appendChild(addp)
       History.appendChild(time);
       historyDiv.appendChild(History);

       

    }
    else {
        alert('you have not enough coin')
    }
})
document.getElementById("clear").addEventListener("click", function () {
    document.getElementById("call-history").innerHTML = " ";
})
   
   
   
   
   
   
   
   