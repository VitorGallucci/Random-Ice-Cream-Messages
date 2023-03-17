function generateIceCreamMessage() {
    const flavors = ['vanilla', 'chocolate', 'strawberry', 'mint chocolate chip', 'cookie dough', 'rocky road', 'butter pecan', 'coffee', 'cherry', 'peanut butter cup'];
    const toppings = ['hot fudge', 'caramel', 'whipped cream', 'sprinkles', 'nuts', 'chocolate chips', 'marshmallows', 'cherries', 'candy bits'];
    const phrases = [
      `Have you tried ${flavors[Math.floor(Math.random() * flavors.length)]} ice cream with ${toppings[Math.floor(Math.random() * toppings.length)]} on top? So delicious!`,
      `I just had a scoop of ${flavors[Math.floor(Math.random() * flavors.length)]} ice cream and it was heavenly.`,
      `When it comes to ice cream, ${flavors[Math.floor(Math.random() * flavors.length)]} is always a solid choice.`,
      `I'm in the mood for something sweet. Maybe some ${flavors[Math.floor(Math.random() * flavors.length)]} ice cream?`,
      `Nothing beats a classic sundae with ${flavors[Math.floor(Math.random() * flavors.length)]} ice cream and all the toppings.`,
      `If you're ever feeling down, just remember that there's always ice cream. And ${flavors[Math.floor(Math.random() * flavors.length)]} is always a pick-me-up.`,
      `I'm a firm believer that ${flavors[Math.floor(Math.random() * flavors.length)]} ice cream should be its own food group.`,
      `Can we just take a moment to appreciate the beauty that is a perfectly scooped cone of ${flavors[Math.floor(Math.random() * flavors.length)]} ice cream?`,
      `If you had to choose just one ice cream flavor to eat for the rest of your life, what would it be? I think I'd have to go with ${flavors[Math.floor(Math.random() * flavors.length)]}.`,
      `I don't know about you, but I'm always in the mood for some good old-fashioned ${flavors[Math.floor(Math.random() * flavors.length)]} ice cream.`,
    ];
    return phrases[Math.floor(Math.random() * phrases.length)];
  }
  
  console.log(generateIceCreamMessage());
  