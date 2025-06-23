export default function About() {
  return (
    <main className="mb-8 mt-[147px] flex w-full flex-col sm:mb-5.5 sm:mt-[140px] md:mb-14 md:mt-[124px] xl:mt-[151px] 2xl:mb-18 2xl:mt-[132px]">
      <h1 className="mb-10 font-poppins text-4xl font-bold">
        About Osmurica Inc. and Osmosis
      </h1>

      <section className="mb-5">
        <header className="mb-5">
          <h2 className="font-poppins text-2xl font-bold">Osmurica Inc.</h2>
        </header>

        <p className="text-light text-alpha-60">
          Osmurica Inc. is the engineering and operations partner behind the
          Osmosis decentralized exchange (DEX). The company provides day-to-day
          development, DevOps, security audits, strategic partnerships and
          community programs that keep the platform running smoothly and
          expanding its reach.
        </p>
      </section>

      <section className="mb-5">
        <header className="mb-5">
          <h2 className="font-poppins text-2xl font-bold">Osmosis</h2>
        </header>

        <p className="text-light text-alpha-60">
          Osmosis is the leading cross-chain decentralized-finance hub in the
          Cosmos ecosystem. Using the Inter-Blockchain Communication (IBC)
          protocol and other bridges, it connects with more than 140 blockchain
          networks and enables token swaps across chains without intermediaries.
          Community-centric governance lets stakeholders shape upgrades and
          ecosystem growth, while advanced security and a user-first design
          safeguard assets and data.
        </p>
      </section>

      <section className="mb-5">
        <header className="mb-5">
          <h4 className="font-poppins text-xl font-bold">
            Metrics and key features
          </h4>
        </header>

        <ul className="text-light flex list-inside list-disc flex-col gap-2 pl-10 text-base">
          <li>
            <strong>Trading volume: </strong>
            <span className="text-alpha-60">
              Over <strong>$38 billion</strong> in lifetime volume
            </span>
          </li>
          <li>
            <strong>Transactions: </strong>
            <span className="text-alpha-60">
              More than <strong>300 million</strong> transactions processed
            </span>
          </li>
          <li>
            <strong>Revenue growth: </strong>
            <span className="text-alpha-60">
              Protocol revenue reached <strong>$10.5 million in 2024</strong>,
              up from roughly <strong>$3 million in 2023</strong> (3 ×
              year-over-year growth)
            </span>
          </li>
          <li>
            <strong>DEX Screener integration: </strong>
            <span className="text-alpha-60">
              Built-in real-time analytics and asset discovery
            </span>
          </li>
          <li>
            <strong>1-Click trading with Smart Accounts: </strong>
            <span className="text-alpha-60">
              Simplifies onboarding by removing complex signing steps
            </span>
          </li>
          <li>
            <strong>Continuous innovation: </strong>
            <span className="text-alpha-60">
              Regular security and cross-chain upgrades enhance functionality
            </span>
          </li>
        </ul>
      </section>

      <section className="mb-5">
        <header className="mb-5">
          <h5 className="font-poppins text-xl font-bold">
            Structure and roles
          </h5>
        </header>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-alpha-20 border-b">
                <th className="py-3 pr-8 text-left font-poppins text-base font-bold text-white-full">
                  Entity
                </th>
                <th className="py-3 pr-8 text-left font-poppins text-base font-bold text-white-full">
                  Focus
                </th>
                <th className="py-3 text-left font-poppins text-base font-bold text-white-full">
                  Responsibilities
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-alpha-20 border-b">
                <td className="py-3 pr-8">
                  <strong className="text-white-full">Osmurica Inc.</strong>
                </td>
                <td className="py-3 pr-8 text-alpha-60">
                  Engineering & operations
                </td>
                <td className="py-3 text-alpha-60">
                  Development, DevOps, security, partnerships and community
                  engagement
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-8">
                  <strong className="text-white-full">
                    Osmosis Foundation
                  </strong>
                </td>
                <td className="py-3 pr-8 text-alpha-60">Protocol leadership</td>
                <td className="py-3 text-alpha-60">
                  Roadmap, governance, treasury management and long-term
                  innovation
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-light mt-5 text-alpha-60">
          Together, Osmurica Inc. and the Osmosis Foundation deliver secure,
          high-performance cross-chain liquidity and make decentralized finance
          accessible to users worldwide.
        </p>
      </section>

      <section>
        <header className="mb-5">
          <h2 className="font-poppins text-2xl font-bold">
            Contact Information
          </h2>
        </header>

        <address className="text-light not-italic text-alpha-60">
          <strong className="text-white-full">Osmurica Inc.</strong>
          <br />
          2810 N Church St
          <br />
          Wilmington, DE 19802 USA
          <br />
          <br />
          <strong className="text-white-full">Phone:</strong>{" "}
          <a
            href="tel:+13026001294"
            className="text-wosmongton-300 hover:text-wosmongton-200"
          >
            +1 (302) 600-1294
          </a>
          <br />
          <strong className="text-white-full">Email:</strong>{" "}
          <a
            href="mailto:admin@osmurica.com"
            className="text-wosmongton-300 hover:text-wosmongton-200"
          >
            admin@osmurica.com
          </a>
        </address>
      </section>
    </main>
  );
}
