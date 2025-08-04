import './Car.css'
import React from 'react'
import Image from 'next/image'
import NextLink from 'next/link'
import carOverviewData from '../../../lib/carOverviewData.json'
import civicSpecData from '../../../lib/civicSpecData.json'
import civicRaceData from '../../../lib/civicRaceData.json'

export default function Car() {
  // TODO: Pass this through
  const car = 'civic'
  const carData = carOverviewData[car];

  return (
    // <div className='car-page-wrapper'>
    <div className='car-container'>

      {/* Overview of the car */}
      <section className='car-overview'>
        <div className='car-overview-container'>
          <h2>{carData.title} - Overview</h2>
          <div className='car-overview-content'>
            <div className='car-overview-photo'>
              <Image
                src = {carData.overview.image}
                alt = {`Car - ${carData.overview.title}`}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className='car-overview-text'>
              <p>{carData.overview.description[0]}</p>
              <p>{carData.overview.description[1]}</p>
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
    // </div>
  )
}