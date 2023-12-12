"use client"
import React, { useEffect, useState } from 'react'
import classes from './index.module.scss'

function Promotion() {

    const [time, setTime] = useState({
        days:0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })
    
      useEffect(() => {
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 7); // Adding 7 days to the current date
    
        const interval = setInterval(() => {
          const currentDate = new Date();
          const timeDifference = targetDate.getTime() - currentDate.getTime();
    
          if (timeDifference > 0) {
            const seconds = Math.floor((timeDifference / 1000) % 60);
            const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
            const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    
            setTime({ days, hours, minutes, seconds });
          } else {
            clearInterval(interval);
            setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
          }
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);
  return (
    <div className={classes.promotion}>
    <div className={classes.textBox}>
    <h3 className={classes.title}>
        Deals of the month
      </h3>
      <p>
          Get ready for a shopping experience like never before with our Deals of the Month! Every
          purchase comes with exclusive perks and offers, making this month a celebration of savvy
          choices and amazing deals. Don't miss out! 🎁🛒
        </p>

        <ul className={classes.stats}>
         <StatBox value = {time.days} label="days"/>
         <StatBox value = {time.hours} label="hours"/>
         <StatBox value = {time.minutes} label="minutes"/>
         <StatBox value = {time.seconds} label="seconds"/>
        </ul>
    </div>
    </div>
  )
}


const StatBox = ({label, value}) => {


    return (
        <li className={classes.statBox}>
        <h4>{value}</h4>
        <p>{label}</p>
        
    </li>
)
}
export default Promotion
