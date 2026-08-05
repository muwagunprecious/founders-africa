export default function HomePage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <h1 className="text-3xl font-semibold leading-10 tracking-tight">
          Welcome to the Home Page!
        </h1>
        <p className="max-w-md text-lg leading-8">
          This is the home page of your Next.js application. You can start editing this page to customize it.
        </p>
      </main>
    </div>
  );
}