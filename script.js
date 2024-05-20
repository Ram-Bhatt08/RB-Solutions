document.addEventListener('DOMContentLoaded', function() {
    // Get links by class name
    let links = document.querySelectorAll('#h-right a');
    // Add click event listeners to each link
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior

            // Get the target section id from the clicked link's class
            let sectionId = link.classList[0].replace('one', 'section2')
                                                .replace('two', 'section3')
                                                .replace('three', 'section4')
                                                .replace('four', 'section6')
                                                .replace('five', 'section7');
            // Scroll to the target section
            let targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
