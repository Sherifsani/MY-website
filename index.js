const circle = document.querySelector(".circle"),
 plans = document.querySelectorAll("#you"),
 noob = document.querySelector("#noob"),
 pro = document.querySelector("#pro"),
 hacker = document.querySelector("#hacker"),
 pricingPlan = document.querySelectorAll(".pricing-plan")
//  plan = document.querySelectorAll("");
 ;


circle.addEventListener("click", function(){
    circle.classList.toggle("clicked")
    noob.textContent = yearlyPlans[0].noob.price
    pro.textContent = yearlyPlans[1].pro.price
    hacker.textContent = yearlyPlans[2].hacker.price
    if(circle.classList.contains("clicked")){
        noob.textContent = monthlyPlans[0].noob.price
        pro.textContent = monthlyPlans[1].pro.price
        hacker.textContent = monthlyPlans[2].hacker.price
    }
});
// pricingPlan.forEach(i => {
// i.addEventListener("click", function(){
//         i.classList.toggle("active")
//     })
// })


var yearlyPlans = [
    {'noob': {
        'price': "$100/yr"
    }},
    {'pro': {
        'price': "$300/yr"
    }},
    {'hacker': {
        'price': "$500/yr"
    }}

];
var monthlyPlans = [
    {'noob': {
        'price': "$10/yr"
    }},
    {'pro': {
        'price': "$30/yr"
    }},
    {'hacker': {
        'price': "$50/yr"
    }}

];