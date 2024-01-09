function SendMessage() {
  return (
    <section className="">
      <div className="container py-10">
        <div className="flex justify-between gap-2 lg:items-center lg:flex-row flex-col w-full shadow-2xl p-10 ">
          <div className="lg:w-2/3">
            <p className="text-base">
              Please <span className="font-bold">send us an</span> answer and
              would you like to belong to Villa Relax in Pula and secure your
              reservation?
            </p>
          </div>
          <div className=" flex justify-end ">
            <button className="btn lg:min-w-full">Send Message</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SendMessage;
