import React, { useState } from 'react';
import "./App.css";

const App = () => {
  // State for "Get in touch" form
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [contactErrors, setContactErrors] = useState({});
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // State for "Apply Now" form
  const [applyForm, setApplyForm] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null
  });
  const [applyErrors, setApplyErrors] = useState({});
  const [applySubmitted, setApplySubmitted] = useState(false);

  // State for "Sign-up" form
  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [signupErrors, setSignupErrors] = useState({});
  const [signupSubmitted, setSignupSubmitted] = useState(false);

  // Validation functions
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^[0-9]{10}$/;
    return re.test(phone);
  };

  // Handle "Get in touch" form submission
  const handleContactSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    
    if (!contactForm.name.trim()) {
      errors.name = "Name is required";
    }
    
    if (!contactForm.email.trim()) {
      errors.email = "Email is required";
    } else if (!validateEmail(contactForm.email)) {
      errors.email = "Invalid email format";
    }
    
    if (!contactForm.message.trim()) {
      errors.message = "Message is required";
    }
    
    setContactErrors(errors);
    
    if (Object.keys(errors).length === 0) {
      console.log("Contact form submitted:", contactForm);
      setContactSubmitted(true);
      setContactForm({ name: "", email: "", message: "" });
      setTimeout(() => setContactSubmitted(false), 3000);
    }
  };

  // Handle "Apply Now" form submission
  const handleApplySubmit = (e) => {
    e.preventDefault();
    const errors = {};
    
    if (!applyForm.name.trim()) {
      errors.name = "Name is required";
    }
    
    if (!applyForm.email.trim()) {
      errors.email = "Email is required";
    } else if (!validateEmail(applyForm.email)) {
      errors.email = "Invalid email format";
    }
    
    if (!applyForm.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!validatePhone(applyForm.phone)) {
      errors.phone = "Phone must be 10 digits";
    }
    
    if (!applyForm.resume) {
      errors.resume = "Resume is required";
    }
    
    setApplyErrors(errors);
    
    if (Object.keys(errors).length === 0) {
      console.log("Apply form submitted:", applyForm);
      setApplySubmitted(true);
      setApplyForm({ name: "", email: "", phone: "", resume: null });
      setTimeout(() => setApplySubmitted(false), 3000);
    }
  };

  // Handle "Sign-up" form submission
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    
    if (!signupForm.name.trim()) {
      errors.name = "Name is required";
    }
    
    if (!signupForm.email.trim()) {
      errors.email = "Email is required";
    } else if (!validateEmail(signupForm.email)) {
      errors.email = "Invalid email format";
    }
    
    if (!signupForm.password) {
      errors.password = "Password is required";
    } else if (signupForm.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    
    setSignupErrors(errors);
    
    if (Object.keys(errors).length === 0) {
      console.log("Signup form submitted:", signupForm);
      setSignupSubmitted(true);
      setSignupForm({ name: "", email: "", password: "" });
      setTimeout(() => setSignupSubmitted(false), 3000);
    }
  };

  // Handle file input change
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setApplyForm({ ...applyForm, resume: e.target.files[0] });
    }
  };

  // Simple icon components
  const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );

  const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );

  const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );

  const LockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  );

  const UploadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="17 8 12 3 7 8"></polyline>
      <line x1="12" y1="3" x2="12" y2="15"></line>
    </svg>
  );

  // Tab state
  const [activeTab, setActiveTab] = useState("contact");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kraftshala Forms Testing</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Test the functionality, UI/UX, and responsiveness of forms from kraftshala.com
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            className={`py-3 px-6 font-medium text-sm rounded-t-lg ${
              activeTab === "contact"
                ? "text-blue-600 border-b-2 border-blue-600 bg-white"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("contact")}
          >
            Get in Touch
          </button>
          <button
            className={`py-3 px-6 font-medium text-sm rounded-t-lg ${
              activeTab === "apply"
                ? "text-green-600 border-b-2 border-green-600 bg-white"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("apply")}
          >
            Apply Now
          </button>
          <button
            className={`py-3 px-6 font-medium text-sm rounded-t-lg ${
              activeTab === "signup"
                ? "text-purple-600 border-b-2 border-purple-600 bg-white"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("signup")}
          >
            Sign Up
          </button>
        </div>

        {/* Get in Touch Form */}
        {activeTab === "contact" && (
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <MailIcon />
                <h2 className="text-xl font-semibold text-gray-900">Get in Touch</h2>
              </div>
              <p className="text-gray-600 mb-6">Reach out to us with any questions or feedback</p>
              
              {contactSubmitted && (
                <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-4">
                  <p className="text-green-800 font-medium">Message sent successfully!</p>
                </div>
              )}
              
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700">
                    Full Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <UserIcon />
                    </div>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Enter your full name"
                      className="pl-10 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    />
                  </div>
                  {contactErrors.name && (
                    <p className="text-sm text-red-600">{contactErrors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MailIcon />
                    </div>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="pl-10 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    />
                  </div>
                  {contactErrors.email && (
                    <p className="text-sm text-red-600">{contactErrors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700">
                    Your Message *
                  </label>
                  <textarea
                    id="contact-message"
                    placeholder="How can we help you?"
                    rows="5"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  />
                  {contactErrors.message && (
                    <p className="text-sm text-red-600">{contactErrors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Apply Now Form */}
        {activeTab === "apply" && (
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <UploadIcon />
                <h2 className="text-xl font-semibold text-gray-900">Apply Now</h2>
              </div>
              <p className="text-gray-600 mb-6">Submit your application to join our program</p>
              
              {applySubmitted && (
                <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-4">
                  <p className="text-green-800 font-medium">Application submitted successfully!</p>
                </div>
              )}
              
              <form onSubmit={handleApplySubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="apply-name" className="block text-sm font-medium text-gray-700">
                    Full Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <UserIcon />
                    </div>
                    <input
                      id="apply-name"
                      type="text"
                      placeholder="Enter your full name"
                      className="pl-10 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      value={applyForm.name}
                      onChange={(e) => setApplyForm({...applyForm, name: e.target.value})}
                    />
                  </div>
                  {applyErrors.name && (
                    <p className="text-sm text-red-600">{applyErrors.name}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="apply-email" className="block text-sm font-medium text-gray-700">
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MailIcon />
                      </div>
                      <input
                        id="apply-email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="pl-10 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        value={applyForm.email}
                        onChange={(e) => setApplyForm({...applyForm, email: e.target.value})}
                      />
                    </div>
                    {applyErrors.email && (
                      <p className="text-sm text-red-600">{applyErrors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="apply-phone" className="block text-sm font-medium text-gray-700">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <PhoneIcon />
                      </div>
                      <input
                        id="apply-phone"
                        type="tel"
                        placeholder="10-digit phone number"
                        className="pl-10 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        value={applyForm.phone}
                        onChange={(e) => setApplyForm({...applyForm, phone: e.target.value})}
                      />
                    </div>
                    {applyErrors.phone && (
                      <p className="text-sm text-red-600">{applyErrors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="apply-resume" className="block text-sm font-medium text-gray-700">
                    Upload Resume *
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <UploadIcon />
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">PDF, DOC, DOCX (MAX. 5MB)</p>
                      </div>
                      <input 
                        id="apply-resume" 
                        type="file" 
                        className="hidden" 
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                  {applyErrors.resume && (
                    <p className="text-sm text-red-600">{applyErrors.resume}</p>
                  )}
                  {applyForm.resume && (
                    <p className="text-sm text-gray-600 mt-2">
                      Selected file: {applyForm.resume.name}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Sign Up Form */}
        {activeTab === "signup" && (
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <LockIcon />
                <h2 className="text-xl font-semibold text-gray-900">Sign Up</h2>
              </div>
              <p className="text-gray-600 mb-6">Create an account to access our platform</p>
              
              {signupSubmitted && (
                <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-4">
                  <p className="text-green-800 font-medium">Account created successfully!</p>
                </div>
              )}
              
              <form onSubmit={handleSignupSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="signup-name" className="block text-sm font-medium text-gray-700">
                    Full Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <UserIcon />
                    </div>
                    <input
                      id="signup-name"
                      type="text"
                      placeholder="Enter your full name"
                      className="pl-10 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      value={signupForm.name}
                      onChange={(e) => setSignupForm({...signupForm, name: e.target.value})}
                    />
                  </div>
                  {signupErrors.name && (
                    <p className="text-sm text-red-600">{signupErrors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MailIcon />
                    </div>
                    <input
                      id="signup-email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="pl-10 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      value={signupForm.email}
                      onChange={(e) => setSignupForm({...signupForm, email: e.target.value})}
                    />
                  </div>
                  {signupErrors.email && (
                    <p className="text-sm text-red-600">{signupErrors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700">
                    Password *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <LockIcon />
                    </div>
                    <input
                      id="signup-password"
                      type="password"
                      placeholder="Create a password"
                      className="pl-10 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      value={signupForm.password}
                      onChange={(e) => setSignupForm({...signupForm, password: e.target.value})}
                    />
                  </div>
                  {signupErrors.password && (
                    <p className="text-sm text-red-600">{signupErrors.password}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                  Create Account
                </button>
              </form>
            </div>
          </div>
        )}

        <div className="mt-12 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Testing Instructions</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Test all forms on different screen sizes (mobile, tablet, desktop)</li>
            <li>Verify required field validation by submitting empty forms</li>
            <li>Test email validation with invalid formats (e.g., "test@", "test.com")</li>
            <li>Test phone validation with non-numeric or incorrect length inputs</li>
            <li>Test password validation with less than 6 characters</li>
            <li>Check error messages display correctly and are user-friendly</li>
            <li>Verify success messages appear after valid submissions</li>
            <li>Test file upload functionality in the Apply Now form</li>
            <li>Check tab navigation between forms works smoothly</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
