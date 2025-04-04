'use client'
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { NextPage } from 'next';

const SizeChart: NextPage = () => {
  // State to track active tab
  const [activeTab, setActiveTab] = useState('women');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Size Chart | Melvin Couture</title>
        <meta 
          name="description" 
          content="Find your perfect fit with Melvin Couture's comprehensive size charts for women's and men's clothing, shoes, and accessories."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Header */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-gray-900 text-center">
              Size Guide
            </h1>
            <p className="mt-2 text-gray-600 text-center max-w-3xl">
              Find your perfect fit. Our size charts will help you determine the best size for your measurements.
            </p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Size guide note */}
        <div className="bg-blue-50 rounded-lg p-4 mb-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800">How to measure yourself</h3>
              <div className="mt-2 text-sm text-blue-700">
                <p>
                  For the most accurate results, measure directly over your undergarments. Keep the measuring tape snug but not tight. If possible, have someone help you for the best measurements.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => handleTabChange('women')}
              className={`${
                activeTab === 'women'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm sm:text-base`}
            >
              Women
            </button>
            <button
              onClick={() => handleTabChange('men')}
              className={`${
                activeTab === 'men'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm sm:text-base`}
            >
              Men
            </button>
            <button
              onClick={() => handleTabChange('shoes')}
              className={`${
                activeTab === 'shoes'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm sm:text-base`}
            >
              Shoes
            </button>
            <button
              onClick={() => handleTabChange('accessories')}
              className={`${
                activeTab === 'accessories'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm sm:text-base`}
            >
              Accessories
            </button>
          </nav>
        </div>

        {/* Women's Size Charts */}
        {activeTab === 'women' && (
          <div className="py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left column - Measurement Guide */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">How to Take Your Measurements</h2>
              
                
                <div className="mt-6 space-y-6">
                  <div>
                    <h3 className="text-gray-900 font-medium">Bust</h3>
                    <p className="mt-1 text-gray-600">Measure around the fullest part of your bust, keeping the tape horizontal.</p>
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-medium">Waist</h3>
                    <p className="mt-1 text-gray-600">Measure around your natural waistline, at the smallest part of your waist.</p>
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-medium">Hips</h3>
                    <p className="mt-1 text-gray-600">Measure around the fullest part of your hips, approximately 8" below your waistline.</p>
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-medium">Inseam</h3>
                    <p className="mt-1 text-gray-600">Measure from the crotch to the bottom of the leg.</p>
                  </div>
                </div>
              </div>

              {/* Right column - Size Charts */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Women's Apparel Size Chart</h2>
                
                {/* Unit toggle */}
                <div className="flex items-center justify-end mb-4">
                  <span className="text-sm text-gray-500 mr-2">Units:</span>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input 
                      type="checkbox" 
                      name="unit-toggle" 
                      id="unit-toggle" 
                      className="sr-only"
                    />
                    <label 
                      htmlFor="unit-toggle" 
                      className="block h-6 overflow-hidden rounded-full bg-gray-300 cursor-pointer"
                    >
                      <span className="block h-6 w-6 rounded-full bg-white shadow transform transition-transform duration-200 ease-in-out"></span>
                    </label>
                  </div>
                  <span className="text-sm text-gray-500 ml-1">inches/cm</span>
                </div>

                <div className="overflow-x-auto border rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bust</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Waist</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hips</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">XS (0-2)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">32"-33" (81-84 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">24"-25" (61-64 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">34"-35" (86-89 cm)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">S (4-6)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">34"-35" (86-89 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">26"-27" (66-69 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">36"-37" (91-94 cm)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">M (8-10)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">36"-37" (91-94 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">28"-29" (71-74 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">38"-39" (97-99 cm)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">L (12-14)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">38"-40" (97-102 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">30"-32" (76-81 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">40"-42" (102-107 cm)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">XL (16-18)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">41"-43" (104-109 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">33"-35" (84-89 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">43"-45" (109-114 cm)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">XXL (20-22)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">44"-46" (112-117 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">36"-38" (91-97 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">46"-48" (117-122 cm)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-medium text-gray-900 mt-8 mb-4">Women's Jeans & Pants</h3>
                <div className="overflow-x-auto border rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Waist</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hips</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Inseam (Regular)</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">0</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">24" (61 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">34" (86 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">30" (76 cm)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">25" (64 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">35" (89 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">30" (76 cm)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">26" (66 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">36" (91 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">30" (76 cm)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">6</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">27" (69 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">37" (94 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">30" (76 cm)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">8</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">28" (71 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">38" (97 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">30" (76 cm)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">10</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">29" (74 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">39" (99 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">30" (76 cm)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">12</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">30" (76 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">40" (102 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">30" (76 cm)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">14</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">32" (81 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">42" (107 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">30" (76 cm)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Men's Size Charts */}
        {activeTab === 'men' && (
          <div className="py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left column - Measurement Guide */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">How to Take Your Measurements</h2>
                <div className="mt-6 space-y-6">
                  <div>
                    <h3 className="text-gray-900 font-medium">Chest</h3>
                    <p className="mt-1 text-gray-600">Measure around the fullest part of your chest, keeping the tape horizontal.</p>
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-medium">Waist</h3>
                    <p className="mt-1 text-gray-600">Measure around your natural waistline, at the smallest part of your waist.</p>
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-medium">Hips</h3>
                    <p className="mt-1 text-gray-600">Measure around the fullest part of your seat.</p>
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-medium">Inseam</h3>
                    <p className="mt-1 text-gray-600">Measure from the crotch to the bottom of the leg.</p>
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-medium">Neck</h3>
                    <p className="mt-1 text-gray-600">Measure around the base of your neck, where a collar would sit.</p>
                  </div>
                </div>
              </div>

              {/* Right column - Size Charts */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Men's Apparel Size Chart</h2>
                
                <div className="overflow-x-auto border rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Chest</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Waist</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hips</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">XS</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">34"-36" (86-91 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">28"-30" (71-76 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">34"-36" (86-91 cm)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">S</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">36"-38" (91-97 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">30"-32" (76-81 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">36"-38" (91-97 cm)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">M</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">38"-40" (97-102 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">32"-34" (81-86 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">38"-40" (97-102 cm)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">L</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">40"-42" (102-107 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">34"-36" (86-91 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">40"-42" (102-107 cm)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">XL</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">42"-44" (107-112 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">36"-38" (91-97 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">42"-44" (107-112 cm)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">XXL</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">44"-46" (112-117 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">38"-40" (97-102 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">44"-46" (112-117 cm)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <h3 className="text-lg font-medium text-gray-900 mt-8 mb-4">Men's Dress Shirts</h3>
                <div className="overflow-x-auto border rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Neck</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sleeve</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Chest</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">14</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">14" (36 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">32"-33" (81-84 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">34"-36" (86-91 cm)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">15</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">15" (38 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">32"-33" (81-84 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">38"-40" (97-102 cm)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">16</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">16" (41 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">34"-35" (86-89 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">42"-44" (107-112 cm)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">17</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">17" (43 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">34"-35" (86-89 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">46"-48" (117-122 cm)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">18</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">18" (46 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">36"-37" (91-94 cm)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">48"-50" (122-127 cm)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Shoes Size Charts */}
        {activeTab === 'shoes' && (
          <div className="py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left column - Measurement Guide */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">How to Measure Your Feet</h2>
               
                
                <div className="mt-6 space-y-6">
                  <div>
                    <h3 className="text-gray-900 font-medium">Step 1: Prepare for Measuring</h3>
                    <p className="mt-1 text-gray-600">Place a piece of paper on a hard floor (not on carpet). Wear the socks you would typically wear with the shoes you're purchasing.</p>
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-medium">Step 2: Trace Your Foot</h3>
                    <p className="mt-1 text-gray-600">Stand on the paper with your full weight on your foot. Trace the outline of your foot. Make sure the pencil is positioned perpendicular to the paper.</p>
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-medium">Step 3: Measure Length</h3>
                    <p className="mt-1 text-gray-600">Measure the distance from the heel to the longest toe in centimeters or inches.</p>
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-medium">Step 4: Measure Width</h3>
                    <p className="mt-1 text-gray-600">Measure the width of your foot at its widest point.</p>
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-medium">Step 5: Find Your Size</h3>
                    <p className="mt-1 text-gray-600">Use our size chart to determine your shoe size based on your measurements.</p>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-lg p-4 mt-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-yellow-800">Sizing Tip</h3>
                      <div className="mt-2 text-sm text-yellow-700">
                        <p>Feet tend to swell during the day, so we recommend measuring your feet in the evening for the most accurate sizing.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column - Size Charts */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Women's Shoe Size Chart</h2>
                
                <div className="overflow-x-auto border rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">US</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">EU</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">UK</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Foot Length (in)</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Foot Length (cm)</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">5</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">35-36</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">3</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">8.5"</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">21.6 cm</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">6</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">36-37</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">4</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">8.8"</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">22.2 cm</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">7</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">37-38</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">5</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">9.0"</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">22.9 cm</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">8</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">38-39</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">6</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">9.3"</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">23.5 cm</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">9</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">39-40</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">7</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">9.5"</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">24.1 cm</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">10</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">40-41</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">8</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">9.8"</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">24.8 cm</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">11</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">41-42</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">9</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">10.0"</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">25.4 cm</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Men's Shoe Size Chart</h2>
                
                <div className="overflow-x-auto border rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">US</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">EU</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">UK</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Foot Length (in)</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Foot Length (cm)</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">7</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">40</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">6</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">9.6"</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">24.4 cm</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">8</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">41</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">7</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">9.9"</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">25.1 cm</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">9</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">42</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">8</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">10.2"</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">25.9 cm</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">10</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">43</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">9</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">10.5"</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">26.7 cm</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">11</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">44</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">10</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">10.8"</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">27.5 cm</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">12</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">45</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">11</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">11.2"</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">28.4 cm</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">13</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">46</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">12</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">11.5"</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">29.2 cm</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Accessories Size Charts */}
        {activeTab === 'accessories' && (
          <div className="py-8">
            <div className="space-y-12">
              {/* Hats & Headwear */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Hats & Headwear</h2>
                <div className="overflow-x-auto border rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Head Circumference (in)</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Head Circumference (cm)</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hat Size</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">S</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">21"-21.5"</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">53-55 cm</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">6¾ - 6⅞</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">M</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">22"-22.5"</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">56-57 cm</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">7 - 7⅛</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">L</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">23"-23.5"</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">58-60 cm</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">7¼ - 7⅜</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">XL</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">24"-24.5"</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">61-62 cm</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">7½ - 7⅝</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-sm text-gray-600">To measure your head size, wrap a measuring tape around your head about 1/2 inch above your eyebrows and ears.</p>
              </div>

              {/* Gloves */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Gloves</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Women's Gloves</h3>
                    <div className="overflow-x-auto border rounded-lg">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hand Circumference (in)</th>
                            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hand Circumference (cm)</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">XS</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">6"-6.5"</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">15-17 cm</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">S</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">6.5"-7"</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">17-18 cm</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">M</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">7"-7.5"</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">18-19 cm</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">L</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">7.5"-8"</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">19-20 cm</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Men's Gloves</h3>
                    <div className="overflow-x-auto border rounded-lg">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hand Circumference (in)</th>
                            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hand Circumference (cm)</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">S</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">7.5"-8"</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">19-20 cm</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">M</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">8.5"-9"</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">21-23 cm</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">L</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">9.5"-10"</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">24-25 cm</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">XL</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">10.5"-11"</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">26-28 cm</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-gray-600">To measure your hand size, wrap a measuring tape around your hand at the widest point, excluding your thumb.</p>
              </div>

              {/* Belts */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Belts</h2>
                <div className="overflow-x-auto border rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pant Size</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Belt Size</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Waist Measurement (in)</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Waist Measurement (cm)</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">26-28</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">S (30)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">28"-30"</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">71-76 cm</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">30-32</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">M (34)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">32"-34"</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">81-86 cm</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">34-36</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">L (38)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">36"-38"</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">91-97 cm</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">38-40</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">XL (42)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">40"-42"</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">102-107 cm</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">42-44</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">XXL (46)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">44"-46"</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">112-117 cm</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 bg-blue-50 rounded-lg p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-blue-800">Belt Sizing Tip</h3>
                      <div className="mt-2 text-sm text-blue-700">
                        <p>For the best fit, choose a belt that is 2-3 inches larger than your pant size. For example, if you wear size 34 pants, select a size 36-38 belt.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Help section */}
        <div className="border-t border-gray-200 mt-12 pt-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Need Help Finding Your Size?</h2>
            <p className="text-gray-600 mb-8">
              Our customer service team is available to assist you with any sizing questions you may have.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="mailto:support@melvincouture.com" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Email Us
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeChart;