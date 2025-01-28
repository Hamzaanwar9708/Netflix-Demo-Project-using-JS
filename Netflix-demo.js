const tabItems = document.querySelectorAll('.tab-item');
const tabcontentItems = document.querySelectorAll('.tab-content-item');

function selectitem(e) {
    removeborder();
    removeshow1();
    this.classList.add('tab-border');
    const tabContentId = `#${this.id}-content`;
    const tabContentItem = document.querySelectorAll(tabContentId);

    // Add 'show1' class to each matched tab content item
    tabContentItem.forEach(item => item.classList.add('show1'));
}

function removeborder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeshow1() {
    tabcontentItems.forEach(item => item.classList.remove('show1'));
}

tabItems.forEach(item => item.addEventListener('click', selectitem));