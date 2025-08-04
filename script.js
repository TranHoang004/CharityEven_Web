window.addEventListener('scroll', function() {
    const heroImage = document.querySelector('.hero-image h1');
    if (window.scrollY > 50) {
        heroImage.style.fontSize = '2em';
    } else {
        heroImage.style.fontSize = '4em';
    }
});

// Event details
function toggleDetails(id, button) {
    var element = document.getElementById(id);
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "table-row";
        button.textContent = "Hide Details";
    } else {
        element.style.display = "none";
        button.textContent = "Show Details";
    }
}
// CONTACT US
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('thankYouMessage').style.display = 'block';
    document.getElementById('contactForm').reset();
});

//Form visitor
function validateForm() {
    var firstName = document.forms["enquiryForm"]["visitor-first-name"].value;
    var lastName = document.forms["enquiryForm"]["visitor-last-name"].value;
    var birthday = document.forms["enquiryForm"]["Your Birthday"].value;
    var email = document.forms["enquiryForm"]["personal-email"].value;
    var phone = document.forms["enquiryForm"]["mobile-phone"].value;
    var countryCode = document.forms["enquiryForm"]["country-code"].value;
    var notes = document.forms["enquiryForm"]["notes"].value;

    if (firstName == "" || lastName == "" || birthday == "" || email == "" || phone == "") {
        alert("PLEASE ENTER THE REQUIRED VALUES!");
        return false;
    } else {
        document.getElementById("output").innerHTML = `
            <p>Congratulations...!!!</p>
            <p>Name : ${firstName} ${lastName}</p>
            <p>Birthday : ${birthday}</p>
            <p>Email : ${email}</p>
            <p>Phone : ${countryCode} ${phone}</p>
            <p>Notes : ${notes}</p>
        `;
        return false;
    }
    
}document.getElementById("enquiryForm").addEventListener("reset", function() {
    document.getElementById("output").innerHTML = "";
  });

//register
function showForm(eventName) {
    document.getElementById('registration-form').style.display = 'block';
    document.getElementById('event').value = eventName;
    document.getElementById('registration-form').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function hideForm() {
    document.getElementById('registration-form').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function submitForm(event) {
    event.preventDefault();
    const firstName = document.getElementById('visitor-first-name').value;
    const lastName = document.getElementById('visitor-last-name').value;
    const birthday = document.getElementById('Your Birthday').value;
    const email = document.getElementById('personal-email').value;
    const countryCode = document.getElementById('country-code').value;
    const phone = document.getElementById('mobile-phone').value;
    const eventName = document.getElementById('event').value;
    const notes = document.getElementById('notes').value;

    if (firstName === "" || lastName === "" || birthday === "" || email === "" || phone === "" || eventName === "") {
        alert("PLEASE ENTER THE REQUIRED VALUES!");
        return false;
    } else {
        document.querySelector('form').reset();
        document.getElementById("output").innerHTML = `
            <p>Congratulations...!!!</p>
            <p>Event : ${eventName}</p>
            <p>Name : ${firstName} ${lastName}</p>
            <p>Birthday : ${birthday}</p>
            <p>Email : ${email}</p>
            <p>Phone : ${countryCode} ${phone}</p>
            <p>Notes : ${notes}</p>
        `;
        document.getElementById('registration-form').style.display = 'none';
        document.getElementById('output').style.display = 'block';
        document.getElementById('overlay').style.display = 'none';
    }
}
document.getElementById('registration-form').addEventListener('submit', submitForm);
document.getElementById('registration-form').addEventListener('reset', function() {
document.getElementById('output').innerHTML = '';
});

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.hash === '#registration-form') {
        const form = document.getElementById('registration-form');
        if (form) {
            setTimeout(function() {
                form.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }
});