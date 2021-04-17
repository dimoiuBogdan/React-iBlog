import { useState } from "react";

import HomepagePost from "../Section Elements/HomepagePost";

const HomepagePosts = () => {
  const [homepagePosts, setHomepagePosts] = useState([
    {
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftokeneo.com%2Fuploads%2F2020%2F04%2Fbitcoin-btc-10.jpg&f=1&nofb=1",
      title: "What is Bitcoin?",
      content: `Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto. The currency began use in 2009 when its implementation was released as open-source software. Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries. Transactions are verified by network nodes through cryptography and recorded in a public distributed ledger called a blockchain. Bitcoins are created as a reward for a process known as mining. They can be exchanged for other currencies, products, and services, but the real-world value of the coins is extremely volatile. Research produced by the University of Cambridge estimated that in 2017, there were 2.9 to 5.8 million unique users using a cryptocurrency wallet, most of them using bitcoin`,
      tags: ["Crypto", "Bitcoin", "Currency", "Future"],
      date: "04/03/2021",
      author: "Bogdan",
    },
    {
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.crypto-facile.fr%2Fwp-content%2Fuploads%2F2017%2F12%2FEthereum-la-crypto-qui-perce.png&f=1&nofb=1",
      title: "What is Etherum?",
      content: `Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether is the native cryptocurrency of the platform. It is the second-largest cryptocurrency by market capitalization, after Bitcoin. Ethereum is the most actively used blockchain. Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether is the native cryptocurrency of the platform. It is the second-largest cryptocurrency by market capitalization, after Bitcoin. Ethereum is the most actively used blockchain`,
      tags: ["Crypto", "Bitcoin", "Currency", "Future"],
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
      tags: ["Crypto", "Bitcoin", "Currency", "Future"],
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
