const TWEETS = [
  {
    date: "02/17/2024",
    userType: "Influencer / Content Creator",
    username: "gogoDiego",
    userhandle: "@gogodiegocrypto",
    tweetContext: "Hype",
    tweetLink: "https://twitter.com/gogoDiegocrypto/status/1758846917851677142",
    meatDetails:
      "People who are new to Cosmos don't truly understand the dominating crushing nature of Osmosis",
    profilePicture:
      "https://pbs.twimg.com/profile_images/1479260227149176833/pO5uOqa6_400x400.jpg",
  },
  {
    date: "02/17/2024",
    userType: "Analytics Provider",
    username: "PYOR | Power Your Own Research",
    userhandle: "@pyorxyz",
    tweetContext: "Data Hype",
    tweetLink: "https://twitter.com/pyorxyz/status/1758762430673691008",
    meatDetails:
      "User Retention\nIf 100 new addresses used these dexs.... how many would remain?",
    profilePicture:
      "https://pbs.twimg.com/profile_images/1760251748550418432/d80icNgj_400x400.jpg",
  },
  {
    date: "01/18/2024",
    userType: "Project Team Member",
    username: "Abhitej | Filament",
    userhandle: "@abhitejxyz",
    tweetContext: "OSL Praise",
    tweetLink: "https://twitter.com/abhitejxyz/status/1747905399284781222",
    meatDetails:
      "Here's my experience: Best support experience in whole of crypto - better than any CEX out there.",
    profilePicture:
      "https://pbs.twimg.com/profile_images/1629489391713374208/jwVv332X_400x400.jpg",
  },
  {
    date: "1/9/2024",
    userType: "Project Team Member",
    username: "L1am | Stakecito",
    userhandle: "@L1am_Crypto",
    tweetContext: "Osmosis Praise",
    tweetLink: "https://x.com/L1am_Crypto/status/1744652907113320468?s=20",
    meatDetails:
      "Osmosis is:\n✔️ Layer-1  blockchain ecosystem\n✔️ Best DEX in Cosmos\n⏳ Interface for the Interchain (Asset Hub)\n\nOsmosis is coming for EVERYTHING",
    profilePicture:
      "https://pbs.twimg.com/profile_images/1756102380951597056/G_J5BNcp_400x400.jpg",
  },
  {
    date: "7/6/2023",
    userType: "Project Team Member",
    username: "Zaki Manian",
    userhandle: "@zmanian",
    tweetContext: "Osmosis Upgrade",
    tweetLink: "https://twitter.com/zmanian/status/1676899506598674432",
    meatDetails: "V16 giant leap",
    profilePicture:
      "https://pbs.twimg.com/profile_images/1733325696628555776/dofhVVMD_400x400.jpg",
  },
  {
    date: "10/3/2023",
    userType: "Media / Analyst",
    username: "David (EffortCapital)",
    userhandle: "@effortcapital",
    tweetContext: "Osmosis Praise",
    tweetLink: "https://x.com/EffortCapital/status/1709122521889382766?s=20",
    meatDetails:
      "Osmosis is ahead of their time. Top 5 builders in crypto…maybe higher.",
    profilePicture:
      "https://pbs.twimg.com/profile_images/1772459443487113219/Z4xOvib1_400x400.jpg",
  },
  {
    date: "11/8/2023",
    userType: "Project Team Member",
    username: "eye-opening trix🃏",
    userhandle: "@brane_trix",
    tweetContext: "UI Praise",
    tweetLink: "https://x.com/brane_trix/status/1722287331028177306?s=20",
    meatDetails: "The Osmosis UI is really gorgeous",
    profilePicture:
      "https://pbs.twimg.com/profile_images/1775603714176204800/3P_WWIoH_400x400.jpg",
  },
  {
    date: "12/4/2023",
    userType: "Influencer / Content Creator",
    username: "Cryptocito | Cosmos",
    userhandle: "@Cryptocito",
    tweetContext: "Osmosis Praise",
    tweetLink: "https://x.com/Cryptocito/status/1731606156462735631?s=20",
    meatDetails: "ATOM is Money • Osmosis the DeFi Hub",
    profilePicture:
      "https://pbs.twimg.com/profile_images/1591066906961870854/4KkBTXic_400x400.jpg",
  },
  {
    date: "5/2/2023",
    userType: "Project / App",
    username: "Pyth Network",
    userhandle: "@PythNetwork",
    tweetContext: "Osmosis Praise",
    tweetLink: "https://x.com/PythNetwork/status/1664663117366972416?s=20",
    meatDetails:
      "Osmosis is the premier cross-chain DeFi hub ⚛️  As the liquidity center and primary trading venue of Cosmos, Osmosis is the access point for the world of appchains  More than 50 blockchains are currently connected, with dozens more in development— @dYdX  Chain, or  @Injective_",
    profilePicture:
      "https://pbs.twimg.com/profile_images/1742879175751376897/VeGmRg3L_400x400.jpg",
  },
  {
    date: "12/3/2023",
    userType: "Project / App",
    username: "UX Chain",
    userhandle: "@ux_xyz",
    tweetContext: "Osmosis Praise",
    tweetLink: "https://x.com/ux_xyz/status/1731392488139808911?s=20",
    meatDetails:
      "No doubt that  @osmosiszone  is the most dominant DEX in  @cosmos",
    profilePicture:
      "https://pbs.twimg.com/profile_images/1729270723750092800/GfNf71Qd_400x400.jpg",
  },
  {
    date: "12/23/2023",
    userType: "Community Member",
    username: "Farmer| Yawp",
    userhandle: "@WordJizz",
    tweetContext: "Osmosis UX Praise",
    tweetLink: "https://twitter.com/WordJizz/status/1738966517503402352",
    meatDetails:
      "The way Milk Tia is fully integrated into osmosis is amazing.\n\nOsmosis is becoming the interchain App Store.",
    profilePicture:
      "https://pbs.twimg.com/profile_images/1756043141130420224/KqRsDusX_400x400.jpg",
  },
  {
    date: "12/16/2023",
    userType: "Project Team Member",
    username: "John Galt",
    userhandle: "@lurkaroundfind",
    tweetContext: "Osmosis Praise",
    tweetLink: "https://x.com/lurkaroundfind/status/1736023547481358505?s=20",
    meatDetails:
      "@OsmosisZone has established itself as the hub of the Celestia modular ecosystem.",
    profilePicture:
      "https://pbs.twimg.com/profile_images/1704562375867645952/zKq3QkGr_400x400.jpg",
  },
  {
    date: "8/1/2023",
    userType: "Media / Analyst",
    username: "David (EffortCapital)",
    userhandle: "@effortcapital",
    tweetContext: "OGP Praise",
    tweetLink: "https://x.com/EffortCapital/status/1686565377021534210?s=20",
    meatDetails:
      "I think Osmosis Grant Program has done a really good job funding things that are LONG TERM value accretive to Osmosis",
    profilePicture:
      "https://pbs.twimg.com/profile_images/1772459443487113219/Z4xOvib1_400x400.jpg",
  },
  {
    date: "12/25/2023",
    userType: "Validator / Community Member",
    username: "whitemarlin",
    userhandle: "@WhiteMarlin4",
    tweetContext: "Osmosis Praise",
    tweetLink: "https://x.com/WhiteMarlin4/status/1739476523441168453?s=20",
    meatDetails: "EIP 1559 on Osmosis is amazing",
    profilePicture:
      "https://pbs.twimg.com/profile_images/1776789293576372225/Yx-qIeSd_400x400.jpg",
  },
  {
    date: "12/5/2023",
    userType: "Validator / Community Member",
    username: "whitemarlin",
    userhandle: "@WhiteMarlin4",
    tweetContext: "Osmosis Praise",
    tweetLink: "https://x.com/WhiteMarlin4/status/1732179091095171405?s=20",
    meatDetails: "Every defi app should build on osmosis",
    profilePicture:
      "https://pbs.twimg.com/profile_images/1776789293576372225/Yx-qIeSd_400x400.jpg",
  },
  {
    date: "11/29/2023",
    userType: "Project Team Member",
    username: "L1am | Stakecito",
    userhandle: "@L1am_Crypto",
    tweetContext: "Osmosis Praise",
    tweetLink: "https://twitter.com/L1am_Crypto/status/1729902443591274991",
    meatDetails:
      "Osmosis is not just one of the most active projects by dev activity (see @cryptomanran's post below), it's also the most active Cosmos chain for\ngovernance activity EVERY SINGLE MONTH\n\n@osmosiszone keeps shipping. $OSMO 🧪",
    profilePicture:
      "https://pbs.twimg.com/profile_images/1756102380951597056/G_J5BNcp_400x400.jpg",
  },
  {
    date: "11/15/2023",
    userType: "Community Member",
    username: "Curious J",
    userhandle: "@Curious__J",
    tweetContext: "Osmosis Praise",
    tweetLink: "https://twitter.com/Curious__J/status/1724888476359795194",
    meatDetails:
      "Osmosis as the Liquidity Hub ( We can crop around this post )",
    profilePicture:
      "https://pbs.twimg.com/profile_images/1749321092299108352/VGetMVJ6_400x400.jpg",
  },
  {
    date: "9/19/2022",
    userType: "Community Member",
    username: "Curious J",
    userhandle: "@Curious__J",
    tweetContext: "Osmosis UX Praise",
    tweetLink: "https://twitter.com/Curious__J/status/1571728254939336704",
    meatDetails:
      "@osmosiszone has the best UI/UX in crypto hands down. I understand real yield is where the market is heading towards, but without attractive front ends, you won’t bring masses into web 3.\n\n$osmo did it right and it’s a pleasure to use each time. They even do holidays.",
    profilePicture:
      "https://pbs.twimg.com/profile_images/1749321092299108352/VGetMVJ6_400x400.jpg",
  },
  {
    date: "11/29/2023",
    userType: "Project Team Member",
    username: "L1am | Stakecito",
    userhandle: "@L1am_Crypto",
    tweetContext: "Governance Praise",
    tweetLink: "https://x.com/L1am_Crypto/status/1729902443591274991?s=20",
    meatDetails:
      "Osmosis is not just one of the most active projects by dev activity (see  @cryptomanran 's post below), it's also the most active Cosmos chain for governance activity EVERY SINGLE MONTH  @osmosiszone  keeps shipping. $OSMO 🧪",
    profilePicture:
      "https://pbs.twimg.com/profile_images/1756102380951597056/G_J5BNcp_400x400.jpg",
  },
  {
    date: "1/4/2022",
    userType: "Community Member",
    username: "krane",
    userhandle: "@0xkrane",
    tweetContext: "Osmosis Praise",
    tweetLink: "https://x.com/0xkrane/status/1478275699421110273?s=20",
    meatDetails:
      "Speaking of the UI, I think osmosis has the best in class UI/UX for a DEX. Everything is clear, concise and they also make IBC transfers to/from the Osmosis chain completely frictionless.",
    profilePicture:
      "https://pbs.twimg.com/profile_images/1538393165106819077/GK0ZKhjm_400x400.jpg",
  },
  {
    date: "2/3/2024",
    userType: "Community Member",
    username: "⚛️r0tat0",
    userhandle: "@AlexeyOnChain",
    tweetContext: "OSL Praise",
    tweetLink: "https://x.com/AlexeyOnChain/status/1753761508079575463?s=20",
    meatDetails:
      "This. This is the stuff that drives mass mainstream adoption. This is why osmosis has more users than any other chain in the IBC. This is why the Osmosis team is always intent on improving UI.  Ensure optimal user experience, you guarantee user retention. Simple as that.  Well done osmosis👏",
    profilePicture:
      "https://pbs.twimg.com/profile_images/1410368109286809600/Ny1YXt4u_400x400.png",
  },
  {
    date: "2/3/2024",
    userType: "Project / App",
    username: "x1k",
    userhandle: "@x1knet",
    tweetContext: "OSL Praise",
    tweetLink: "https://x.com/x1knet/status/1753790783516299658?s=20",
    meatDetails:
      "⚗️Great job Support Lab! Helping an average of over 48 cosmonauts, live, per day  🧑‍🚀🛰️🫶",
    profilePicture:
      "https://pbs.twimg.com/profile_images/1410368109286809600/Ny1YXt4u_400x400.png",
  },
  {
    date: "10/27/21",
    userType: "VC",
    username: "Charlie Noyes | Paradigm",
    userhandle: "@_charlienoyes",
    tweetContext: "Osmosis Raise",
    tweetLink:
      "https://x.com/_charlienoyes/status/1453435962520834050?s=46&t=xD3OvylAuyWd5if2X42bHg",
    meatDetails:
      "After 4+ yrs of collaboration and friendship with @sunnya97, we couldn't be more excited to back @osmosiszone.\n \nThey're leading the charge to bring IBC to market and build out the @cosmos ecosystem - as well as tackling fundamental problems, like MEV resistance and privacy.",
    profilePicture:
      "https://pbs.twimg.com/profile_images/1396905292265181184/6xVeO1dM_400x400.jpg",
  },
  {
    date: "5/28/23",
    userType: "Project Team Member",
    username: "Shane Vinatra | Stargaze",
    userhandle: "@shan3v",
    tweetContext: "OSL Praise",
    tweetLink: "https://twitter.com/shan3v/status/1663050995524304898",
    meatDetails:
      "What was your best moment in Cosmos so far? For me it was the Osmosis launch. Seeing IBC working for the first time with great UX was incredible.",
    profilePicture:
      "https://pbs.twimg.com/profile_images/1750984274444976128/p07Y7wxU_400x400.jpg",
  },
  {
    date: "6/29/21",
    userType: "Project Team Member",
    username: "Jae Kwon",
    userhandle: "@jaekwon",
    tweetContext: "Osmosis Team Praise",
    tweetLink: "https://twitter.com/jaekwon/status/1410040146574004227",
    meatDetails: "The #Osmosis team is cracked.",
    profilePicture:
      "https://pbs.twimg.com/profile_images/1772410398937165824/0eEf947Z_400x400.jpg",
  },
  {
    date: "3/12/24",
    userType: "Community Member",
    username: "Blanco",
    userhandle: "@wassieblanca",
    tweetContext: "Osmosis Praise",
    tweetLink: "https://twitter.com/wassieblanca/status/1767500157715697879",
    meatDetails: "the answer pretty simple;\n\nusers wanna trade on osmosis",
    profilePicture:
      "https://pbs.twimg.com/profile_images/1664632721367343108/eAFozSsR_400x400.jpg",
  },
  {
    date: "3/12/24",
    userType: "Community Member",
    username: "Mayor Ed Dantes",
    userhandle: "@crypto_mayorEd",
    tweetContext: "Osmosis Hub",
    tweetLink: "https://twitter.com/crypto_mayorEd/status/1767503159230890078",
    meatDetails: "because \n@osmosiszone\n is the HUB.",
    profilePicture:
      "https://pbs.twimg.com/profile_images/1759954638348931073/6KpCG-MO_400x400.jpg",
  },
];

export default TWEETS;
