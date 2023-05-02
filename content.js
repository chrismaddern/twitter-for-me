function hideForYouTab() {
  const tabs = document.querySelectorAll('a[role="tab"]');
  let followingTab = null;

  for (const tab of tabs) {
    const tabText = tab.innerText.toLowerCase().trim();
    if (tabText === 'for you') {
      tab.parentElement.style.display = 'none';
    } else if (tabText === 'following') {
      followingTab = tab;
    }
  }

  if (followingTab) {
    selectFollowingTab(followingTab);
  }
}

function selectFollowingTab(followingTab) {
  // Check if the 'Following' tab is already selected
  if (followingTab.getAttribute('aria-selected') === 'true') {
    return;
  }

  // Trigger a click event to select the 'Following' tab
  followingTab.click();
}

// Wait for the page to load
window.addEventListener('load', () => {
  hideForYouTab();
});

// Listen for changes to the DOM to handle dynamic content
const observer = new MutationObserver(hideForYouTab);
observer.observe(document.body, { childList: true, subtree: true });
