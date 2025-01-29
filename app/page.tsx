export default function About() {
  return (
    <main className="mb-8 mt-[147px] flex w-full flex-col sm:mb-5.5 sm:mt-[140px] md:mb-14 md:mt-[124px] xl:mt-[151px] 2xl:mb-18 2xl:mt-[132px]">
      <h1 className="mb-10 font-poppins text-4xl font-bold">
        About Osmosis and Osmurica
      </h1>

      <section className="mb-5">
        <header className="mb-5">
          <h2 className="font-poppins text-2xl font-bold">Osmosis</h2>
        </header>

        <p className="text-light text-alpha-60">
          Osmosis is the leading cross-chain decentralized finance (DeFi) hub in
          the Cosmos ecosystem. Osmosis is connected to over 140 different
          blockchain networks via the Inter-Blockchain Communication (IBC)
          protocol, and other native and third-party integrations.
          <br />
          <br />
          Osmosis enables seamless token trading across multiple blockchains
          without intermediaries, serving as a global liquidity hub for digital
          assets. Its community-centric governance allows stakeholders to
          influence protocol upgrades and ecosystem developments. The platform
          prioritizes user experience and security with advanced features to
          protect user assets and data, ensuring a safe trading environment.
        </p>
      </section>

      <section className="mb-5">
        <header className="mb-5">
          <h4 className="font-poppins text-xl font-bold">
            Metrics and Features:
          </h4>
        </header>

        <ul className="text-light flex list-inside list-decimal flex-col gap-2 pl-10 text-base">
          <li>
            <strong>Trading Volume: </strong>
            <span className="text-alpha-60">
              The Osmosis DEX has facilitated over $38 billion in total trading
              volume to date, reinforcing its status as a leading platform in
              the DeFi sector.
            </span>
          </li>
          <li>
            <strong>DEX Screener Integration: </strong>
            <span className="text-alpha-60">
              Integration with DEX Screener has significantly boosted the
              platform&#39;s visibility, allowing users to track and gain deeper
              insights into the assets supported on Osmosis DEX.
            </span>
          </li>
          <li>
            <strong>1-Click Trading via Smart Accounts: </strong>
            <span className="text-alpha-60">
              Osmosis offers 1-Click Trading and Smart Account functionality,
              simplifying the user experience and making DeFi more accessible.
            </span>
          </li>
          <li>
            <strong>Continuous Technological Advancements: </strong>
            <span className="text-alpha-60">
              The platform is committed to integrating cutting-edge technologies
              to enhance security, functionality, and user experience.
            </span>
          </li>
          <li>
            <strong>Exceptional Revenue Growth: </strong>
            <span className="text-alpha-60">
              The Osmosis protocol revenue soared to over $10.5 million in 2024,
              a remarkable increase from the approximately $3 million recorded
              in 2023, representing more than a threefold year-over-year growth.
            </span>
          </li>
          <li>
            <strong>Significant Transaction Achievement: </strong>
            <span className="text-alpha-60">
              Osmosis has processed more than 300 million total transactions
              since its inception, highlighting the platform&#39;s active
              engagement and extensive user participation.
            </span>
          </li>
        </ul>
      </section>

      <section className="mb-5">
        <header className="mb-5">
          <h5 className="font-poppins text-xl font-bold">Structure</h5>
        </header>

        <p className="text-light text-alpha-60">
          The <strong className="text-white-full">Osmosis Foundation</strong>{" "}
          serves as the primary entity powering the Osmosis decentralized
          exchange (DEX), driving its mission and strategic direction. The
          Foundation plays a crucial role in overseeing the technological and
          developmental aspects of the platform, ensuring continued innovation
          and growth.
          <br />
          <br />
          <strong className="text-white-full">Osmurica</strong> plays a crucial
          role in driving the future success of Osmosis by providing essential
          engineering and operational support to the Osmosis Foundation. In
          addition, Osmurica emphasizes strategic partnerships, technological
          upgrades, and community engagement to ensure the platform&#39;s
          continued growth and relevance.
          <br />
          <br />
          Together, Osmosis Foundation and Osmurica exemplify a forward-thinking
          approach to blockchain technology, underscoring a commitment to
          creating value and accessibility for users across the globe.
        </p>
      </section>
    </main>
  );
}
