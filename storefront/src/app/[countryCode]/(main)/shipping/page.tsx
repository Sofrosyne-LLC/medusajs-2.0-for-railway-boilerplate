import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { NextPage } from 'next';

const ShippingInformation: NextPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Shipping Information | Melvin Couture</title>
        <meta 
          name="description" 
          content="Learn about Melvin Couture's shipping options, delivery times, and policies for domestic and international orders."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Header */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-gray-900 text-center">
              Shipping & Delivery
            </h1>
            <div className="mt-3 max-w-xl text-center">
              <div className="relative w-full">
                <input
                  type="text"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 pl-4 pr-10 py-2"
                  placeholder="What can we help you with?"
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
          What Are Melvin Couture's Shipping Options?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Option 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-gray-900">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Standard Shipping</h3>
            <p className="text-gray-700 mb-4">
              Free standard shipping on all orders over $150. Orders under $150 ship for a flat rate of $7.95.
            </p>
            <p className="text-gray-700 font-medium mb-4">
              Delivery in 4-7 business days
            </p>
            <div className="mt-auto">
              <button className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Option 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-gray-900">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Express Shipping</h3>
            <p className="text-gray-700 mb-4">
              Need it faster? Express shipping is available for $14.95 on all eligible orders.
            </p>
            <p className="text-gray-700 font-medium mb-4">
              Delivery in 2-3 business days
            </p>
            <div className="mt-auto">
              <button className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Option 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-gray-900">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Store Pickup</h3>
            <p className="text-gray-700 mb-4">
              Order online and pick up at your nearest Melvin Couture store. No shipping fees!
            </p>
            <p className="text-gray-700 font-medium mb-4">
              Ready within 24 hours
            </p>
            <div className="mt-auto">
              <button className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800 transition-colors">
                Find Stores
              </button>
            </div>
          </div>
        </div>

        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-16">
          During checkout, we'll provide an estimated delivery date for every item in your bag. Delivery times may vary based on your location and product availability.
        </p>

        {/* Shipping details accordion */}
        <div className="max-w-3xl mx-auto border-t border-gray-200">
          <details className="group border-b border-gray-200">
            <summary className="flex justify-between items-center cursor-pointer py-5">
              <h3 className="text-lg font-medium text-gray-900">Domestic Shipping</h3>
              <span className="text-gray-500 ml-4">
                <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </summary>
            <div className="px-4 pb-5 text-gray-700 space-y-4">
              <p>
                We ship to all 50 U.S. states and territories. Shipping rates and delivery times are as follows:
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Shipping Method</th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Cost</th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Delivery Time</th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Order Cutoff</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr>
                      <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900">Standard</td>
                      <td className="px-3 py-4 text-sm text-gray-500">Free (orders $150+)<br />$7.95 (orders under $150)</td>
                      <td className="px-3 py-4 text-sm text-gray-500">4-7 business days</td>
                      <td className="px-3 py-4 text-sm text-gray-500">12 PM EST</td>
                    </tr>
                    <tr>
                      <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900">Express</td>
                      <td className="px-3 py-4 text-sm text-gray-500">$14.95</td>
                      <td className="px-3 py-4 text-sm text-gray-500">2-3 business days</td>
                      <td className="px-3 py-4 text-sm text-gray-500">2 PM EST</td>
                    </tr>
                    <tr>
                      <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900">Overnight</td>
                      <td className="px-3 py-4 text-sm text-gray-500">$24.95</td>
                      <td className="px-3 py-4 text-sm text-gray-500">Next business day</td>
                      <td className="px-3 py-4 text-sm text-gray-500">12 PM EST</td>
                    </tr>
                    <tr>
                      <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900">Store Pickup</td>
                      <td className="px-3 py-4 text-sm text-gray-500">Free</td>
                      <td className="px-3 py-4 text-sm text-gray-500">Ready within 24 hours</td>
                      <td className="px-3 py-4 text-sm text-gray-500">--</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                <strong>Note:</strong> Business days are Monday through Friday, excluding holidays. Orders placed after the cutoff time will be processed the following business day.
              </p>
            </div>
          </details>

          <details className="group border-b border-gray-200">
            <summary className="flex justify-between items-center cursor-pointer py-5">
              <h3 className="text-lg font-medium text-gray-900">International Shipping</h3>
              <span className="text-gray-500 ml-4">
                <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </summary>
            <div className="px-4 pb-5 text-gray-700 space-y-4">
              <p>
                We ship to over 90 countries worldwide. International shipping rates and delivery times vary by destination.
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Region</th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Standard Shipping</th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Express Shipping</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr>
                      <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900">Canada</td>
                      <td className="px-3 py-4 text-sm text-gray-500">$14.95 (5-8 business days)</td>
                      <td className="px-3 py-4 text-sm text-gray-500">$29.95 (3-5 business days)</td>
                    </tr>
                    <tr>
                      <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900">Europe</td>
                      <td className="px-3 py-4 text-sm text-gray-500">$24.95 (7-12 business days)</td>
                      <td className="px-3 py-4 text-sm text-gray-500">$39.95 (4-6 business days)</td>
                    </tr>
                    <tr>
                      <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900">Asia-Pacific</td>
                      <td className="px-3 py-4 text-sm text-gray-500">$29.95 (10-15 business days)</td>
                      <td className="px-3 py-4 text-sm text-gray-500">$49.95 (5-7 business days)</td>
                    </tr>
                    <tr>
                      <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900">Rest of World</td>
                      <td className="px-3 py-4 text-sm text-gray-500">$34.95 (12-18 business days)</td>
                      <td className="px-3 py-4 text-sm text-gray-500">$59.95 (6-9 business days)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      <strong>Important:</strong> International customers are responsible for all duties, import taxes, and brokerage fees. These are not included in the shipping cost or merchandise price.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </details>

          <details className="group border-b border-gray-200">
            <summary className="flex justify-between items-center cursor-pointer py-5">
              <h3 className="text-lg font-medium text-gray-900">Order Tracking</h3>
              <span className="text-gray-500 ml-4">
                <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </summary>
            <div className="px-4 pb-5 text-gray-700 space-y-4">
              <p>
                Once your order ships, you will receive a shipping confirmation email with a tracking number. You can track your order in two ways:
              </p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Click on the tracking number in your shipping confirmation email</li>
                <li>Visit the "Order Status" section in your Melvin Couture account</li>
              </ol>
              <p>
                Most orders are processed within 1-2 business days. During peak seasons or promotional periods, processing times may be slightly longer.
              </p>
              <div className="mt-4">
                <Link href="/order-status" className="text-indigo-600 hover:text-indigo-500 font-medium">
                  Track Your Order →
                </Link>
              </div>
            </div>
          </details>

          <details className="group border-b border-gray-200">
            <summary className="flex justify-between items-center cursor-pointer py-5">
              <h3 className="text-lg font-medium text-gray-900">Shipping Restrictions</h3>
              <span className="text-gray-500 ml-4">
                <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </summary>
            <div className="px-4 pb-5 text-gray-700 space-y-4">
              <p>
                There are some restrictions to be aware of when placing an order:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>We cannot ship to P.O. boxes for express or overnight deliveries</li>
                <li>Some oversized items may incur additional shipping charges</li>
                <li>Certain luxury items may require signature upon delivery</li>
                <li>We do not ship to freight forwarders</li>
                <li>Some countries may have import restrictions on certain materials or products</li>
              </ul>
              <p>
                If you have any questions about shipping restrictions, please contact our customer service team.
              </p>
            </div>
          </details>

          <details className="group border-b border-gray-200">
            <summary className="flex justify-between items-center cursor-pointer py-5">
              <h3 className="text-lg font-medium text-gray-900">Shipping FAQ</h3>
              <span className="text-gray-500 ml-4">
                <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </summary>
            <div className="px-4 pb-5 text-gray-700 space-y-6">
              <div>
                <h4 className="font-medium text-gray-900">Can I change my shipping address after placing an order?</h4>
                <p className="mt-2">
                  If your order hasn't shipped yet, please contact our customer service team immediately. Once an order has shipped, we cannot change the delivery address.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">What if I'm not home when my package is delivered?</h4>
                <p className="mt-2">
                  For standard shipments, the carrier will typically leave the package at your door. For items requiring signature, the carrier will leave a notice and attempt delivery again the next business day.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Do you ship to APO/FPO addresses?</h4>
                <p className="mt-2">
                  Yes, we ship to APO/FPO addresses using USPS. Please note that delivery times may be longer than standard domestic shipping.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Can I request gift wrapping?</h4>
                <p className="mt-2">
                  Yes, we offer gift wrapping services for $5.95 per item. You can select this option during checkout.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">What shipping carriers do you use?</h4>
                <p className="mt-2">
                  We primarily use UPS, FedEx, and USPS for our shipments, depending on the destination and shipping method selected.
                </p>
              </div>
            </div>
          </details>
        </div>

        {/* Contact section */}
        <div className="mt-16 bg-gray-50 rounded-lg overflow-hidden shadow">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help?</h3>
              <p className="text-gray-700 mb-6">
                Our customer service team is available to answer any questions about shipping and delivery.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div className="ml-3">
                    <p className="text-gray-900 font-medium">Email</p>
                    <p className="text-gray-700">shipping@melvincouture.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div className="ml-3">
                    <p className="text-gray-900 font-medium">Phone</p>
                    <p className="text-gray-700">(800) 555-1234</p>
                    <p className="text-gray-500 text-sm">Mon-Fri, 9AM-6PM EST</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <div className="ml-3">
                    <p className="text-gray-900 font-medium">Live Chat</p>
                    <p className="text-gray-700">Available 7 days a week</p>
                    <p className="text-gray-500 text-sm">9AM-9PM EST</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-indigo-700 p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Check Order Status</h3>
              <p className="mb-6">
                Enter your order number and email address to check the status of your shipment.
              </p>
              <form className="space-y-4">
                <div>
                  <label htmlFor="order-number" className="block text-sm font-medium mb-1">Order Number</label>
                  <input 
                    type="text" 
                    id="order-number" 
                    className="w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-900" 
                    placeholder="e.g., MC10023456"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-900" 
                    placeholder="your-email@example.com"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full py-2 px-4 bg-white text-indigo-700 font-medium rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white"
                >
                  Track Order
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Related links */}
        <div className="mt-16">
          <h3 className="text-lg font-medium text-gray-900 mb-6 text-center">Related Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/return" className="group">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-gray-900 font-medium group-hover:text-indigo-600 transition-colors">Return Policy</h4>
                <p className="mt-2 text-gray-700">Learn about our hassle-free returns process and policies.</p>
              </div>
            </Link>
            <Link href="/terms" className="group">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-gray-900 font-medium group-hover:text-indigo-600 transition-colors">Terms & Conditions</h4>
                <p className="mt-2 text-gray-700">Read our full terms and conditions for purchases.</p>
              </div>
            </Link>
            <Link href="/contact" className="group">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-gray-900 font-medium group-hover:text-indigo-600 transition-colors">Contact Us</h4>
                <p className="mt-2 text-gray-700">Get in touch with our customer service team.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingInformation;