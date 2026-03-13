const Contact = () => {
  return (
    <section className="py-40">
      <h2 className="text-3xl font-bold text-center">Contact Me</h2>

      <form className="max-w-md mx-auto mt-8 space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full border p-3 rounded"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded"
        />

        <textarea
          placeholder="Message"
          className="w-full border p-5 rounded"
        />

        <button className="px-10 py-4 border-2 border-sky-500 text-blue-500 font-black rounded-full hover:bg-blue-500 hover:text-white 'px-6 'py-3 'rounded w-full">
          Send Message
        </button>
      </form>
    </section>
  )
}

export default Contact
