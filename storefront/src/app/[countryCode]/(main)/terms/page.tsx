'use client'
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { NextPage } from 'next';

const TermsAndConditions: NextPage = () => {
  // Table of contents for navigation
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "definitions", title: "Definitions" },
    { id: "account", title: "Account Registration" },
    { id: "products", title: "Products and Pricing" },
    { id: "orders", title: "Orders and Payment" },
    { id: "shipping", title: "Shipping and Delivery" },
    { id: "returns", title: "Returns and Refunds" },
    { id: "intellectual", title: "Intellectual Property" },
    { id: "user-content", title: "User-Generated Content" },
    { id: "prohibited", title: "Prohibited Uses" },
    { id: "disclaimer", title: "Disclaimer of Warranties" },
    { id: "limitation", title: "Limitation of Liability" },
    { id: "indemnification", title: "Indemnification" },
    { id: "governing-law", title: "Governing Law" },
    { id: "changes", title: "Changes to Terms" },
    { id: "contact", title: "Contact Information" },
    { id: "privacy", title: "Privacy Policy" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Terms and Conditions | Melvin Couture</title>
        <meta 
          name="description" 
          content="Terms and conditions for Melvin Couture online store. Read our policies on purchases, returns, and more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="lg:flex lg:h-screen lg:overflow-hidden">
        {/* Mobile header */}
        <div className="lg:hidden bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold text-gray-900">Terms and Conditions</h1>
              <Link
                href="/"
                className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>

        {/* Sidebar for larger screens */}
        <div className="hidden lg:flex lg:flex-col lg:w-80 lg:border-r lg:border-gray-200 lg:overflow-y-auto bg-white">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">
                Table of Contents
              </h2>
              <Link
                href="/"
                className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                Back to Home
              </Link>
            </div>
          </div>
          <nav className="flex-1 bg-white p-4">
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className="group flex w-full items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-indigo-600 hover:bg-gray-50"
                  >
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Main content */}
        <div className="lg:flex-1 lg:overflow-y-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="hidden lg:block mb-8">
              <h1 className="text-3xl font-extrabold text-gray-900">
                Terms and Conditions
              </h1>
              <p className="mt-2 text-sm text-gray-500">
                Last Updated: March 20, 2025
              </p>
            </div>

            {/* Mobile table of contents dropdown */}
            <div className="lg:hidden mb-6">
              <select 
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                onChange={(e) => scrollToSection(e.target.value)}
                defaultValue=""
              >
                <option value="" disabled>Jump to section...</option>
                {sections.map((section) => (
                  <option key={section.id} value={section.id}>
                    {section.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="prose prose-indigo prose-lg text-gray-700 mx-auto">
              <section id="introduction" className="scroll-mt-16">
                <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">1. Introduction</h2>
                <p>
                  Welcome to Melvin Couture. These Terms and Conditions govern your use of our website located at <a href="https://www.melvincouture.com" className="text-indigo-600 hover:text-indigo-500">www.melvincouture.com</a> and form the entire agreement between Melvin Couture ("we," "our," or "us") and you, the user ("you" or "your").
                </p>
                <p>
                  By accessing or using our website, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access the website.
                </p>
              </section>

              <section id="definitions" className="mt-8 scroll-mt-16">
                <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">2. Definitions</h2>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                  <li><strong>"Products"</strong> refers to items listed for sale on our website.</li>
                  <li><strong>"Services"</strong> refers to any services offered through our website.</li>
                  <li><strong>"Content"</strong> refers to text, images, graphics, logos, videos, and other material displayed on our website.</li>
                  <li><strong>"Account"</strong> refers to a registered user profile on our website.</li>
                </ul>
              </section>

              <section id="account" className="mt-8 scroll-mt-16">
                <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">3. Account Registration</h2>
                <p className="mt-4">
                  To purchase products or access certain features of our website, you may need to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                </p>
                <p className="mt-4">
                  You are responsible for safeguarding the password that you use to access our website and for any activities or actions under your password. We encourage you to use a strong password (using a combination of upper and lowercase letters, numbers, and symbols) with your account.
                </p>
              </section>

              <section id="products" className="mt-8 scroll-mt-16">
                <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">4. Products and Pricing</h2>
                <p className="mt-4">
                  All products are subject to availability. We reserve the right to discontinue any product at any time and to limit quantities of any products that we offer.
                </p>
                <p className="mt-4">
                  Prices for our products are subject to change without notice. We shall not be liable to you or any third party for any price changes, suspension, or discontinuation of any products.
                </p>
                <p className="mt-4">
                  All prices displayed on our website are in USD unless otherwise stated. Prices do not include taxes, shipping, and handling fees, which will be added at checkout.
                </p>
              </section>

              <section id="orders" className="mt-8 scroll-mt-16">
                <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">5. Orders and Payment</h2>
                <p className="mt-4">
                  When you place an order, you offer to purchase the products at the prices indicated. We reserve the right to accept or decline your order for any reason, including but not limited to unavailability of products, errors in pricing or product description, or concerns about the authenticity of your order.
                </p>
                <p className="mt-4">
                  Payment must be made at the time of placing your order. We accept various payment methods as indicated on our website. You represent and warrant that you have the legal right to use any payment method you provide.
                </p>
              </section>

              <section id="shipping" className="mt-8 scroll-mt-16">
                <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">6. Shipping and Delivery</h2>
                <p className="mt-4">
                  Shipping and delivery times are estimates and not guaranteed. We are not responsible for delays caused by customs, natural disasters, or other events beyond our control.
                </p>
                <p className="mt-4">
                  Risk of loss and title for items purchased pass to you upon delivery of the items to the carrier. You are responsible for filing any claims with carriers for damaged and/or lost shipments.
                </p>
              </section>

              <section id="returns" className="mt-8 scroll-mt-16">
                <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">7. Returns and Refunds</h2>
                <p className="mt-4">Our returns and refunds policy is as follows:</p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                  <li>You may return unworn, unwashed, and undamaged products within 14 days of delivery.</li>
                  <li>Returns must include original tags and packaging.</li>
                  <li>You are responsible for return shipping costs unless the return is due to our error.</li>
                  <li>Refunds will be issued to the original form of payment within 7-10 business days after we receive the returned items.</li>
                </ul>
                <p className="mt-4">
                  For defective items, please contact our customer service team at <a href="mailto:support@melvincouture.com" className="text-indigo-600 hover:text-indigo-500">support@melvincouture.com</a>.
                </p>
              </section>

              <section id="intellectual" className="mt-8 scroll-mt-16">
                <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">8. Intellectual Property</h2>
                <p className="mt-4">
                  All content on our website, including designs, text, graphics, logos, images, and software, is the property of Melvin Couture or its content suppliers and is protected by international copyright, trademark, and other intellectual property laws.
                </p>
                <p className="mt-4">
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without our prior written consent.
                </p>
              </section>

              <section id="user-content" className="mt-8 scroll-mt-16">
                <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">9. User-Generated Content</h2>
                <p className="mt-4">
                  By posting reviews, comments, or other content on our website, you grant us a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content throughout the world in any media.
                </p>
                <p className="mt-4">
                  You represent and warrant that your content does not violate the privacy rights, publicity rights, copyright, contract rights, or any other rights of any person or entity.
                </p>
              </section>

              <section id="prohibited" className="mt-8 scroll-mt-16">
                <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">10. Prohibited Uses</h2>
                <p className="mt-4">You agree not to use our website:</p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                  <li>In any way that violates any applicable law or regulation.</li>
                  <li>To impersonate or attempt to impersonate our company, our employees, another user, or any other person or entity.</li>
                  <li>To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website.</li>
                  <li>To attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the website.</li>
                </ul>
              </section>

              <section id="disclaimer" className="mt-8 scroll-mt-16">
                <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">11. Disclaimer of Warranties</h2>
                <p className="mt-4">
                  Our website and all content, products, and services included on or otherwise made available to you through our website are provided on an "as is" and "as available" basis, without any warranties of any kind, either express or implied.
                </p>
                <p className="mt-4">
                  We do not guarantee, represent, or warrant that your use of our website will be uninterrupted, timely, secure, or error-free.
                </p>
              </section>

              <section id="limitation" className="mt-8 scroll-mt-16">
                <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">12. Limitation of Liability</h2>
                <p className="mt-4">
                  In no event shall Melvin Couture, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the website.
                </p>
              </section>

              <section id="indemnification" className="mt-8 scroll-mt-16">
                <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">13. Indemnification</h2>
                <p className="mt-4">
                  You agree to defend, indemnify, and hold harmless Melvin Couture, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms and Conditions.
                </p>
              </section>

              <section id="governing-law" className="mt-8 scroll-mt-16">
                <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">14. Governing Law</h2>
                <p className="mt-4">
                  These Terms and Conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which Melvin Couture is registered, without regard to its conflict of law provisions.
                </p>
              </section>

              <section id="changes" className="mt-8 scroll-mt-16">
                <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">15. Changes to Terms and Conditions</h2>
                <p className="mt-4">
                  We reserve the right to modify these Terms and Conditions at any time. If we make material changes, we will notify you by email or by posting a notice on our website prior to the changes becoming effective. Your continued use of the website after any such changes constitutes your acceptance of the new Terms and Conditions.
                </p>
              </section>

              <section id="contact" className="mt-8 scroll-mt-16">
                <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">16. Contact Information</h2>
                <p className="mt-4">
                  Questions about the Terms and Conditions should be sent to us at <a href="mailto:legal@melvincouture.com" className="text-indigo-600 hover:text-indigo-500">legal@melvincouture.com</a>.
                </p>
              </section>

              <section id="privacy" className="mt-8 scroll-mt-16">
                <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">17. Privacy Policy</h2>
                <p className="mt-4">
                  Please review our <Link href="/privacy-policy" className="text-indigo-600 hover:text-indigo-500">Privacy Policy</Link>, which also governs your visit to our website, to understand our privacy practices.
                </p>
              </section>
            </div>

            {/* Mobile back to top button */}
            <div className="mt-12 lg:hidden text-center">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;