export const selectors = {
	// user to chat with selector. We will "click" this selector so that chat window of
	// specified user is opened. XXX will be replaced by actual user.
	userChat: '[title="XXX"]',
	
	// search box to find users
	searchBox: "#side [contenteditable]",
	
	// textbox selector where message will be typed
	chatInput: '[aria-placeholder="Type a message"]',
	
	// cancel search
	cancelSearch: 'button[aria-label="Cancel search"]',
};