import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('INR')
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyInfo = useCurrencyInfo(from)
  const currencyOptions = Object.keys(currencyInfo)

  const swapCurrency = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)   //  amount * currencyInfo[to]
    setAmount(convertedAmount)
  }

  const convertCurrency = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }


  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-slate-900 via-gray-900 to-black"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/10843692/pexels-photo-10843692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-white/20 rounded-xl p-6 backdrop-blur-lg bg-white/10 shadow-2xl">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              convertCurrency()

            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                // setCurrency={setFrom}
                selectedCurrency={from}
                currencyOptions={currencyOptions}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}

              />
            </div>
            <div className="flex justify-center my-3">
              <button
                type="button"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-lg transition"
                onClick={swapCurrency}

              >
                swapCurrency
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amountDisabled
                // setCurrency={setTo}
                selectedCurrency={to}
                amount={convertedAmount}
                currencyOptions={currencyOptions}
                onCurrencyChange={(currency) => setTo(currency)}
              />
            </div>
            <button type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg mt-4 transition">
              ConvertCurrency {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
