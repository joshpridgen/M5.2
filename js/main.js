// Select elements
const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

// Initially hide the comments section
commentWrapper.style.display = 'none';

// Ensure the button is focusable
showHideBtn.setAttribute('tabindex', '0');

// Toggle comments visibility on click
showHideBtn.addEventListener('click', toggleComments);

// Allow keyboard activation with Enter key
showHideBtn.addEventListener('keydown', function(event) {
  if (event.key === 'Enter' || event.key === ' ') {
    toggleComments();
  }
});

function toggleComments() {
  let showHideText = showHideBtn.textContent;
  if (showHideText === 'Show comments') {
    showHideBtn.textContent = 'Hide comments';
    commentWrapper.style.display = 'block';
  } else {
    showHideBtn.textContent = 'Show comments';
    commentWrapper.style.display = 'none';
  }
}

// Functionality for adding a new comment
const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.onsubmit = function(e) {
  e.preventDefault();
  submitComment();
};

function submitComment() {
  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');
  const nameValue = nameField.value;
  const commentValue = commentField.value;

  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;

  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);
  list.appendChild(listItem);

  nameField.value = '';
  commentField.value = '';
}