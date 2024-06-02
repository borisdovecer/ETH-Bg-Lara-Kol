import { cacheLatestRaydiumData, getFilteredData } from './app/api';
import { useState } from 'react';
import Header from './app/components/Header.tsx';
import { Link } from 'react-router-dom';

const App = () => {
  const [pairs, setPairs] = useState([]);
  const onClick = async () => {
    cacheLatestRaydiumData().then(async () => {
      const data: any = await getFilteredData();
      console.log(data);
      setPairs(data.pairs);
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />

      <section className="px-4 py-8 text-center">
        <img src="/laracroft.jpg" alt="Lara Croft in action" className="mx-auto rounded-lg shadow-lg" />
      </section>

      <section className="px-4 py-8">
        <h2 className="text-3xl font-bold text-center text-yellow-500">About</h2>
        <p className="mt-4 text-center">
          Lara Kol - Tomb Traider ($Lara) is a unique meme token built on the TON blockchain, inspired by the iconic
          Lara Croft Tomb Raider movie from 2001.
        </p>
        <p className="mt-4 text-center">
          Our mission is to create a community-driven project that combines the nostalgia of a classic adventure with
          the innovation of blockchain technology.
        </p>
        <p className="mt-4 text-center">
          Join us as we embark on this exciting journey, bringing together fans, gamers, and crypto enthusiasts in a
          thrilling new ecosystem.
        </p>
      </section>

      <section className="px-4 py-8">
        <h2 className="text-3xl font-bold text-center text-yellow-500">Tokenomics</h2>
        <ul className="mt-4 text-center">
          <li>Total Supply: 1B $Lara</li>
          <li>LP: 30%</li>
          <li>Team: 20%</li>
          <li>Marketing: 30%</li>
          <li>Airdrop: 20%</li>
        </ul>
      </section>

      <section className="px-4 py-8">
        <h2 className="text-3xl font-bold text-center text-yellow-500">Public Roadmap</h2>
        <ol className="mt-4 space-y-4 text-center">
          <li>
            <h3 className="text-xl font-semibold">Phase 1</h3>
            <p>Building Tools, grow community, secure funds for liquidity pool</p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">Phase 2</h3>
            <p>Launch of $Lara token on TON blockchain</p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">Phase 3</h3>
            <p>Integrating tools to the community</p>
          </li>
        </ol>
      </section>

      <section className="px-16 py-8">
        <div className="grid grid-cols-2 gap-8">
          <img src="/laracroft.jpg" alt="Image 1" className="w-full h-auto rounded-lg shadow-lg" />
          <img src="/laracroft.jpg" alt="Image 2" className="w-full h-auto rounded-lg shadow-lg" />
          <img src="/laracroft.jpg" alt="Image 3" className="w-full h-auto rounded-lg shadow-lg" />
          <img src="/laracroft.jpg" alt="Image 4" className="w-full h-auto rounded-lg shadow-lg" />
          <img src="/laracroft.jpg" alt="Image 5" className="w-full h-auto rounded-lg shadow-lg" />
          <img src="/laracroft.jpg" alt="Image 6" className="w-full h-auto rounded-lg shadow-lg" />
          <img src="/laracroft.jpg" alt="Image 7" className="w-full h-auto rounded-lg shadow-lg" />
          <img src="/laracroft.jpg" alt="Image 8" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </section>

      <section className="px-4 py-8">
        <h2 className="text-3xl font-bold text-center text-yellow-500">Join Us</h2>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://twitter.com/your-twitter" className="text-blue-500">
            Twitter
          </a>
          <a href="https://t.me/your-telegram" className="text-blue-500">
            Telegram
          </a>
          <a href="https://dexscreener.com/your-token" className="text-blue-500">
            Dexscreener
          </a>
          <a href="https://coinmarketcap.com/your-token" className="text-blue-500">
            CoinMarketCap
          </a>
          <a href="https://coingecko.com/your-token" className="text-blue-500">
            CoinGecko
          </a>
        </div>
      </section>

      <section className="px-4 py-8 text-center">
        <Link to="#" className="bg-yellow-500 text-black py-2 px-4 rounded-full font-bold hover:bg-yellow-600">
          Buy $Lara
        </Link>
      </section>

      <section className="px-4 py-8 text-center">
        <button
          onClick={onClick}
          className="bg-yellow-500 text-black py-2 px-4 rounded-full font-bold hover:bg-yellow-600"
        >
          Do some Magic!
        </button>
        {pairs.map((token: any) => (
          <div>
            <a href={token.url} target="_blank">
              {token.baseToken.name}
            </a>
          </div>
        ))}
      </section>

      <footer className="text-center py-4">
        <p>&copy; 2024 Lara Kol - Tomb Traider. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
