import './Car.css'
import React from 'react'
import Image from 'next/image'
import NextLink from 'next/link'
import civicSpecData from '../../../lib/civicSpecData.json'
import civicRaceData from '../../../lib/civicRaceData.json'

export default function Car() {

  return (
    <div className='car-container'>

      {/* Overview of the car */}
      <section className='car-overview'>
        <div className='car-overview-container'>
          <h2>Civic - Overview</h2>
          <div className='car-overview-content'>
            <div className='car-overview-photo'>
              <Image
                src='/civic-img.jpg'
                alt='Car - Civic'
                fill
              />
            </div>
            <div className='car-overview-text'>
              <p>
                The BMW M4 GT3 is the latest evolution in BMW's storied racing heritage. Built from the ground up for GT3 competition, this machine combines cutting-edge aerodynamics with BMW's legendary inline-six engine technology.
              </p>
              <p>
                Every component has been meticulously engineered for maximum performance and reliability. From the carbon fiber monocoque chassis to the advanced traction control system, the M4 GT3 represents the pinnacle of what's possible when form follows function.
              </p>
              <p>
                This race car has proven its mettle on circuits around the world, securing victories in prestigious championships and setting new benchmarks for GT3 performance. Whether it's the Nürburgring Nordschleife or the streets of Monaco, the M4 GT3 delivers uncompromising performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='car-blog-btn-section'>
        {/* TODO: Resolve hardcoding this, for now it's ok. Don't want to do `use client` client side */}
        <NextLink className='car-blog-btn' href={{ pathname: `/blog/civic/civic-125` }}>
          View Blog Post's
        </NextLink>
      </section>

      {/* Tech specs of the car */}
      <section className='car-spec'>
        <div className='car-spec-container'>
          <h2>Technical Specifications</h2>
          <div className='car-spec-grid'>
            {civicSpecData.map((category, index) => (
              <div key={index} className='car-spec-category'>
                <h3>
                  <i className={category.icon}></i> {category.title}
                </h3>
                <ul>
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <strong>{item.label}:</strong> {item.value}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info on lap PB's and race stats */}
      <section className='car-racedata'>
        <div className='car-racedata-container'>
          <h2>Race Stats</h2>
          <div className='car-racedata-grid-v2'>
            <div className='car-racedata-card-v2'>
              <table>
                <thead>
                  <tr>
                    <th>Track</th>
                    <th>Time</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {civicRaceData.map((x, index) => (
                    <React.Fragment key={index}>
                      <tr>
                        <td>{x.name}</td>
                        <td>{x.time}</td>
                        <td>{x.date}</td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
            <div className='car-racedata-card-v2'>
              <table>
                <thead>
                  <tr>
                    <th>Track</th>
                    <th>Time</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {civicRaceData.map((x, index) => (
                    <React.Fragment key={index}>
                      <tr>
                        <td>{x.name}</td>
                        <td>{x.time}</td>
                        <td>{x.date}</td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}