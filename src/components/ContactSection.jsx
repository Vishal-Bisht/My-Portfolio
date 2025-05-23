import { Mail, Phone, User, Briefcase } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    isClient: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [id === "isclient" ? "isClient" : id.replace("client", "").toLowerCase()]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      setError("Please fill in your name and email.");
      return;
    }
    setError("");
    setSubmitted(true);
    // Here you can integrate with EmailJS, Formspree, etc.
  };

  return (
    <section id="Contact_me" className="bg-gray-800/60 rounded-xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Briefcase className="inline-block h-6 w-6 text-indigo-400" />
        Contact me for work/general enquiries
      </h2>
      {submitted ? (
        <div className="text-green-400 font-semibold text-center py-8">Thank you! Your message has been received.</div>
      ) : (
        <form className="space-y-4 max-w-xl mx-auto" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="clientname" className="mb-1 flex items-center gap-1">
                <User className="h-4 w-4 text-indigo-400" /> Name
              </label>
              <input type="text" id="clientname" value={form.name} onChange={handleChange} className="w-full px-3 py-2 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label htmlFor="clientemail" className="mb-1 flex items-center gap-1">
                <Mail className="h-4 w-4 text-indigo-400" /> Email Address
              </label>
              <input type="email" id="clientemail" value={form.email} onChange={handleChange} className="w-full px-3 py-2 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <div className="text-xs text-gray-400 mt-1">*we'll never share your email & phone details with anyone</div>
            </div>
            <div>
              <label htmlFor="clientphone" className="mb-1 flex items-center gap-1">
                <Phone className="h-4 w-4 text-indigo-400" /> Phone no.
              </label>
              <input type="tel" id="clientphone" value={form.phone} onChange={handleChange} className="w-full px-3 py-2 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div className="flex items-center mt-6 md:mt-0">
              <input type="checkbox" id="isclient" checked={form.isClient} onChange={handleChange} className="mr-2" />
              <label htmlFor="isclient">I want you to work on a project</label>
            </div>
          </div>
          {error && <div className="text-red-400 text-sm text-center">{error}</div>}
          <div className="flex justify-end">
            <button type="submit" className="btn bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded shadow flex items-center gap-2">
              <Briefcase className="h-4 w-4" /> Submit
            </button>
          </div>
        </form>
      )}
    </section>
  );
};

export default ContactSection;
