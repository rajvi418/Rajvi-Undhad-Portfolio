document.addEventListener('DOMContentLoaded', function () {
    // Get all tab buttons and panes
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');

    // Add click event listeners to each tab button
    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Get the tab ID from data attribute
            const tabId = this.getAttribute('data-tab');

            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Add active class to clicked button and corresponding pane
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
});