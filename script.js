const form = document.getElementById("contactForm");
        const output = document.getElementById("submittedData");

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                output.innerHTML = `
                <div class="alert alert-danger">
                    Please fill all fields.
                </div>
            `;
                return;
            }

            output.innerHTML = `
            <div class="alert alert-success">
                <h5>Submitted Data:</h5>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            </div>
        `;

            form.reset();
        });

        // Smooth Scroll
        document.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", function (e) {
                let targetId = this.getAttribute("href");
                if (targetId.startsWith("#")) {
                    e.preventDefault();
                    document.querySelector(targetId).scrollIntoView({
                        behavior: "smooth"
                    });
                }
            });
        });