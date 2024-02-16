const $tabContainer = document.querySelector('.tab-container');
const $tabElements = document.querySelectorAll('.tab');
const $viewElements = document.querySelectorAll(
  '.view'
) as NodeListOf<HTMLElement>;

if (!$tabContainer) throw new Error('No tab container?!');
if (!$tabElements) throw new Error('No tab elements?!');
if (!$viewElements) throw new Error('No view elements?!');

$tabContainer.addEventListener('click', (event) => {
  const eventTarget = event.target as HTMLDivElement;
  if (eventTarget.matches('.tab')) {
    for (const tab of $tabElements) {
      if (tab === eventTarget) {
        tab.setAttribute('class', 'tab active');
      } else {
        tab.setAttribute('class', 'tab');
      }
    }
    const dataView = eventTarget.dataset.view;
    for (const view of $viewElements) {
      if (view.dataset.view === dataView) {
        view.setAttribute('class', 'view');
      } else {
        view.setAttribute('class', 'view hidden');
      }
    }
  }
});
