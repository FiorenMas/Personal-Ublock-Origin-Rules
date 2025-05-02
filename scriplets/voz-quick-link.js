voz-quick-link.js text/javascript
(function() {
    const buttons = [
        { name: 'F17', url: 'https://voz.vn/f/chuyen-tro-linh-tinh%E2%84%A2.17/' },
        { name: 'F33', url: 'https://voz.vn/f/%C4%90iem-bao.33/' },
    ];

    function addButtonsToNav() {
        const navList = document.querySelector('.p-nav-list');
        buttons.forEach(buttonData => {
            const listItem = document.createElement('li');
            const button = document.createElement('a');
            button.href = buttonData.url;
            button.textContent = buttonData.name;
            button.className = 'p-navEl-link';
            listItem.appendChild(button);
            navList.appendChild(listItem);
        });
    }

    function createNavItem(button) {
        const navItem = document.createElement('li');
        const linkHolder = document.createElement('div');
        linkHolder.className = 'offCanvasMenu-linkHolder';
        linkHolder.classList.add('vozQuickNav');
        const link = document.createElement('a');
        link.href = button.url;
        link.className = 'p-navEl-link p-navEl-link--splitMenu offCanvasMenu-link';
        link.textContent = button.name;
        linkHolder.appendChild(link);
        navItem.appendChild(linkHolder);
        return navItem;
    }

    function addCustomButtonsToOffCanvasMenu() {
        const navSection = document.querySelector('.js-offCanvasNavTarget');
        if (!navSection) return;
        const menuList = navSection.querySelector('.offCanvasMenu-list');
        if (!menuList) return;
        if (document.querySelector('.vozQuickNav')) return;
        buttons.forEach(button => {
            const navItem = createNavItem(button);
            menuList.appendChild(navItem);
        });
    }

    function watchForMenu() {
        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.type === 'childList' || mutation.type === 'attributes') {
                    const navSection = document.querySelector('.js-offCanvasNavTarget');
                    if (navSection && !document.querySelector('.vozQuickNav')) {
                        addCustomButtonsToOffCanvasMenu();
                    }
                }
            });
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['class']
        });
    }
    function init() {
        addButtonsToNav();
        const navSection = document.querySelector('.js-offCanvasNavTarget');
        if (navSection && !document.querySelector('.vozQuickNav')) {
            addCustomButtonsToOffCanvasMenu();
        }
        watchForMenu();
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
