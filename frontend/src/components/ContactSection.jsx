import { Mail, Phone, User, Briefcase } from "lucide-react";
import { useState, useEffect } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  isClient: false,
};

const ContactSection = () => {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [Message, setMessage] = useState("");

  useEffect(() => {
    let timer;
    if (submitted) {
      timer = setTimeout(() => {
        setSubmitted(false);
        setMessage("");
        setForm(initialForm);
      }, 6000); // 6 seconds
    }
    return () => clearTimeout(timer);
  }, [submitted]);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [id === "isclient" ? "isClient" : id.replace("client", "").toLowerCase()]:
        type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim()) {
      setMessage("Please fill in your name and email.");
      return;
    }

    setMessage("");
    setLoading(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          isClient: form.isClient,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setMessage(data.message);
      } else {
        setMessage(data.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      setMessage("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="Contact_me"
      className="bg-gray-800/60 rounded-xl p-6 shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-center justify-center">
        <Briefcase className="inline-block h-6 w-6 text-indigo-400" />
        Contact me for work/general enquiries
      </h2>
      {submitted ? (
        <div className="text-green-400 font-semibold text-center py-8">
          {Message}
        </div>
      ) : (
        <form className="space-y-4 max-w-xl mx-auto" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="clientname"
                className="mb-1 flex items-center gap-1"
              >
                <User className="h-4 w-4 text-indigo-400" /> Name
              </label>
              <input
                type="text"
                id="clientname"
                value={form.name}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="clientemail"
                className="mb-1 flex items-center gap-1"
              >
                <Mail className="h-4 w-4 text-indigo-400" /> Email Address
              </label>
              <input
                type="email"
                id="clientemail"
                value={form.email}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <div className="text-xs text-gray-400 mt-1">
                *I'll never share your email & phone details with anyone
              </div>
            </div>
            <div>
              <label
                htmlFor="clientphone"
                className="mb-1 flex items-center gap-1"
              >
                <Phone className="h-4 w-4 text-indigo-400" /> Phone no.
              </label>
              <input
                type="tel"
                id="clientphone"
                value={form.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="flex items-center mt-6 md:mt-0">
              <input
                type="checkbox"
                id="isclient"
                checked={form.isClient}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="isclient">I want you to work on a project</label>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className={`${
                loading
                  ? "bg-indigo-400 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700"
              } text-white px-6 py-2 rounded shadow flex items-center gap-2 transition-colors`}
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Briefcase className="h-4 w-4" /> Submit
                </>
              )}
            </button>
          </div>
        </form>
      )}
      {Message && !submitted && (
        <div
          className={`text-center py-2 font-medium ${
            Message.includes("success") || Message.includes("Thank you")
              ? "text-green-400"
              : "text-red-400"
          }`}
        >
          {Message}
        </div>
      )}
    </section>
  );
};

export default ContactSection;
