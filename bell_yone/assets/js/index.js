
document.getElementById('toggleButton').addEventListener('click', function () {
    let moreContent = document.getElementById('moreContent');
    let isCollapsed = moreContent.classList.contains('show');

    if (isCollapsed) {
        this.innerText = 'Read More';
    } else {
        this.innerText = 'Read Less';
    }
});
