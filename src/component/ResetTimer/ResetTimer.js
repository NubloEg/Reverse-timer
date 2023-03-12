import React from 'react';
import './ResetTimer.css'


const ResetTimer = (props) => {




    const [now_time,setNowTime]=React.useState(new Date())

    const undefinedTime=(time)=>{
        if (time===undefined){
            return 0
        }else{
            return time
        }
    }

    const deadline_years=undefinedTime(props.deadline.years);
    const deadline_month=undefinedTime(props.deadline.month-1);
    const deadline_days= undefinedTime(props.deadline.days);
    const deadline_hours=undefinedTime(props.deadline.hours);
    const deadline_minutes=undefinedTime(props.deadline.minutes);
    const deadline_seconds=undefinedTime(props.deadline.seconds);
    const deadline= new Date(deadline_years,deadline_month,deadline_days,deadline_hours,deadline_minutes,deadline_seconds)


    let time=deadline-now_time;
    if (now_time===0){
        time=0;
    }
    let seconds = Math.floor( (time/1000) % 60 );
    let minutes = Math.floor( (time/1000/60) % 60 );
    let hours = Math.floor( (time/(1000*60*60)) % 24 );
    let days = Math.floor( time/(1000*60*60*24) );

    React.useEffect(()=>{
        const timerID= setInterval((e)=>setNowTime(time>0?new Date():0),1000);
        return ()=>{
            clearInterval(timerID)
        }
    },[time])

    console.log("ghbdtn")










    return (
        <div className="wrapper">
            <div className="content">
                <div className={'h1'}>{props.title}</div>
                <div className={'h2'}>{props.quote.text}</div>
                <div className="time">
                    <div className="time_item">
                        <div className="num">{days}</div>
                        <div className="category">DAYS</div>
                    </div>
                    <div className="time_item">
                        <div className="num">{hours}</div>
                        <div className="category">HOURS</div>
                    </div>
                    <div className="time_item">
                        <div className="num">{minutes}</div>
                        <div className="category">MINUTES</div>
                    </div>
                    <div className="time_item">
                        <div className="num">{seconds}</div>
                        <div className="category">SECONDS</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetTimer;