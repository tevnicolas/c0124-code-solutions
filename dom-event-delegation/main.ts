const $taskList = document.querySelector('.task-list');

if (!$taskList)
  throw new Error('What the heck! Where is our .task-List class element??');

$taskList.addEventListener('click', (event: Event) => {
  const eventTarget = event.target as HTMLElement;
  console.log('event.target:', eventTarget);
  console.log('event.target.tagName:', eventTarget.tagName);

  if (eventTarget.tagName === 'BUTTON') {
    const closestTaskListItem = eventTarget.closest(
      '.task-list-item'
    ) as HTMLElement;
    console.log('closest .task-list-item: ', closestTaskListItem);
    closestTaskListItem.remove();
  }
});
