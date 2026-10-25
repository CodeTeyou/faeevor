export default function () {
  return (
    <>
      <main className="grid grid-cols-2 w-screen h-screen">
        <div className="grid grid-rows-2">
          <div className="flex justify-center items-center">
            <span className="pb-8 text-2xl font-semibold font-jost">Error</span>
            <strong className="text-9xl font-raleway">
              <span className="text-violet">4</span>
              <span className="text-blue">0</span>
              <span className="text-violet">4</span>
            </strong>
          </div>

          <div className="flex flex-col items-center font-jost">
            <strong className="text-5xl">Woops!</strong>
            <p className="text-3xl text-center w-100">
              Out of all Requests, This one Didn't Work!
            </p>
          </div>
        </div>

        <div className="grid grid-rows-2">
          <div className="flex flex-col justify-center items-center">
            <div className="pt-25">
              <p className="text-2xl font-semibold font-jost">Go Back</p>
              <a
                href="/"
                className="text-8xl font-bold font-raleway text-violet hover:underline"
              >
                Home?
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
