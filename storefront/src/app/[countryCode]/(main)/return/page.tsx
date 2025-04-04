"use client"
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { NextPage } from 'next';

const ReturnPolicy: NextPage = () => {
  // Table of contents for navigation
  const sections = [
    { id: "overview", title: "Policy Overview" },
    { id: "eligibility", title: "Return Eligibility" },
    { id: "timeframe", title: "Return Timeframe" },
    { id: "condition", title: "Condition of Items" },
    { id: "process", title: "Return Process" },
    { id: "shipping", title: "Return Shipping" },
    { id: "refunds", title: "Refunds" },
    { id: "exchanges", title: "Exchanges" },
    { id: "damaged", title: "Damaged or Defective Items" },
    { id: "international", title: "International Returns" },
    { id: "exceptions", title: "Exceptions" },
    { id: "contact", title: "Contact Us" },
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
        <title>Return Policy | Melvin Couture</title>
        <meta 
          name="description" 
          content="Return and refund policy for Melvin Couture. Learn about our hassle-free returns process, eligibility requirements, and refund timeframes."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="lg:flex lg:h-screen lg:overflow-hidden">
        {/* Mobile header */}
        <div className="lg:hidden bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold text-gray-900">Return Policy</h1>
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
                Return Policy
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
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      Our goal is to ensure you're completely satisfied with your purchase. If you're not, we're here to help with a simple and convenient return process.
                    </p>
                  </div>
                </div>
              </div>

              <section id="overview" className="scroll-mt-16">
                <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">Policy Overview</h2>
                <p className="mt-4">
                  At Melvin Couture, we stand behind the quality of our products and want you to be completely satisfied with your purchase. We understand that sometimes a product may not meet your expectations or you may simply change your mind.
                </p>
                <p className="mt-4">
                  Our return policy allows you to return eligible items within 14 days of delivery for a full refund or exchange. This policy is designed to give you confidence when shopping with us, knowing that we're committed to your satisfaction.
                </p>
              </section>

              <section id="eligibility" className="mt-8 scroll-mt-16">
                <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">Return Eligibility</h2>
                <p className="mt-4">
                  To be eligible for a return, your item must meet the following criteria:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                  <li>The item must be unused and in the same condition that you received it</li>
                  <li>The item must be in its original packaging with all tags attached</li>
                  <li>The item must not be final sale, custom-made, or personalized</li>
                  <li>The return must be initiated within our designated return period</li>
                </ul>
                <p className="mt-4">
                  Please note that certain items are non-returnable due to health protection and hygiene reasons, including:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                  <li>Intimate apparel and swimwear</li>
                  <li>Face masks</li>
                  <li>Earrings and body jewelry</li>
                  <li>Sale items marked as "Final Sale"</li>
                </ul>
              </section>

              <section id="timeframe" className="mt-8 scroll-mt-16">
                <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">Return Timeframe</h2>
                <p className="mt-4">
                  You have 14 calendar days from the date you received your order to initiate a return. After this period, returns will not be accepted.
                </p>
                <p className="mt-4">
                  For seasonal items, extended return periods may apply during holiday seasons. Any special return timeframes will be clearly communicated at the time of purchase and on your receipt.
                </p>
                <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-4">
                  <p className="text-sm text-green-700">
                    <strong>Holiday Season Extended Returns:</strong> Orders placed between November 1 and December 24 can be returned until January 15 of the following year.
                  </p>
                </div>
              </section>

              <section id="condition" className="mt-8 scroll-mt-16">
                <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">Condition of Items</h2>
                <p className="mt-4">
                  All returned items must be in their original condition, unworn, unwashed, and undamaged. Items must have all original tags attached and be returned in their original packaging.
                </p>
                <p className="mt-4">
                  We carefully inspect all returned items. If an item shows signs of wear, has been washed, or appears to have been used, we reserve the right to reject the return or provide a partial refund.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700">
                        We recommend trying on clothing items over undergarments and on clean flooring to avoid any marks or damage that may make the item ineligible for return.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="process" className="mt-8 scroll-mt-16">
                <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">Return Process</h2>
                <p className="mt-4">
                  To initiate a return, please follow these steps:
                </p>
                <ol className="list-decimal pl-5 space-y-2 mt-4">
                  <li>
                    <strong>Contact our customer service team:</strong> Email us at <a href="mailto:returns@melvincouture.com" className="text-indigo-600 hover:text-indigo-500">returns@melvincouture.com</a> or call us at (555) 123-4567 to request a return authorization.
                  </li>
                  <li>
                    <strong>Provide your order information:</strong> Include your order number, the items you wish to return, and the reason for the return.
                  </li>
                  <li>
                    <strong>Receive return authorization:</strong> You'll receive a return authorization number (RA#) and return instructions by email.
                  </li>
                  <li>
                    <strong>Package your return:</strong> Securely pack the items in their original packaging along with all tags and accessories.
                  </li>
                  <li>
                    <strong>Include your return form:</strong> Print and include the return form with your RA# in your package.
                  </li>
                  <li>
                    <strong>Ship your return:</strong> Send your package to the address provided in the return instructions.
                  </li>
                </ol>
                <p className="mt-4">
                  You can also initiate a return through your account on our website by visiting the "Orders" section and selecting "Return Item" next to the appropriate order.
                </p>
              </section>

              <section id="shipping" className="mt-8 scroll-mt-16">
                <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">Return Shipping</h2>
                <p className="mt-4">
                  The customer is responsible for return shipping costs unless the return is due to our error (you received an incorrect or defective item).
                </p>
                <p className="mt-4">
                  We recommend using a trackable shipping service and purchasing shipping insurance for your protection. We cannot guarantee that we will receive your returned item if it is lost in transit.
                </p>
                <div className="mt-4 bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">Return Shipping Address</h3>
                  <p className="mt-2">
                    Melvin Couture Returns<br />
                    123 Fashion Avenue<br />
                    Suite 456<br />
                    New York, NY 10001<br />
                    United States
                  </p>
                </div>
              </section>

              <section id="refunds" className="mt-8 scroll-mt-16">
                <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">Refunds</h2>
                <p className="mt-4">
                  Once we receive your return, our team will inspect the item(s) to ensure they meet our return policy requirements. We will notify you of the status of your refund.
                </p>
                <p className="mt-4">
                  If your return is approved, we will initiate a refund to your original payment method. The time it takes for the refund to appear in your account depends on your payment provider and may take 5-10 business days.
                </p>
                <p className="mt-4">
                  The refund will include the purchase price of the returned item(s) and any applicable taxes. Original shipping costs are non-refundable unless the return is due to our error.
                </p>
                <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 mt-4">
                  <p className="text-sm text-indigo-700">
                    For purchases made using store credit or gift cards, refunds will be issued as store credit.
                  </p>
                </div>
              </section>

              <section id="exchanges" className="mt-8 scroll-mt-16">
                <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">Exchanges</h2>
                <p className="mt-4">
                  If you'd like to exchange an item for a different size or color, please follow the same process as a return and indicate your exchange preference in the return form.
                </p>
                <p className="mt-4">
                  For faster service, we recommend placing a new order for the desired item and returning the original purchase for a refund. This ensures you receive the new item quickly, especially if the desired replacement is currently in stock.
                </p>
                <p className="mt-4">
                  Exchanges are subject to product availability. If the requested exchange item is unavailable, we will issue a refund for the returned item.
                </p>
              </section>

              <section id="damaged" className="mt-8 scroll-mt-16">
                <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">Damaged or Defective Items</h2>
                <p className="mt-4">
                  If you receive a damaged or defective item, please contact our customer service team immediately at <a href="mailto:support@melvincouture.com" className="text-indigo-600 hover:text-indigo-500">support@melvincouture.com</a> with photos of the damage.
                </p>
                <p className="mt-4">
                  For damaged or defective items, we will cover the return shipping costs and expedite the replacement or refund process. We may request photos of the damaged items to help improve our quality control and packaging procedures.
                </p>
                <p className="mt-4">
                  The timeframe for reporting damaged or defective items is 48 hours from the time of delivery.
                </p>
              </section>

              <section id="international" className="mt-8 scroll-mt-16">
                <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">International Returns</h2>
                <p className="mt-4">
                  For international orders, the same general return policy applies with the following additional considerations:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                  <li>The customer is responsible for all return shipping costs, duties, and taxes associated with international returns</li>
                  <li>International returns may take 2-3 weeks to process due to customs and international shipping times</li>
                  <li>Please mark your package as "Returned Merchandise" to avoid potential customs fees</li>
                </ul>
                <p className="mt-4">
                  We recommend using a trackable international shipping service for all international returns.
                </p>
              </section>

              <section id="exceptions" className="mt-8 scroll-mt-16">
                <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">Exceptions</h2>
                <p className="mt-4">
                  While we strive to make our return process as accommodating as possible, there are certain situations where exceptions to our standard policy may apply:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                  <li>Items purchased during special promotions or flash sales may have modified return policies, which will be clearly communicated at the time of purchase</li>
                  <li>Custom or personalized items cannot be returned unless they are defective</li>
                  <li>Items marked as "Final Sale" cannot be returned or exchanged</li>
                  <li>Seasonal merchandise may be subject to shorter return windows</li>
                </ul>
                <p className="mt-4">
                  For specific questions about returns that fall outside our standard policy, please contact our customer service team for assistance.
                </p>
              </section>

              <section id="contact" className="mt-8 scroll-mt-16">
                <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">Contact Us</h2>
                <p className="mt-4">
                  If you have any questions about our return policy or need assistance with a return, our customer service team is here to help:
                </p>
                <ul className="pl-5 mt-4 space-y-3">
                  <li className="flex">
                    <svg className="h-6 w-6 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Email: <a href="mailto:support@melvincouture.com" className="text-indigo-600 hover:text-indigo-500">support@melvincouture.com</a></span>
                  </li>
                  <li className="flex">
                    <svg className="h-6 w-6 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Phone: (555) 123-4567 (Monday - Friday, 9am - 5pm EST)</span>
                  </li>
                  <li className="flex">
                    <svg className="h-6 w-6 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                    <span>Live Chat: Available on our website during business hours</span>
                  </li>
                </ul>
                <div className="mt-6 text-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Contact Customer Service
                  </Link>
                </div>
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

export default ReturnPolicy;