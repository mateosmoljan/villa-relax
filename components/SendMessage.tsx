function SendMessage() {
  return (
    <section className="flex justify-center">
      <div className="max-w-6xl p-3 py-20">
        <div className="flex justify-between items-center w-full shadow-2xl p-10 gap-12">
          <div>
            <p className="text-base">
              Please <span className="font-bold">send us an</span> answer and
              would you like to belong to Villa Relax in Pula and secure your
              reservation?
            </p>
          </div>
          <div className="">
            <button className="btn">Send Message</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SendMessage;
