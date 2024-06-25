const tab = document.querySelectorAll('.tab'); //Creates a NodeList w 3 items
const panels = document.querySelectorAll('.panel');

// Tabs Menu Event Listener
tabs.forEach((tab) => tab.addEventListener('click', onTabClick));

function onTabClick(e) { 
    // Deactivates All Tabs
    tabs.forEach((tab) => {
        tab.children[0].classList.remove(
            'border-softRed',
            'border-b-4',
            'md:border-b-0'
        )
    });

    // Hide All Panels
    panels.forEach((panel) => panel.classList.add('hidden'));

    // Activate New Tab & Panel based on Target
    e.target.classList.add('border-softRed', 'border-b-4');

    const classString = e.target.getAttribute('data-target');
    document.getElementById('panels')
        .getElementsByClassName(classString)[0]
        .classList.remove('hidden');

};