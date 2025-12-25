import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xeejbbkr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
  setStatus("success");
  setFormData({ name: "", email: "", message: "" });

  // Reset back to normal after 3 seconds
  setTimeout(() => {
    setStatus("idle");
  }, 3000);

} else {
  setStatus("error");

  // Optional: reset error state after 3 seconds
  setTimeout(() => {
    setStatus("idle");
  }, 3000);
}
   } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* CONTACT INFO */}
          <div className="space-y-6">
            <InfoCard
              icon={<Mail className="w-6 h-6 text-cyan-400" />}
              title="Email"
              content={
                <a
                  href="mailto:vikasreddy1308@gmail.com"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  vikasreddy1308@gmail.com
                </a>
              }
            />

            <InfoCard
              icon={<MapPin className="w-6 h-6 text-cyan-400" />}
              title="Location"
              content={
                <p className="text-slate-400">
                  Indian Institute of Technology Patna
                  <br />
                  Bihar, India
                </p>
              }
            />
          </div>

          {/* FORM */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl" />

            <form
              onSubmit={handleSubmit}
              className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6"
            >
              <Input
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={status !== "idle"}
              />

              <Input
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                disabled={status !== "idle"}
              />

              <Textarea
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                disabled={status !== "idle"}
              />

              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all
                  ${
                    status === "success"
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 cursor-default"
                      : "bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-lg hover:shadow-cyan-500/30"
                  }
                `}
              >
                {status === "sending" && "Sending..."}
                {status === "success" && "Message Sent ✓"}
                {status === "idle" && (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
                {status === "error" && "Try Again"}
              </button>

              {status === "success" && (
                <p className="mt-4 text-sm text-emerald-400 text-center">
                  Thank you. Your message has been delivered successfully.
                </p>
              )}

              {status === "error" && (
                <p className="mt-4 text-sm text-red-400 text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

/* ---------- SMALL COMPONENTS ---------- */

function InfoCard({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}) {
  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 flex gap-4">
      <div className="p-3 bg-cyan-500/10 rounded-lg">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-slate-200 mb-1">{title}</h3>
        {content}
      </div>
    </div>
  );
}

function Input({
  label,
  ...props
}: {
  label: string;
  [key: string]: any;
}) {
  return (
    <div className="mb-4">
      <label className="block text-sm text-slate-300 mb-2">{label}</label>
      <input
        {...props}
        required
        className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-400 text-slate-200"
      />
    </div>
  );
}

function Textarea({
  label,
  ...props
}: {
  label: string;
  [key: string]: any;
}) {
  return (
    <div className="mb-6">
      <label className="block text-sm text-slate-300 mb-2">{label}</label>
      <textarea
        {...props}
        rows={4}
        required
        className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-400 text-slate-200 resize-none"
      />
    </div>
  );
}
