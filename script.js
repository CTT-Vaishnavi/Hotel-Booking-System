    (function () {
        emailjs.init("vEx1Iflnj1vbAL-zU");
    })();

    document.getElementById("bookingForm").addEventListener("submit", function (e) {

        e.preventDefault();

        let checkin = document.getElementById("checkin").value;
        let checkout = document.getElementById("checkout").value;
        let msg = document.getElementById("bookingMsg");
        let btn = document.getElementById("bookBtn");

        msg.innerHTML = "";

        /* Date validation */

        if (checkout <= checkin) {
            msg.innerHTML = "<span class='text-danger'>Checkout date must be after check-in date.</span>";
            return;
        }

        /* Loading */

        btn.innerText = "Sending...";
        btn.disabled = true;

        /* Send Email */

        emailjs.sendForm(
            "service_qod4a0a",
            "template_okterdb",
            this,
            "vEx1Iflnj1vbAL-zU"
        )

            .then(function () {

                msg.innerHTML = "<span class='text-success'>✅ Booking request sent successfully!</span>";
                document.getElementById("bookingForm").reset();

                btn.innerText = "Book Now";
                btn.disabled = false;

            })

            .catch(function (error) {

                console.error("EmailJS Error:", error);

                msg.innerHTML = "<span class='text-danger'>❌ Failed to send booking request. Please try again.</span>";

                btn.innerText = "Book Now";
                btn.disabled = false;

            });

    });

