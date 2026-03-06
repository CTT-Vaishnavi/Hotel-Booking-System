//     (function () {
//         emailjs.init("vEx1Iflnj1vbAL-zU");
//     })();

//     document.getElementById("bookingForm").addEventListener("submit", function (e) {

//         e.preventDefault();

//         let checkin = document.getElementById("checkin").value;
//         let checkout = document.getElementById("checkout").value;
//         let msg = document.getElementById("bookingMsg");
//         let btn = document.getElementById("bookBtn");

//         msg.innerHTML = "";

//         /* Date validation */

//         if (checkout <= checkin) {
//             msg.innerHTML = "<span class='text-danger'>Checkout date must be after check-in date.</span>";
//             return;
//         }

//         /* Loading */

//         btn.innerText = "Sending...";
//         btn.disabled = true;

//         /* Send Email */

//         emailjs.sendForm(
//             "service_qod4a0a",
//             "template_okterdb",
//             this,
//             "vEx1Iflnj1vbAL-zU"
//         )

//             .then(function () {

//                 msg.innerHTML = "<span class='text-success'>✅ Booking request sent successfully!</span>";
//                 document.getElementById("bookingForm").reset();

//                 btn.innerText = "Book Now";
//                 btn.disabled = false;

//             })

//             .catch(function (error) {

//                 console.error("EmailJS Error:", error);

//                 msg.innerHTML = "<span class='text-danger'>❌ Failed to send booking request. Please try again.</span>";

//                 btn.innerText = "Book Now";
//                 btn.disabled = false;

//             });

//     });

// // Show booking time
// document.getElementById("bookingTime").value =
// new Date().toLocaleString();

// function calculateBooking(){

// let checkin = document.getElementById("checkin").value;
// let checkout = document.getElementById("checkout").value;
// let roomPrice = document.getElementById("roomType").value;

// if(checkin && checkout && roomPrice){

// let start = new Date(checkin);
// let end = new Date(checkout);

// let nights = (end - start) / (1000*60*60*24);

// if(nights > 0){

// document.getElementById("nights").value = nights;

// let total = nights * roomPrice;

// document.getElementById("totalPrice").value = "₹ " + total;

// }

// }

// }

// document.getElementById("checkin").addEventListener("change",calculateBooking);
// document.getElementById("checkout").addEventListener("change",calculateBooking);
// document.getElementById("roomType").addEventListener("change",calculateBooking);









document.addEventListener("DOMContentLoaded", function () {

    emailjs.init("vEx1Iflnj1vbAL-zU");

    const form = document.getElementById("bookingForm");
    const msg = document.getElementById("bookingMsg");
    const btn = form.querySelector("button");

    const checkin = document.getElementById("checkin");
    const checkout = document.getElementById("checkout");
    const roomType = document.getElementById("roomType");
    const nightsInput = document.getElementById("nights");
    const priceInput = document.getElementById("totalPrice");

    /* Show booking time */

    document.getElementById("bookingTime").value =
        new Date().toLocaleString();

    /* Calculate nights and price */

    function calculateBooking() {

        let start = new Date(checkin.value);
        let end = new Date(checkout.value);
        let roomPrice = roomType.value;

        if (checkin.value && checkout.value && roomPrice) {

            let nights = (end - start) / (1000 * 60 * 60 * 24);

            if (nights > 0) {

                nightsInput.value = nights;

                let total = nights * roomPrice;

                priceInput.value = total; // only number for email
            }
        }
    }

    checkin.addEventListener("change", calculateBooking);
    checkout.addEventListener("change", calculateBooking);
    roomType.addEventListener("change", calculateBooking);

    /* Submit form */

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        msg.innerHTML = "";

        if (checkout.value <= checkin.value) {

            msg.innerHTML =
                "<span class='text-danger'>Checkout date must be after check-in date</span>";
            return;
        }

        btn.innerText = "Sending...";
        btn.disabled = true;

        emailjs.sendForm(
            "service_qod4a0a",
            "template_okterdb",
            this
        )

            .then(function () {

                msg.innerHTML =
                    "<span class='text-success'>✅ Booking request sent successfully!</span>";

                form.reset();

                nightsInput.value = "";
                priceInput.value = "";

                btn.innerText = "Book Now";
                btn.disabled = false;

            })

            .catch(function (error) {

                console.log(error);

                msg.innerHTML =
                    "<span class='text-danger'>❌ Failed to send booking request</span>";

                btn.innerText = "Book Now";
                btn.disabled = false;

            });

    });

});
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

counter.innerText = "0";

const updateCounter = () => {

const target = +counter.getAttribute("data-target");
const c = +counter.innerText;

const increment = target / 200;

if(c < target){

counter.innerText = Math.ceil(c + increment);
setTimeout(updateCounter,10);

}
else{
counter.innerText = target;
}

};

updateCounter();

});