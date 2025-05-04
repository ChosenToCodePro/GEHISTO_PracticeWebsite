const topicBoxes = document.getElementsByClassName('topic');

for (let i = 0; i < topicBoxes.length; i++) {
    const topicBox = topicBoxes[i];
    topicBox.addEventListener('click', function() {
        this.classList.toggle('expanded');
        console.log(this);
    });
}

const childButton = document.querySelector('.child');
const parentDiv = document.getElementById('parent');

childButton.addEventListener('click', function() {
    parentDiv.classList.toggle('parent-active');
});