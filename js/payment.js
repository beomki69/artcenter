"use strict";var paymentMethodContainer=document.querySelector(".paymentMethodContainer"),paymentMethodList=paymentMethodContainer.querySelectorAll("li"),paymentMethodAll=paymentMethodContainer.querySelectorAll("label"),paymentCorpContainer=document.querySelector(".paymentCorpContainer"),paymentCorpAll=paymentCorpContainer.querySelectorAll(".paymentCorp"),paymentForm=document.getElementById("paymentForm"),paymentMethodListArray=[],paymentCorpArray=[],paymentMethodIndex=void 0;function radioValueCheck(radioName){var radioArray=document.getElementsByName(radioName);for(i=0;i<radioArray.length;i++)if(radioArray[i].checked)return radioValue=radioArray[i].value,radioValue}function paymentFormValidate(e){if(!radioValueCheck("paymentMethod"))alert("\uACB0\uC81C \uBC29\uBC95\uC744 \uC120\uD0DD\uD558\uC138\uC694."),e.preventDefault();else if(0==paymentMethodIndex){var cardCorp=document.getElementById("cardCorp"),cardNum=document.getElementById("cardNum"),cardAgree=document.getElementById("cardAgree");cardCorp.value?cardNum.value?!cardAgree.checked&&(alert("\uAC1C\uC778\uC815\uBCF4\uD65C\uC6A9\uC5D0 \uB3D9\uC758\uD574\uC8FC\uC138\uC694."),e.preventDefault()):(alert("\uCE74\uB4DC\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694"),e.preventDefault()):(alert("\uCE74\uB4DC\uC0AC\uB97C \uC120\uD0DD\uD558\uC138\uC694."),e.preventDefault()),cardNum.value&&isNaN(cardNum.value)&&(alert("\uC22B\uC790\uB9CC \uC785\uB825\uD558\uC138\uC694."),e.preventDefault())}else if(1==paymentMethodIndex){var smartphonePaymentCorp=document.getElementById("smartphonePaymentCorp"),smartphonePaymentAgree=document.getElementById("smartphonePaymentAgree");smartphonePaymentCorp.value?!smartphonePaymentAgree.checked&&(alert("\uAC1C\uC778\uC815\uBCF4\uD65C\uC6A9\uC5D0 \uB3D9\uC758\uD574\uC8FC\uC138\uC694."),e.preventDefault()):(alert("\uACB0\uC81C\uBC29\uBC95\uC744 \uC120\uD0DD\uD558\uC138\uC694"),e.preventDefault())}else if(2==paymentMethodIndex){var bankCorp=document.getElementById("bankCorp"),bankAgree=document.getElementById("bankAgree");bankCorp.value?!bankAgree.checked&&(alert("\uAC1C\uC778\uC815\uBCF4\uD65C\uC6A9\uC5D0 \uB3D9\uC758\uD574\uC8FC\uC138\uC694."),e.preventDefault()):(alert("\uC740\uD589\uC744 \uC120\uD0DD\uD558\uC138\uC694"),e.preventDefault())}else if(3==paymentMethodIndex){var mobilePaymentCorp=document.getElementById("mobilePaymentCorp"),mobileNum=document.getElementById("mobileNum"),mobilePaymentAgree=document.getElementById("mobilePaymentAgree");mobilePaymentCorp.value?mobileNum.value?!mobilePaymentAgree.checked&&(alert("\uAC1C\uC778\uC815\uBCF4\uD65C\uC6A9\uC5D0 \uB3D9\uC758\uD574\uC8FC\uC138\uC694."),e.preventDefault()):(alert("\uD734\uB300\uD3F0\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694"),e.preventDefault()):(alert("\uD1B5\uC2E0\uC0AC\uB97C \uC120\uD0DD\uD558\uC138\uC694."),e.preventDefault()),mobileNum.value&&isNaN(mobileNum.value)&&(alert("\uC22B\uC790\uB9CC \uC785\uB825\uD558\uC138\uC694."),e.preventDefault())}}function showPaymentCorp(index){paymentCorpAll.forEach(function(e){return e.classList.remove("active")}),paymentCorpArray[index].classList.add("active")}function showPaymentChoose(){paymentForm.reset(),paymentMethodList.forEach(function(e){return e.classList.remove("active")}),this.parentNode.classList.add("active");var listIndex=paymentMethodListArray.indexOf(this.parentNode);paymentMethodIndex=listIndex,showPaymentCorp(paymentMethodIndex)}function init(){paymentMethodList.forEach(function(e){return paymentMethodListArray.push(e)}),paymentCorpAll.forEach(function(e){return paymentCorpArray.push(e)}),paymentMethodAll.forEach(function(e){return e.addEventListener("click",showPaymentChoose)}),paymentForm.addEventListener?paymentForm.addEventListener("submit",paymentFormValidate,!1):paymentForm.attachEvent&&paymentForm.attachEvent("onsubmit",paymentFormValidate)}init();