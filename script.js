document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });

    
    function openPopup() {
        document.getElementById("appointmentPopup").style.display = "flex";
        document.body.classList.add("popup-active"); 
    }

    
    function closePopup() {
        document.getElementById("appointmentPopup").style.display = "none";
        document.body.classList.remove("popup-active"); 
    }

    
    document.querySelectorAll(".appointmentButton").forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            openPopup();
        });
    });

    
    document.querySelector(".close").addEventListener("click", function(event) {
        event.preventDefault();
        closePopup();
    });
});
