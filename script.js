document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('nav ul li a');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
            event.preventDefault();

            tabs.forEach(item => item.classList.remove('active'));
            tab.classList.add('active');

            contents.forEach(content => content.classList.remove('active'));
            document.getElementById(tab.dataset.tab).classList.add('active');
        });
    });
});
