import { useState } from "react";

import HomepagePost from "../Section Elements/HomepagePost";

const HomepagePosts = () => {
  const [homepagePosts, setHomepagePosts] = useState([
    {
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftokeneo.com%2Fuploads%2F2020%2F04%2Fbitcoin-btc-10.jpg&f=1&nofb=1",
      title: "What is Bitcoin?",
      content: `Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto. The currency began use in 2009 when its implementation was released as open-source software. Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries. Transactions are verified by network nodes through cryptography and recorded in a public distributed ledger called a blockchain. Bitcoins are created as a reward for a process known as mining. They can be exchanged for other currencies, products, and services, but the real-world value of the coins is extremely volatile. Research produced by the University of Cambridge estimated that in 2017, there were 2.9 to 5.8 million unique users using a cryptocurrency wallet, most of them using bitcoin`,
      tags: ["Crypto", "Bitcoin"],
      date: "04/03/2021",
      author: "Bogdan",
    },
    {
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.crypto-facile.fr%2Fwp-content%2Fuploads%2F2017%2F12%2FEthereum-la-crypto-qui-perce.png&f=1&nofb=1",
      title: "What is Etherum?",
      content: `Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether is the native cryptocurrency of the platform. It is the second-largest cryptocurrency by market capitalization, after Bitcoin. Ethereum is the most actively used blockchain. Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether is the native cryptocurrency of the platform. It is the second-largest cryptocurrency by market capitalization, after Bitcoin. Ethereum is the most actively used blockchain`,
      tags: ["Crypto", "Etherum"],
      date: "06/11/2021",
      author: "Bogdan",
    },
    {
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvelopert.com%2Fwp-content%2Fuploads%2F2016%2F03%2Freact.png&f=1&nofb=1",
      title: "Let's Learn React!",
      content: `Do you want to learn React and you don’t where to start? Don’t look for any other curated list of resources. Let’s learn React in 30 days.
        React is a JavaScript library to build user interfaces. It doesn’t do a lot of things. It renders elements on the screen. Period. React isn’t a Swiss-army knife framework full of functionalities.
        To learn React in 30 days, start learning to create components and understand the difference between props and state. Next, learn about hooks and how to style components. After that, learn about managing state with hooks. Don’t rush to use Redux from the beginning.`,
      tags: ["Coding", "React", "Web"],
      date: "14/04/2021",
      author: "Bogdan",
    },
    {
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-nQThhsJFkQ8%2FXwWBpqxjsjI%2FAAAAAAAAbO4%2Fu6Ww5axqnlMyxo3-6XRR7VCWdYsEXN6qACK4BGAsYHg%2Fs1734%2FVS.png&f=1&nofb=1",
      title: "Angular Or React?",
      content: `While it would be simple to dismiss the difference between Angular and React as one of frameworks and libraries, the truth is that most developers using React as a view library will also use other libraries in the React ecosystem to turn it into a complete framework. This is why React is often grouped with other JavaScript frameworks such as Angular and Vue.js. To truly understand the differences, it’s important to dive into the details.

      Angular is a full-fledged JavaScript framework written in TypeScript (a superset of JavaScript). Initially released by Google in 2016 as Angular 2, it’s a complete rewrite of the old reigning king of JavaScript development frameworks: AngularJS. The new Angular was designed to compete with React by embracing components while retaining the dependency injection (DI) and two-way data binding features Angular developers had come to love. 
      
      Standard features of Angular include:
      
      TypeScript
      Angular CLI
      Dependency injection
      Two-way data binding
      Routing with @angular/router
      Forms with @angular/forms
      XSS protection
      HTML templates
      Component CSS encapsulation
      React (also known as React.js or ReactJS) was initially released in 2013 as an open-source JavaScript library for rendering views. Instead of providing the model, view, and controller, like the old AngularJS, React is only the view. React popularized the components-based architecture for web and mobile development, allowing developers to choose how they wanted to manage state with other libraries and frameworks. React preferred to handle state management with libraries that encouraged working with immutable data and one-way data binding to achieve unidirectional data flow. 
      
      Standard features of React include:
      
      Virtual DOM (Document Object Model)
      JSX files
      XSS protection
      Functional components
      Basic state management with setState and Context API`,
      tags: ["Coding", "React", "Angular", "Web"],
      date: "14/04/2021",
      author: "Bogdan",
    },
    {
      image:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fs.marketwatch.com%2Fpublic%2Fresources%2FMWimages%2FMW-GQ255_tesla__ZG_20180918125524.jpg&f=1&nofb=1",
      title:
        "Should You Invest In Tesla Stocks? Let's See What The Charts Say!",
      content: `Tesla, Inc. is an American electric vehicle and clean energy company based in Palo Alto, California. Tesla's current products include electric cars, battery energy storage from home to grid scale, solar panels and solar roof tiles, as well as other related products and services. Tesla is ranked as the world's best-selling plug-in and battery electric passenger car manufacturer, with a market share of 16% of the plug-in segment and 23% of the battery electric segment 2020 sales. Through its subsidiary SolarCity, Tesla develops and is a major installer of solar photovoltaic systems in the United States. Tesla is also one of the largest global suppliers of battery energy storage systems, with 3 GWh of battery storage supplied in 2020. Founded in July 2003 by Martin Eberhard and Marc Tarpenning as Tesla Motors, the company's name is a tribute to inventor and electrical engineer Nikola Tesla. Elon Musk, who contributed most of the funding in the early days, has served as CEO since 2008. According to Musk, the purpose of Tesla is to help expedite the move to sustainable transport and energy, obtained through electric vehicles and solar power.`,
      tags: ["Stocks", "Tesla"],
      date: "14/04/2021",
      author: "Bogdan",
    },
    {
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.marketrealist.com%2Fbrand-img%2Fo0NEv1boV%2F0x0%2Fis-apple-stock-expected-to-rise-after-spring-loaded-event-1618544358399.jpg&f=1&nofb=1",
      title: "Apple Stocks And Its Dividends",
      content: `Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services. The company offers iPhone, a line of smartphones; Mac, a line of personal computers; iPad, a line of multi-purpose tablets; and wearables, home, and accessories comprising AirPods, Apple TV, Apple Watch, Beats products, HomePod, iPod touch, and other Apple-branded and third-party accessories. It also provides AppleCare support services; cloud services store services; and operates various platforms, including the App Store, that allow customers to discover and download applications and digital content, such as books, music, video, games, and podcasts. In addition, the company offers various services, such as Apple Arcade, a game subscription service; Apple Music, which offers users a curated listening experience with on-demand radio stations; Apple News+, a subscription news and magazine service; Apple TV+, which offers exclusive original content; Apple Card, a co-branded credit card; and Apple Pay, a cashless payment service, as well as licenses its intellectual property. The company serves consumers, and small and mid-sized businesses; and the education, enterprise, and government markets. It sells and delivers third-party applications for its products through the App Store. The company also sells its products through its retail and online stores, and direct sales force; and third-party cellular network carriers, wholesalers, retailers, and resellers. Apple Inc. was founded in 1977 and is headquartered in Cupertino, California.`,
      tags: ["Stocks", "Apple"],
      date: "14/04/2021",
      author: "Bogdan",
    },
  ]);

  return (
    <div className="flex items-center flex-wrap lg:w-4/5 w-full justfy-evenly">
      {homepagePosts.map((post, index) => (
        <HomepagePost post={post} key={index} />
      ))}
    </div>
  );
};

export default HomepagePosts;
