chrome.browserAction.onClicked.addListener(() => {
	chrome.tabs.query(
		{ currentWindow: true, active: true },
		function (tab) {
			let activeTab = new URL(tab[0].url);
			if (activeTab.protocol == "https:") {
				chrome.tabs.update({
					url: `https://12ft.io/${activeTab.href}`,
				});
			}
		}
	);
});
