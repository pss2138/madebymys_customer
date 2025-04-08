const welcomeIntro = {
  0: 'Welcome in, seongsu!',
  //   1: only if first time making order (if more than one pending order saved, don't show it)
  1: 'I believe it is your first time. My name is "Mys", owner of the store.',
  2: 'Here is the nails set you wanted. Feel free to look around!',
  //  3: "I'm Ready!" Button pressed
  3: "Okay! Let's find the perfect nails just for you!",
};

const sizing = {
  0: "Let's check our size first.",
  // 1: if no character.size saved
  1: 'It looks like your fisrt time sizing your nails.',
  2: "Let's check out your nails size. Here's the size guide!",
  3: 'It looks like we already have your nails size. Would you like to use it?',
  // 3: If press "No", go to 2. If press "Yes", show characters.size modal to choose which character's size to select.
};

const options = {
  0: "Now is the fun part! Let's choose options exactly how you want.",
  // 0: (5 nails prototype on bottom screen) show nails full option
  // - seller's fist option index already selected
  // - option buttons on top (If longer than 1 row, possible to expand/fold option box on top screen overlapping ChatBox)
  1: 'Are these options what you wanted?',
  // "yes" - go to checkout. "no" - go to option selection again
};

const checkout = {
  0: 'Now we made your perfect nails set!',
  1: 'Shall we checkout, or add to cart for now?',
  // "checkout" - go to address(Modal - checkout process start). "cart" - go to ProductsListPage + Cart icon in Navbar adding +1 badge with blinking effect
};

const address = {
  0: 'Where can I send your custom nails?',
  // doesn't matter if address saved or not. If no address saved, just + button will lead the user to add a new address.
};

const orderSuccess = {
  0: 'Thank you for the order! I and my team will do our best to fit your expectation.',
  1: 'For your better order experience next time, your precious data has been securely saved!',
  2: 'Would you like to see the order details that you just made?',
  // 2: "yes" - go to MyOrdersPage, "I want to check other nails" - go to ProductOrdersPage
};
