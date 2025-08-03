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
                src='/images/civic-intro.jpg'
                alt='Car - Civic'
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className='car-overview-text'>
              <p>
                I purchased my 1989 Honda Civic ED6 in 2014 as a daily, with the intention of taking it to the track. After receiving a B18CR swap 2 years in, the car has since developed with quite a solid suspension package, sporting faster lap times as I get more time in the saddle. Towards the end of 2024, the Civic received a big gearbox upgrade to take it to the next step.
              </p>
              <p>
                After years of watching GT racing, the itch has grown to start my door to door career in the car. The Civic has now received a full weld in cage, and has been prepped for racing. It will be competing in our local MRA Super TT competition, I'll document all of the racing through here as the build thread continues!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='car-blog-btn-section'>
        {/* TODO: Resolve hardcoding this, for now it's ok. Don't want to do `use client` client side */}
        <NextLink className='car-blog-btn' href={{ pathname: `/blog/civic/civic-125` }}>
          View Blog Posts
        </NextLink>
        <NextLink className='car-blog-btn' href="https://www.youtube.com/channel/UCFc9tpCLYcSgmSTzTHyZiIQ">
          YouTube
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