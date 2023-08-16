/* Binance Connect Script */
function getMarketData() {
  const symbols = ['BTCUSDT', 'ETHUSDT', 'BNBUSDT', 'SOLUSDT', 'BUSDUSDT', 'MATICUSDT', 'APTUSDT', 'XRPUSDT', 'DOGEUSDT', 'APEUSDT'];
  symbols.forEach(symbol => {
    fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol}`)
      .then(response => response.json())
      .then(data => {
        const priceElement = document.getElementById(`${symbol}-price`);
        const divElement = document.getElementById(`${symbol}-price-div`);
        const changeElement = document.getElementById(`${symbol}-change`);
        const volumeElement = document.getElementById(`${symbol}-volume`);
        const priceValue = parseFloat(data.lastPrice);
        const truncatedPriceValue = priceValue.toFixed(3);
        const percentChange = parseFloat(data.priceChangePercent);
        const volume = parseFloat(data.volume);
        const truncatedVolume = volume.toFixed(2);
        priceElement.textContent = truncatedPriceValue;
        changeElement.textContent = `${percentChange}%`;
        volumeElement.textContent = `${truncatedVolume}`;
        divElement.textContent = `${truncatedPriceValue}`;
      });
  });
  // Show the marketDataContainer after fetching data
  const marketDataContainer = document.querySelector('.marketDataContainer');
  marketDataContainer.style.display = 'block';
}

setInterval(getMarketData, 5000);  // Update every 5 seconds

/* Text Raining Bitcoin Style Script */
function randomText(){
    var text = ('1234567890');
    letter = text[Math.floor(Math.random() * text.length)];
    return letter;
}

function rain(){
    let cloud = document.querySelector('.bitcoinNumberCloud');
    let e = document.createElement('div');
    let left = Math.floor(Math.random() * 70);
    let size = Math.random() * 1.5;
    let duration = Math.random() * 1;

    e.classList.add('number');
    cloud.appendChild(e);
    e.innerText = randomText() 
    e.style.left = left + 'px';
    e.style.fontSize = 0.1+size+ 'em';

    setTimeout(function(){
        cloud.removeChild(e)
    },2000);
}

setInterval (function(){
    rain()
},20);

/* Text Raining Eth Style Script */
function randomText2(){
    var text = ('1234567890');
    letter = text[Math.floor(Math.random() * text.length)];
    return letter;
}

function rain2(){
    let cloud = document.querySelector('.ethNumberCloud');
    let e = document.createElement('div');
    let left = Math.floor(Math.random() * 70);
    let size = Math.random() * 1.5;
    let duration = Math.random() * 1;

    e.classList.add('number2');
    cloud.appendChild(e);
    e.innerText = randomText2() 
    e.style.left = left + 'px';
    e.style.fontSize = 0.1+size+ 'em';

    setTimeout(function(){
        cloud.removeChild(e)
    },2000);
}

setInterval (function(){
    rain2()
},20);