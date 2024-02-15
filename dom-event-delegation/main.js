'use strict';
const $taskList = document.querySelector('.task-list');
if (!$taskList)
  throw new Error('What the heck! Where is our .task-List classed element??');
$taskList.addEventListener('click', (event) => {
  const eventTarget = event.target;
  console.log('event.target:', eventTarget);
  console.log('event.target.tagName:', eventTarget.tagName);
  if (eventTarget.tagName === 'BUTTON') {
    const closestTaskListItem = eventTarget.closest('.task-list-item');
    console.log('closest .task-list-item: ', closestTaskListItem);
    closestTaskListItem.remove();
  }
});
