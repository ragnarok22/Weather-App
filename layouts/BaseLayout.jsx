import Head from 'next/head'

export default function BaseLayout ({ children }) {
  return (
    <>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Get the weather of your city" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen h-screen p-4 md:p-8">
        {children}
      </main>
    </>
  )
}